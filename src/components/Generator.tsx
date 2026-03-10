"use client";

import { useState, useMemo, useCallback } from "react";
import { FONT_STYLES, CATEGORIES, type FontStyle } from "@/utils/fontMap";

interface CopiedState {
  id: string;
  timeout: ReturnType<typeof setTimeout> | null;
}

export default function Generator() {
  const [inputText, setInputText] = useState("Fancy Font Generator");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied] = useState<CopiedState>({ id: "", timeout: null });
  const [search, setSearch] = useState("");

  const filteredStyles = useMemo(() => {
    return FONT_STYLES.filter((style) => {
      const matchCat =
        activeCategory === "all" || style.category === activeCategory;
      const matchSearch =
        search === "" ||
        style.name.toLowerCase().includes(search.toLowerCase()) ||
        style.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const handleCopy = useCallback(
    (style: FontStyle) => {
      const transformed = style.transform(inputText || "Type something...");
      navigator.clipboard.writeText(transformed).then(() => {
        if (copied.timeout) clearTimeout(copied.timeout);
        const timeout = setTimeout(
          () => setCopied({ id: "", timeout: null }),
          2000
        );
        setCopied({ id: style.id, timeout });
      });
    },
    [inputText, copied.timeout]
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* ── Input Section ─────────────────────────────────── */}
      <section className="relative">
        <label
          htmlFor="font-input"
          className="block text-sm font-medium text-slate-400 mb-2 tracking-widest uppercase"
        >
          Your Text
        </label>
        <div className="relative">
          <textarea
            id="font-input"
            rows={3}
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
            className="mt-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            ✕ Clear
          </button>
        )}
      </section>

      {/* ── Ad Slot: Top ─────────────────────────────────── */}
      <div className="w-full h-[90px] bg-surface-700 border border-surface-500 rounded-xl
                      flex items-center justify-center text-slate-600 text-sm tracking-wider">
        {/* ADVERTISEMENT */}
        <span>[ Advertisement ]</span>
      </div>

      {/* ── Filters ──────────────────────────────────────── */}
      <section className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                ${
                  activeCategory === cat.id
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                    : "bg-surface-700 text-slate-400 hover:bg-surface-600 hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
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

      {/* ── Results Grid ─────────────────────────────────── */}
      <section>
        <p className="text-xs text-slate-500 mb-4 tracking-wider uppercase">
          {filteredStyles.length} styles found
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredStyles.map((style, index) => {
            const transformed = style.transform(
              inputText.trim() || "Your Text Here"
            );
            const isCopied = copied.id === style.id;

            return (
              <>
                {/* Ad slot after every 8 cards */}
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
                  className="group relative flex flex-col gap-3 p-5 rounded-xl
                             bg-surface-700 border border-surface-600
                             hover:border-brand-400/50 hover:bg-surface-600
                             transition-all duration-200"
                >
                  {/* Style meta */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-brand-400 font-medium tracking-widest uppercase mb-0.5">
                        {style.category}
                      </p>
                      <p className="text-xs text-slate-500 leading-snug">
                        {style.description}
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 text-[10px] rounded-full
                                     bg-surface-500 text-slate-400 border border-surface-400">
                      #{style.id}
                    </span>
                  </div>

                  {/* Transformed text */}
                  <div
                    className="min-h-[3rem] px-4 py-3 rounded-lg bg-surface-900 border border-surface-500
                               text-white text-lg leading-relaxed break-all select-all"
                    title="Click to select all"
                  >
                    {transformed}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(style)}
                    aria-label={`Copy ${style.name}`}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium
                               transition-all duration-200 active:scale-95
                               ${
                                 isCopied
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
