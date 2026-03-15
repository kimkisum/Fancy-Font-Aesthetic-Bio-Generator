"use client";

import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { FONT_STYLES, CATEGORIES, MOOD_TAGS, type FontStyle } from "@/utils/fontMap";
import BioPreview from "./BioPreview";
import TikTokPreview from "./TikTokPreview";
import Toast from "./Toast";

// ═══════════════════════════════════════════════════════════════════════════
//  HOOKS: useDebounce & useCopyCounts
// ═══════════════════════════════════════════════════════════════════════════

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

const LS_FAVS_KEY   = "gofancyfont_favorites";
const LS_COUNTS_KEY = "gofancyfont_copy_counts";

function useCopyCounts() {
  const [copyCounts, setCopyCounts] = useState<Record<string, number>>({});
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      const raw = localStorage.getItem(LS_COUNTS_KEY);
      if (raw) setCopyCounts(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (!initialized.current) return;
    try {
      localStorage.setItem(LS_COUNTS_KEY, JSON.stringify(copyCounts));
    } catch {}
  }, [copyCounts]);

  const incrementCount = useCallback((id: string) => {
    setCopyCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  const topPickIds = useMemo(() => {
    const entries = Object.entries(copyCounts).filter(([, n]) => n > 0);
    entries.sort((a, b) => b[1] - a[1]);
    return entries.slice(0, 3).map(([id]) => id);
  }, [copyCounts]);

  return { copyCounts, incrementCount, topPickIds };
}

function trackCopyEvent(styleName: string, category: string): void {
  if (process.env.NODE_ENV === "development") {
    console.log(`[GA4] copy_font → style: ${styleName}, category: ${category}`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
//  ICONS
// ═══════════════════════════════════════════════════════════════════════════

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-colors" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  LAZY CARD
// ═══════════════════════════════════════════════════════════════════════════

interface LazyCardProps {
  style: FontStyle;
  displayText: string;
  isCopied: boolean;
  isFav: boolean;
  isTopPick: boolean;
  onCopy: (style: FontStyle) => void;
  onToggleFav: (id: string) => void;
  onPreviewOpen: (style: FontStyle) => void;
}

function LazyCard({ style, displayText, isCopied, isFav, isTopPick, onCopy, onToggleFav, onPreviewOpen }: LazyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!visible) {
    return <div ref={ref} className="h-[160px] rounded-xl border border-ed-border bg-white" />;
  }

  const transformed = style.transform(displayText);

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-between gap-2 p-4 rounded-xl border transition-colors duration-100 h-full
        ${isCopied ? "border-ed-sage bg-ed-sage/5" : "border-ed-border bg-white hover:border-ed-sand"}`}
    >
      <div>
        <div className="flex items-start justify-between mb-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-[10px] text-ed-muted tracking-widest uppercase">{style.category}</p>
              {isTopPick && (
                <span className="text-[9px] font-medium text-amber-600 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded leading-none">
                  Top Pick ✨
                </span>
              )}
            </div>
            <p className="text-[12px] text-ed-muted leading-snug mt-0.5">{style.description}</p>
          </div>
          <button
            onClick={() => onToggleFav(style.id)}
            className={`p-1.5 rounded-md transition-colors duration-100 shrink-0 -mr-1
              ${isFav ? "text-ed-charcoal" : "text-ed-muted/25 hover:text-ed-charcoal"}`}
          >
            <HeartIcon filled={isFav} />
          </button>
        </div>

        <div className="px-3.5 py-3 rounded-lg bg-ed-bg border border-ed-borderLight text-ed-charcoal text-[15px] leading-relaxed break-all select-all mb-3">
          {transformed}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPreviewOpen(style)}
          title="App Preview"
          className="flex items-center justify-center w-11 shrink-0 rounded-xl border border-ed-border text-ed-muted hover:text-ed-charcoal hover:border-ed-charcoal/20 transition-all active:scale-[0.95]"
        >
          <PhoneIcon />
        </button>
        <button
          onClick={() => onCopy(style)}
          className={`flex items-center justify-center gap-2 flex-1 py-3 sm:py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 active:scale-[0.98]
            ${isCopied ? "bg-ed-sage/20 text-ed-charcoal border border-ed-sage/40" : "border border-ed-border text-ed-muted hover:text-ed-charcoal hover:border-ed-charcoal/20"}`}
        >
          {isCopied ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy</>}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN GENERATOR COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const INITIAL_RENDER_COUNT = 15;

interface CopiedState {
  id: string;
  timeout: ReturnType<typeof setTimeout> | null;
}

export default function Generator() {
  const [inputText, setInputText]           = useState("Fancy Font Generator");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeMood, setActiveMood]         = useState<string>("");
  const [copied, setCopied]                 = useState<CopiedState>({ id: "", timeout: null });
  const [search, setSearch]                 = useState("");
  const [favorites, setFavorites]           = useState<string[]>([]);
  const [showFavOnly, setShowFavOnly]       = useState(false);
  const [toastMsg, setToastMsg]             = useState("");
  const [toastVisible, setToastVisible]     = useState(false);
  const [previewModalStyle, setPreviewModal] = useState<FontStyle | null>(null);
  const favsInitialized                     = useRef(false);

  const debouncedText = useDebouncedValue(inputText, 150);
  const displayText   = debouncedText.trim() || "Your Text Here";

  const { copyCounts, incrementCount, topPickIds } = useCopyCounts();

  useEffect(() => {
    if (favsInitialized.current) return;
    favsInitialized.current = true;
    try {
      const stored = localStorage.getItem(LS_FAVS_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    if (!favsInitialized.current) return;
    try { localStorage.setItem(LS_FAVS_KEY, JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  }, []);

  const moodKeywords = useMemo(() => MOOD_TAGS.find((m) => m.id === activeMood)?.keywords ?? [], [activeMood]);

  const filteredStyles = useMemo(() => {
    const q = search.toLowerCase();
    let list = FONT_STYLES.filter((style) => {
      const matchCat    = activeCategory === "all" || style.category === activeCategory;
      const matchSearch = q === "" || style.name.toLowerCase().includes(q) || style.description.toLowerCase().includes(q) || style.tags.some((tag) => tag.includes(q));
      const matchMood   = activeMood === "" || style.tags.some((tag) => (moodKeywords as readonly string[]).includes(tag));
      const matchFav    = !showFavOnly || favorites.includes(style.id);
      return matchCat && matchSearch && matchMood && matchFav;
    });

    const topSet = new Set(topPickIds);
    const favSet = new Set(favorites);

    const topPicks = list.filter((s) => topSet.has(s.id));
    const favsOnly = list.filter((s) => !topSet.has(s.id) && favSet.has(s.id));
    const rest     = list.filter((s) => !topSet.has(s.id) && !favSet.has(s.id));

    topPicks.sort((a, b) => (copyCounts[b.id] ?? 0) - (copyCounts[a.id] ?? 0));
    return [...topPicks, ...favsOnly, ...rest];
  }, [activeCategory, search, activeMood, moodKeywords, favorites, showFavOnly, topPickIds, copyCounts]);

  const handleCopy = useCallback((style: FontStyle) => {
    const transformed = style.transform(inputText || "Type something...");
    navigator.clipboard.writeText(transformed).then(() => {
      if (typeof navigator.vibrate === "function") navigator.vibrate([50]);
      incrementCount(style.id);
      trackCopyEvent(style.name, style.category);
      if (copied.timeout) clearTimeout(copied.timeout);
      const timeout = setTimeout(() => setCopied({ id: "", timeout: null }), 2200);
      setCopied({ id: style.id, timeout });
      setToastMsg("Copied to clipboard. Paste it anywhere!");
      setToastVisible(true);
    });
  }, [inputText, copied.timeout, incrementCount]);

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text.slice(0, 200));
    } catch {}
  }, []);

  const favCount = favorites.length;
  const activeMoodInfo = MOOD_TAGS.find((m) => m.id === activeMood);

  // Close modal on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewModal(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-5 py-4 space-y-4 relative">
      <Toast message={toastMsg} visible={toastVisible} onDone={() => setToastVisible(false)} />

      {/* ── PREVIEW MODAL (Full Screen Overlay) ── */}
      {previewModalStyle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ed-charcoal/60 backdrop-blur-sm animate-toast-in">
          {/* Click background to close */}
          <div className="absolute inset-0" onClick={() => setPreviewModal(null)} />
          
          <div className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-ed-bg rounded-2xl shadow-2xl p-5 md:p-8 scrollbar-none">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-ed-border">
              <div>
                <p className="text-[11px] text-ed-muted tracking-widest uppercase mb-1">Live App Preview</p>
                <h3 className="text-xl font-serif font-bold text-ed-charcoal">{previewModalStyle.name}</h3>
              </div>
              <button 
                onClick={() => setPreviewModal(null)}
                className="p-2 -mr-2 text-ed-muted hover:text-ed-charcoal bg-white hover:bg-ed-sand/30 rounded-full transition-colors"
                title="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Grid (Insta + TikTok) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <BioPreview
                rawText={debouncedText}
                styledText={previewModalStyle.transform(debouncedText || "Your Name")}
                styleName={previewModalStyle.name}
              />
              <TikTokPreview
                rawText={debouncedText}
                styledText={previewModalStyle.transform(debouncedText || "Your Name")}
                styleName={previewModalStyle.name}
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-ed-border">
              <button
                onClick={() => handleCopy(previewModalStyle)}
                className={`py-3 px-8 rounded-xl text-[14px] font-semibold transition-all duration-150 active:scale-[0.97]
                  ${copied.id === previewModalStyle.id
                    ? "bg-ed-sage text-white"
                    : "bg-ed-charcoal text-white shadow-lg hover:shadow-xl hover:bg-ed-charcoal/90"}`}
              >
                {copied.id === previewModalStyle.id ? "✔ Copied!" : "📋 Copy This Style"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── STICKY INPUT ── */}
      <div className="sticky top-[49px] z-40 max-w-3xl mx-auto">
        <div className="bg-ed-surfaceMuted border border-ed-border rounded-xl shadow-lg shadow-ed-bg/80">
          <div className="p-4">
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="font-input" className="text-[10px] font-medium text-ed-muted tracking-widest uppercase">
                Your Text
              </label>
              <div className="flex items-center gap-2">
                {inputText && (
                  <button onClick={() => setInputText("")} className="text-[11px] text-ed-muted hover:text-ed-charcoal transition-colors flex items-center gap-0.5">
                    ✕ Clear
                  </button>
                )}
                <button onClick={handlePaste} className="text-[11px] text-ed-muted hover:text-ed-charcoal transition-colors flex items-center gap-0.5">
                  📋 Paste
                </button>
              </div>
            </div>
            <div className="relative">
              <textarea
                id="font-input"
                rows={2}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type or paste your text here..."
                className="w-full rounded-lg bg-white border border-ed-border text-ed-charcoal text-[15px] placeholder-ed-muted/40 px-3.5 py-2.5 resize-none outline-none focus:border-ed-sage focus:ring-1 focus:ring-ed-sage/30 transition-all duration-150 leading-relaxed font-sans"
                maxLength={200}
              />
              <span className="absolute bottom-2 right-3 text-[9px] text-ed-muted/40 tabular-nums">
                {inputText.length}/200
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-4 pb-3 overflow-x-auto scrollbar-none" style={{ WebkitOverflowScrolling: "touch" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setShowFavOnly(false); }}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-100 whitespace-nowrap
                  ${activeCategory === cat.id && !showFavOnly ? "bg-ed-charcoal text-white" : "bg-ed-bg text-ed-muted hover:text-ed-charcoal"}`}
              >
                {cat.label}
              </button>
            ))}
            <button
              onClick={() => { setShowFavOnly((v) => !v); setActiveCategory("all"); }}
              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-100 whitespace-nowrap
                ${showFavOnly ? "bg-ed-charcoal text-white shadow-sm" : "bg-ed-bg text-ed-muted hover:text-ed-charcoal"}`}
            >
              <HeartIcon filled={showFavOnly} />
              Favorites
              {favCount > 0 && <span className="text-[9px] opacity-50">{favCount}</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto h-[90px] border border-ed-border rounded-lg flex items-center justify-center text-ed-muted/30 text-xs tracking-wider bg-white/50">
        [ Ad ]
      </div>

      <section className="space-y-2.5 max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] text-ed-muted tracking-widest uppercase mr-0.5">Vibe</span>
          {MOOD_TAGS.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setActiveMood((prev) => (prev === mood.id ? "" : mood.id))}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-100
                ${activeMood === mood.id ? "bg-ed-sage/25 text-ed-charcoal" : "text-ed-muted hover:text-ed-charcoal hover:bg-ed-sand/30"}`}
            >
              {mood.emoji} {mood.label}
            </button>
          ))}
          {activeMood && (
            <button onClick={() => setActiveMood("")} className="text-[11px] text-ed-muted hover:text-ed-charcoal transition-colors ml-0.5">
              ✕
            </button>
          )}
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search styles..."
          className="w-full max-w-xs bg-white border border-ed-border rounded-lg text-[13px] text-ed-charcoal placeholder-ed-muted/40 px-3.5 py-2 outline-none focus:border-ed-sage focus:ring-1 focus:ring-ed-sage/30 transition-all"
        />
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] text-ed-muted tracking-wider uppercase flex gap-x-2">
            <span className="font-bold text-ed-charcoal">{filteredStyles.length} STYLES</span>
            {activeMoodInfo && <span>· {activeMoodInfo.emoji} {activeMoodInfo.label}</span>}
            {favCount > 0 && !showFavOnly && <span>· {favCount} saved</span>}
          </p>
          <span className="text-[11px] text-ed-muted italic">Click '📱' to preview</span>
        </div>

        {/* ── EMPTY STATES ── */}
        {showFavOnly && filteredStyles.length === 0 && (
          <div className="text-center py-16 text-ed-muted">
            <p className="text-2xl mb-2 opacity-30">♡</p>
            <p className="text-sm">No favorites yet.</p>
            <p className="text-xs mt-1 opacity-60">Tap the heart on any style to save it.</p>
          </div>
        )}
        {!showFavOnly && filteredStyles.length === 0 && (
          <div className="text-center py-16 text-ed-muted">
            <p className="text-sm">No styles found.</p>
            <p className="text-xs mt-1 opacity-60">Try a different filter or clear your search.</p>
          </div>
        )}

        {/* ── FONT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-8">
          {filteredStyles.map((style, index) => {
            const isTopPick = topPickIds.includes(style.id);

            return (
              <div key={style.id}>
                {index > 0 && index % 10 === 0 && (
                  <div className="col-span-full h-[90px] mb-3 border border-ed-border rounded-lg flex items-center justify-center text-ed-muted/30 text-xs tracking-wider bg-white/50">
                    [ Ad ]
                  </div>
                )}
                {index < INITIAL_RENDER_COUNT ? (
                  <div className={`flex flex-col justify-between h-full gap-2 p-4 rounded-xl border transition-colors duration-100 ${copied.id === style.id ? "border-ed-sage bg-ed-sage/5" : "border-ed-border bg-white hover:border-ed-sand"}`}>
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-[10px] text-ed-muted tracking-widest uppercase">{style.category}</p>
                            {isTopPick && <span className="text-[9px] font-medium text-amber-600 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded leading-none">Top Pick ✨</span>}
                          </div>
                          <p className="text-[12px] text-ed-muted leading-snug mt-0.5">{style.description}</p>
                        </div>
                        <button onClick={() => toggleFavorite(style.id)} className={`p-1.5 rounded-md transition-colors duration-100 shrink-0 -mr-1 ${favorites.includes(style.id) ? "text-ed-charcoal" : "text-ed-muted/25 hover:text-ed-charcoal"}`}>
                          <HeartIcon filled={favorites.includes(style.id)} />
                        </button>
                      </div>
                      <div className="px-3.5 py-3 rounded-lg bg-ed-bg border border-ed-borderLight text-ed-charcoal text-[15px] leading-relaxed break-all select-all mb-3">
                        {style.transform(displayText)}
                      </div>
                    </div>
                    {/* Actions: Preview & Copy */}
                    <div className="flex gap-2">
                      <button onClick={() => setPreviewModal(style)} title="App Preview" className="flex items-center justify-center w-11 shrink-0 rounded-xl border border-ed-border text-ed-muted hover:text-ed-charcoal hover:border-ed-charcoal/20 transition-all active:scale-[0.95]">
                        <PhoneIcon />
                      </button>
                      <button onClick={() => handleCopy(style)} className={`flex items-center justify-center gap-2 flex-1 py-3 sm:py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 active:scale-[0.98] ${copied.id === style.id ? "bg-ed-sage/20 text-ed-charcoal border border-ed-sage/40" : "border border-ed-border text-ed-muted hover:text-ed-charcoal hover:border-ed-charcoal/20"}`}>
                        {copied.id === style.id ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy</>}
                      </button>
                    </div>
                  </div>
                ) : (
                  <LazyCard
                    style={style}
                    displayText={displayText}
                    isCopied={copied.id === style.id}
                    isFav={favorites.includes(style.id)}
                    isTopPick={isTopPick}
                    onCopy={handleCopy}
                    onToggleFav={toggleFavorite}
                    onPreviewOpen={setPreviewModal}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full max-w-3xl mx-auto h-[250px] border border-ed-border rounded-lg flex items-center justify-center text-ed-muted/30 text-xs tracking-wider bg-white/50">
        [ Ad ]
      </div>
    </div>
  );
}
