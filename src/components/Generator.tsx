"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { FONT_STYLES, CATEGORIES, type FontStyle } from "@/utils/fontMap";
import BioPreview from "./BioPreview";

const LS_KEY = "gofancyfont_favorites";

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

export default function Generator() {
  const [inputText, setInputText]           = useState("Fancy Font Generator");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied]                 = useState<CopiedState>({ id: "", timeout: null });
  const [search, setSearch]                 = useState("");
  const [favorites, setFavorites]           = useState<string[]>([]);
  const [previewStyle, setPreviewStyle]     = useState<FontStyle | null>(null);
  const [showFavOnly, setShowFavOnly]       = useState(false);
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

  // ── Filtered & sorted styles ───────────────────────────
  const filteredStyles = useMemo(() => {
    let list = FONT_STYLES.filter((style) => {
      const matchCat    = activeCategory === "all" || style.category === activeCategory;
      const matchSearch = search === "" ||
        style.name.toLowerCase().includes(search.toLowerCase()) ||
        style.description.toLowerCase().includes(search.toLowerCase());
      const matchFav    = !showFavOnly || favorites.includes(style.id);
      return matchCat && matchSearch && matchFav;
    });
    // Favorites float to the top
    if (favorites.length > 0 && !showFavOnly) {
      list = [
        ...list.filter((s) => favorites.includes(s.id)),
        ...list.filter((s) => !favorites.includes(s.id)),
      ];
    }
    return list;
  }, [activeCategory, search, favorites, showFavOnly]);

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

  const favCount = favorites.length;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-6">

      {/* ── Top layout: Input + Bio Preview ───────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* Input section */}
        <section className="space-y-3">
          <label
            htmlFor="font-input"
            className="block text-sm font-medium text-slate-400 tracking-widest uppercase"
          >
            Your Text
          </label>
          <div className="relative">
            <textarea
              id="font-input"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="w-full rounded-xl bg-surface-700 border border-surface-500 text-white text-lg
                         placeholder-slate-600 px-5 py-4 resize-none outline-none
                         focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20
                         transition-all duration-200 leading-relaxed"
              maxLength={200}
            />
            <span className="absolute bottom-3 right-4 text-xs text-slate-600">
              {inputText.length}/200
            </span>
          </div>
          {inputText && (
            <button
              onClick={() => setInputText("")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              ✕ Clear
            </button>
          )}

          {/* Preview style quick-switch */}
          {previewStyle && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-xs text-slate-500 self-center">Preview style:</span>
              {FONT_STYLES.slice(0, 5).map((s) => (
                <button
                  key={s.id}
                  onClick={() => setPreviewStyle(s)}
                  className={`px-2.5 py-1 rounded-full text-xs transition-all
                    ${previewStyle.id === s.id
                      ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                      : "bg-surface-700 text-slate-500 hover:text-slate-300 border border-surface-600"
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
      <div className="w-full h-[90px] bg-surface-700 border border-surface-500 rounded-xl
                      flex items-center justify-center text-slate-600 text-sm tracking-wider">
        <span>[ Advertisement ]</span>
      </div>

      {/* ── Filters ──────────────────────────────────────── */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setShowFavOnly(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                ${activeCategory === cat.id && !showFavOnly
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "bg-surface-700 text-slate-400 hover:bg-surface-600 hover:text-white"
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
                ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                : "bg-surface-700 text-slate-400 hover:bg-surface-600 hover:text-white"
              }`}
          >
            <HeartIcon filled={showFavOnly} />
            Favorites
            {favCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 text-[10px] rounded-full bg-pink-500/20 text-pink-400">
                {favCount}
              </span>
            )}
          </button>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search styles..."
          className="w-full max-w-xs bg-surface-700 border border-surface-500 rounded-lg
                     text-sm text-white placeholder-slate-600 px-4 py-2 outline-none
                     focus:border-brand-400 transition-all"
        />
      </section>

      {/* ── Results ──────────────────────────────────────── */}
      <section>
        <p className="text-xs text-slate-500 mb-4 tracking-wider uppercase">
          {filteredStyles.length} styles
          {favCount > 0 && !showFavOnly && (
            <span className="ml-2 text-pink-400">· {favCount} favorited</span>
          )}
        </p>

        {showFavOnly && filteredStyles.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-4xl mb-3">♡</p>
            <p className="text-sm">No favorites yet.</p>
            <p className="text-xs mt-1 text-slate-600">
              Click the ♥ icon on any style card to save it here.
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
                    className="col-span-full h-[90px] bg-surface-700 border border-surface-500 rounded-xl
                               flex items-center justify-center text-slate-600 text-sm tracking-wider"
                  >
                    <span>[ Advertisement ]</span>
                  </div>
                )}

                <div
                  key={style.id}
                  className={`group relative flex flex-col gap-3 p-5 rounded-xl
                              bg-surface-700 border transition-all duration-200
                    ${isPreview
                      ? "border-brand-400/60 ring-1 ring-brand-400/20"
                      : "border-surface-600 hover:border-brand-400/40 hover:bg-surface-600"
                    }`}
                >
                  {/* Meta row */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-brand-400 font-medium tracking-widest uppercase mb-0.5">
                        {style.category}
                      </p>
                      <p className="text-xs text-slate-500 leading-snug">{style.description}</p>
                    </div>

                    {/* Action icons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Set as bio preview */}
                      <button
                        onClick={() => setPreviewStyle(style)}
                        title="Preview in Instagram bio card"
                        className={`p-1.5 rounded-lg transition-all duration-150
                          ${isPreview
                            ? "text-brand-400 bg-brand-500/20"
                            : "text-slate-600 hover:text-slate-300 hover:bg-surface-500"
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
                            ? "text-pink-400 bg-pink-500/15 hover:bg-pink-500/25"
                            : "text-slate-600 hover:text-pink-400 hover:bg-pink-500/10"
                          }`}
                      >
                        <HeartIcon filled={isFav} />
                      </button>
                    </div>
                  </div>

                  {/* Transformed text */}
                  <div
                    className="min-h-[3rem] px-4 py-3 rounded-lg bg-surface-900 border border-surface-500
                               text-white text-lg leading-relaxed break-all select-all"
                    title="Click to select all"
                  >
                    {transformed}
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={() => handleCopy(style)}
                    aria-label={`Copy ${style.name}`}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium
                               transition-all duration-200 active:scale-95
                      ${isCopied
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-brand-500/10 text-brand-400 border border-brand-500/30 hover:bg-brand-500/20"
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
      <div className="w-full h-[250px] bg-surface-700 border border-surface-500 rounded-xl
                      flex items-center justify-center text-slate-600 text-sm tracking-wider">
        <span>[ Advertisement ]</span>
      </div>
    </div>
  );
}
