"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { FONT_STYLES, CATEGORIES, MOOD_TAGS, type FontStyle } from "@/utils/fontMap";
import BioPreview from "./BioPreview";

const PLATFORMS = [
  { id: "instagram", label: "Instagram", emoji: "📸", limit: 150 },
  { id: "tiktok",    label: "TikTok",    emoji: "🎵", limit: 80  },
  { id: "twitter",   label: "Twitter/X", emoji: "✕",  limit: 160 },
  { id: "discord",   label: "Discord",   emoji: "💬", limit: 190 },
] as const;

type PlatformId = typeof PLATFORMS[number]["id"];

const LS_KEY = "gofancyfont_favorites";

// ── Language / Script Detection ─────────────────────────────────────────────
function detectScript(text: string): "latin" | "mixed" | "nonlatin" {
  const hasNonLatin =
    /[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]/.test(text) || // Korean
    /[\u3040-\u309F\u30A0-\u30FF]/.test(text)                 || // Japanese kana
    /[\u4E00-\u9FFF\u3400-\u4DBF]/.test(text)                 || // CJK Unified
    /[\u0600-\u06FF]/.test(text)                               || // Arabic
    /[\u0900-\u097F]/.test(text);                                 // Devanagari
  const hasLatin = /[a-zA-Z]/.test(text);
  if (hasNonLatin && hasLatin) return "mixed";
  if (hasNonLatin) return "nonlatin";
  return "latin";
}

interface CopiedState {
  id: string;
  timeout: ReturnType<typeof setTimeout> | null;
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 transition-all duration-200"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

export default function Generator({ lang: _lang }: { lang?: string } = {}) {
  const [inputText, setInputText]           = useState("Fancy Font Generator");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeMood, setActiveMood]         = useState<string>("");
  const [copied, setCopied]                 = useState<CopiedState>({ id: "", timeout: null });
  const [search, setSearch]                 = useState("");
  const [favorites, setFavorites]           = useState<string[]>([]);
  const [previewStyle, setPreviewStyle]     = useState<FontStyle | null>(null);
  const [showFavOnly, setShowFavOnly]       = useState(false);
  const [activePlatform, setActivePlatform] = useState<PlatformId>("instagram");
  const initialized                         = useRef(false);

  // ── Load favorites from localStorage ──────────────────
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {}
    setPreviewStyle(FONT_STYLES.find((s) => s.id === "bold-script") ?? FONT_STYLES[0]);
  }, []);

  // ── Listen for bio template selection ──────────────────
  useEffect(() => {
    const handler = (e: Event) => {
      const text = (e as CustomEvent<{ text: string }>).detail.text;
      setInputText(text);
      document.getElementById("font-input")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener("selectBioTemplate", handler);
    return () => window.removeEventListener("selectBioTemplate", handler);
  }, []);

  // ── Persist favorites ──────────────────────────────────
  useEffect(() => {
    if (!initialized.current) return;
    try { localStorage.setItem(LS_KEY, JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  // ── Language detection ─────────────────────────────────
  const detectedScript = useMemo(() => detectScript(inputText), [inputText]);
  const hasJapanese    = useMemo(
    () => /[\u3040-\u309F\u30A0-\u30FF]/.test(inputText),
    [inputText]
  );

  // ── Filtered & sorted styles ───────────────────────────
  const moodKeywords = useMemo(
    () => MOOD_TAGS.find((m) => m.id === activeMood)?.keywords ?? [],
    [activeMood]
  );

  const filteredStyles = useMemo(() => {
    const q = search.toLowerCase();
    let list = FONT_STYLES.filter((style) => {
      const matchCat    = activeCategory === "all" || style.category === activeCategory;
      const matchSearch = q === "" ||
        style.name.toLowerCase().includes(q) ||
        style.description.toLowerCase().includes(q) ||
        style.tags.some((tag) => tag.includes(q));
      const matchMood   = activeMood === "" ||
        style.tags.some((tag) => (moodKeywords as readonly string[]).includes(tag));
      const matchFav    = !showFavOnly || favorites.includes(style.id);
      return matchCat && matchSearch && matchMood && matchFav;
    });
    // When non-Latin text detected, float compatible styles to top
    if (detectedScript !== "latin" && activeCategory === "all" && !showFavOnly) {
      list = [
        ...list.filter((s) => s.langCompat === "all" || (hasJapanese && s.langCompat === "ja")),
        ...list.filter((s) => !(s.langCompat === "all" || (hasJapanese && s.langCompat === "ja"))),
      ];
    }
    // Favorites float to the top (within their compat group)
    if (favorites.length > 0 && !showFavOnly) {
      list = [
        ...list.filter((s) => favorites.includes(s.id)),
        ...list.filter((s) => !favorites.includes(s.id)),
      ];
    }
    return list;
  }, [activeCategory, search, activeMood, moodKeywords, favorites, showFavOnly, detectedScript, hasJapanese]);

  const handleCopy = useCallback(
    (style: FontStyle) => {
      const transformed = style.transform(inputText || "Type something...");
      navigator.clipboard.writeText(transformed).then(() => {
        if (copied.timeout) clearTimeout(copied.timeout);
        const timeout = setTimeout(() => setCopied({ id: "", timeout: null }), 2000);
        setCopied({ id: style.id, timeout });
      });
    },
    [inputText, copied.timeout]
  );

  const favCount        = favorites.length;
  const activeMoodInfo  = MOOD_TAGS.find((m) => m.id === activeMood);
  const platform        = PLATFORMS.find((p) => p.id === activePlatform)!;
  const charCount       = inputText.length;
  const charLimit       = platform.limit;
  const charPct         = charLimit > 0 ? charCount / charLimit : 0;
  const charColor       = charPct > 1 ? "text-red-500" : charPct > 0.8 ? "text-amber-500" : "text-ed-muted";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-6">

      {/* ── Top layout: Input + Bio Preview ───────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* Input section */}
        <section className="space-y-3">
          {/* Label row + platform selector */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label
              htmlFor="font-input"
              className="text-[11px] font-semibold text-ed-muted tracking-[0.18em] uppercase"
            >
              Your Text
            </label>
            <div className="flex gap-1">
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(p.id)}
                  title={`${p.label} — ${p.limit} char limit`}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150
                    ${activePlatform === p.id
                      ? "bg-petal-100 text-petal-500 border border-petal-300"
                      : "bg-white text-ed-muted hover:text-ed-charcoal border border-ed-border hover:border-petal-200"
                    }`}
                >
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <textarea
              id="font-input"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="w-full rounded-2xl bg-white border border-ed-border text-ed-charcoal text-lg
                         placeholder-ed-muted/50 px-5 py-4 resize-none outline-none
                         focus:border-petal-400 focus:ring-2 focus:ring-petal-300/30
                         transition-all duration-200 leading-relaxed"
              maxLength={200}
            />
            <span className={`absolute bottom-3 right-4 text-xs transition-colors ${charColor}`}>
              {charCount}/{charLimit}
            </span>
          </div>

          {/* Char limit bar */}
          {charLimit > 0 && (
            <div className="h-1 rounded-full bg-ed-border overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  charPct > 1 ? "bg-red-400" : charPct > 0.8 ? "bg-amber-400" : "bg-petal-400"
                }`}
                style={{ width: `${Math.min(charPct * 100, 100)}%` }}
              />
            </div>
          )}

          {inputText && (
            <button
              onClick={() => setInputText("")}
              className="text-xs text-ed-muted hover:text-petal-500 transition-colors"
            >
              ✕ Clear
            </button>
          )}

          {/* Preview style quick-switch */}
          {previewStyle && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-xs text-ed-muted self-center">Preview style:</span>
              {FONT_STYLES.slice(0, 5).map((s) => (
                <button
                  key={s.id}
                  onClick={() => setPreviewStyle(s)}
                  className={`px-2.5 py-1 rounded-full text-xs transition-all
                    ${previewStyle.id === s.id
                      ? "bg-petal-100 text-petal-500 border border-petal-300"
                      : "bg-white text-ed-muted hover:text-ed-charcoal border border-ed-border"
                    }`}
                >
                  {s.id}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Bio Preview Card */}
        {previewStyle && (
          <BioPreview
            rawText={inputText}
            styledText={previewStyle.transform(inputText || "Your Name")}
            styleName={previewStyle.id}
          />
        )}
      </div>

      {/* ── Ad Slot: Top ─────────────────────────────────── */}
      <div className="w-full h-[90px] bg-white border border-ed-border rounded-2xl
                      flex items-center justify-center text-ed-muted/40 text-sm tracking-wider">
        <span>[ Advertisement ]</span>
      </div>

      {/* ── Filters ──────────────────────────────────────── */}
      <section className="space-y-3">

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setShowFavOnly(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                ${activeCategory === cat.id && !showFavOnly
                  ? "bg-petal-500 text-white shadow-sm shadow-petal-400/30"
                  : "bg-white text-ed-muted border border-ed-border hover:border-petal-200 hover:text-ed-charcoal"
                }`}
            >
              {cat.label}
            </button>
          ))}

          {/* Favorites toggle */}
          <button
            onClick={() => { setShowFavOnly((v) => !v); setActiveCategory("all"); }}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium
                        transition-all duration-150
              ${showFavOnly
                ? "bg-petal-100 text-petal-500 border border-petal-300"
                : "bg-white text-ed-muted border border-ed-border hover:border-petal-200 hover:text-ed-charcoal"
              }`}
          >
            <HeartIcon filled={showFavOnly} />
            Favorites
            {favCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 text-[10px] rounded-full bg-petal-100 text-petal-500">
                {favCount}
              </span>
            )}
          </button>
        </div>

        {/* ── Vibe / Mood filter ──────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-ed-muted self-center tracking-wider uppercase mr-1">
            Vibe
          </span>
          {MOOD_TAGS.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setActiveMood((prev) => (prev === mood.id ? "" : mood.id))}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150
                ${activeMood === mood.id
                  ? "bg-bloom-100 text-bloom-500 border border-bloom-300"
                  : "bg-white text-ed-muted hover:text-ed-charcoal border border-ed-border hover:border-bloom-200"
                }`}
            >
              {mood.emoji} {mood.label}
            </button>
          ))}
          {activeMood && (
            <button
              onClick={() => setActiveMood("")}
              className="text-xs text-ed-muted hover:text-petal-500 transition-colors ml-1"
            >
              ✕ clear
            </button>
          )}
        </div>

        {/* Search input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search by name or vibe (e.g. "gothic", "cute", "retro")'
          className="w-full max-w-sm bg-white border border-ed-border rounded-xl
                     text-sm text-ed-charcoal placeholder-ed-muted/50 px-4 py-2 outline-none
                     focus:border-petal-400 transition-all"
        />
      </section>

      {/* ── Non-Latin Language Banner ─────────────────────── */}
      {detectedScript !== "latin" && (
        <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-bloom-50 border border-bloom-200 text-sm">
          <span className="text-lg leading-none">🌏</span>
          <div>
            <p className="text-bloom-500 font-medium leading-snug">
              Non-Latin text detected — compatible styles floated to top
            </p>
            <p className="text-ed-muted text-xs mt-0.5">
              Unicode font styles only work with English/Latin letters.
              Styles marked <span className="text-emerald-600 font-medium">✓ All languages</span> work with Korean, Japanese, Chinese, and more.
            </p>
          </div>
        </div>
      )}

      {/* ── Results ──────────────────────────────────────── */}
      <section>
        <p className="text-[11px] text-ed-muted mb-4 tracking-wider uppercase flex flex-wrap gap-x-2">
          <span>{filteredStyles.length} styles</span>
          {activeMoodInfo && (
            <span className="text-bloom-400">
              · {activeMoodInfo.emoji} {activeMoodInfo.label}
            </span>
          )}
          {favCount > 0 && !showFavOnly && (
            <span className="text-petal-400">· {favCount} favorited</span>
          )}
        </p>

        {showFavOnly && filteredStyles.length === 0 && (
          <div className="text-center py-12 text-ed-muted">
            <p className="text-4xl mb-3">♡</p>
            <p className="text-sm">No favorites yet.</p>
            <p className="text-xs mt-1 text-ed-muted/60">
              Click the ♥ icon on any style card to save it here.
            </p>
          </div>
        )}

        {!showFavOnly && filteredStyles.length === 0 && (
          <div className="text-center py-12 text-ed-muted">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">No styles found.</p>
            <p className="text-xs mt-1 text-ed-muted/60">
              Try a different vibe or clear your filters.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredStyles.map((style, index) => {
            const transformed = style.transform(inputText.trim() || "Your Text Here");
            const isCopied    = copied.id === style.id;
            const isFav       = favorites.includes(style.id);
            const isPreview   = previewStyle?.id === style.id;

            return (
              <>
                {index > 0 && index % 8 === 0 && (
                  <div
                    key={`ad-${index}`}
                    className="col-span-full h-[90px] bg-white border border-ed-border rounded-2xl
                               flex items-center justify-center text-ed-muted/40 text-sm tracking-wider"
                  >
                    <span>[ Advertisement ]</span>
                  </div>
                )}

                <div
                  key={style.id}
                  className={`group relative flex flex-col gap-3 p-5 rounded-2xl
                              bg-white border transition-all duration-200
                    ${isPreview
                      ? "border-petal-400 ring-1 ring-petal-300/40 shadow-sm shadow-petal-100"
                      : "border-ed-border hover:border-petal-300 hover:shadow-sm hover:shadow-petal-100/50"
                    }`}
                >
                  {/* Meta row */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] text-petal-400 font-semibold tracking-[0.18em] uppercase mb-0.5">
                        {style.category}
                      </p>
                      <p className="text-xs text-ed-muted leading-snug">{style.description}</p>
                      {/* Mood tags preview */}
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {style.tags.slice(0, 3).map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              const mood = MOOD_TAGS.find((m) =>
                                (m.keywords as readonly string[]).includes(tag)
                              );
                              if (mood) setActiveMood((prev) => (prev === mood.id ? "" : mood.id));
                            }}
                            className="text-[10px] px-1.5 py-0.5 rounded-full bg-petal-50 border border-petal-200
                                       text-petal-400 hover:bg-petal-100 transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action icons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Set as bio preview */}
                      <button
                        onClick={() => setPreviewStyle(style)}
                        title="Preview in Instagram bio card"
                        className={`p-1.5 rounded-lg transition-all duration-150
                          ${isPreview
                            ? "text-petal-500 bg-petal-100"
                            : "text-ed-muted hover:text-petal-500 hover:bg-petal-50"
                          }`}
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8M12 17v4" />
                        </svg>
                      </button>

                      {/* Favorite */}
                      <button
                        onClick={() => toggleFavorite(style.id)}
                        title={isFav ? "Remove from favorites" : "Save to favorites"}
                        className={`p-1.5 rounded-lg transition-all duration-150 active:scale-90
                          ${isFav
                            ? "text-petal-500 bg-petal-100 hover:bg-petal-200"
                            : "text-ed-muted hover:text-petal-500 hover:bg-petal-50"
                          }`}
                      >
                        <HeartIcon filled={isFav} />
                      </button>
                    </div>
                  </div>

                  {/* Language compat badge */}
                  {detectedScript !== "latin" && (
                    <div className="flex items-center gap-1.5">
                      {style.langCompat === "all" ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-medium">
                          ✓ All languages
                        </span>
                      ) : style.langCompat === "ja" ? (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                          hasJapanese
                            ? "bg-sky-50 text-sky-600 border-sky-200"
                            : "bg-ed-bg text-ed-muted border-ed-border"
                        }`}>
                          {hasJapanese ? "✓ Japanese" : "Japanese only"}
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-ed-bg text-ed-muted border border-ed-border">
                          Latin only
                        </span>
                      )}
                    </div>
                  )}

                  {/* Transformed text */}
                  <div
                    className="min-h-[3rem] px-4 py-3 rounded-xl bg-petal-50 border border-petal-100
                               text-ed-charcoal text-lg leading-relaxed break-all select-all"
                    title="Click to select all"
                  >
                    {transformed}
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={() => handleCopy(style)}
                    aria-label={`Copy ${style.name}`}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium
                               transition-all duration-200 active:scale-95
                      ${isCopied
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : "bg-petal-500 text-white hover:bg-petal-600 shadow-sm shadow-petal-300/40"
                      }`}
                  >
                    {isCopied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Text
                      </>
                    )}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* ── Ad Slot: Bottom ──────────────────────────────── */}
      <div className="w-full h-[250px] bg-white border border-ed-border rounded-2xl
                      flex items-center justify-center text-ed-muted/40 text-sm tracking-wider">
        <span>[ Advertisement ]</span>
      </div>
    </div>
  );
}
