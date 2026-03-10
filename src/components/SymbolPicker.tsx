"use client";

import { useState, useCallback } from "react";

interface SymbolCategory {
  id: string;
  label: string;
  emoji: string;
  symbols: string[];
}

const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    id: "stars",
    label: "Stars",
    emoji: "⭐",
    symbols: [
      "★","☆","✦","✧","✩","✪","✫","✬","✭","✮","✯","✰","⭐","🌟",
      "💫","✨","✵","✶","✷","✸","✹","✺","❋","✼","✻","❊","⋆","˚",
    ],
  },
  {
    id: "hearts",
    label: "Hearts",
    emoji: "♥",
    symbols: [
      "♥","♡","❤","❥","❣","💕","💗","💓","💞","💝","💖","💔",
      "🖤","🤍","🤎","💛","💚","💙","💜","🩷","🩶","🩵","꒰","꒱",
    ],
  },
  {
    id: "sparkles",
    label: "Sparkles",
    emoji: "✨",
    symbols: [
      "✨","⚡","🔥","❄","☀","🌙","⚜","🔮","💎","👑","🌸","🌺",
      "🍃","🌿","🌱","🌼","🌻","🌹","🌷","🍀","✿","❀","❁","❃",
    ],
  },
  {
    id: "borders",
    label: "Borders",
    emoji: "─",
    symbols: [
      "─","━","│","┃","═","║","▬","≡","≣","⋯","⋮","⋱","·","•",
      "◦","‣","⁌","⁍","▪","▫","◾","◽","▸","◂","▴","▾","⊸","⟡",
    ],
  },
  {
    id: "arrows",
    label: "Arrows",
    emoji: "→",
    symbols: [
      "→","←","↑","↓","↔","↕","⇒","⇐","⇑","⇓","⇔","⇕",
      "➜","➝","➞","➟","➠","➡","↗","↘","↙","↖","↩","↪","↻","↺",
    ],
  },
  {
    id: "geometric",
    label: "Shapes",
    emoji: "◆",
    symbols: [
      "◆","◇","◈","○","●","□","■","△","▽","◎","◉","⬡","⬢","⬣",
      "▲","▼","◀","▶","◐","◑","◒","◓","◴","◵","◶","◷","⬛","⬜",
    ],
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    emoji: "˚",
    symbols: [
      "。","゚","ꕥ","ꗃ","ꙮ","⌨","✎","✐","✑","♪","♫","♬","♩",
      "™","©","®","№","℃","℉","∞","Ω","π","Δ","Σ","μ","λ","φ",
    ],
  },
];

interface CopiedSymbol {
  symbol: string;
  ts: number;
}

export default function SymbolPicker() {
  const [activeCategory, setActiveCategory] = useState("stars");
  const [copied, setCopied] = useState<CopiedSymbol | null>(null);

  const handleCopy = useCallback((symbol: string) => {
    navigator.clipboard.writeText(symbol).then(() => {
      setCopied({ symbol, ts: Date.now() });
      setTimeout(() => setCopied(null), 1200);
    });
  }, []);

  const currentSymbols =
    SYMBOL_CATEGORIES.find((c) => c.id === activeCategory)?.symbols ?? [];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-4">
      <div className="rounded-2xl bg-surface-700 border border-surface-600 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-600">
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">
              ✦ Aesthetic Symbol Library
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Click any symbol to copy instantly
            </p>
          </div>
          {copied && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400
                             text-xs font-medium border border-emerald-500/30 animate-pulse">
              "{copied.symbol}" copied!
            </span>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 px-4 pt-3 pb-2 flex-wrap">
          {SYMBOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                          transition-all duration-150
                ${activeCategory === cat.id
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "bg-surface-600 text-slate-400 hover:bg-surface-500 hover:text-white"
                }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Symbol Grid */}
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {currentSymbols.map((symbol, i) => (
              <button
                key={`${symbol}-${i}`}
                onClick={() => handleCopy(symbol)}
                title={`Copy ${symbol}`}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg
                            transition-all duration-150 active:scale-90 select-none
                            ${copied?.symbol === symbol
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 scale-95"
                              : "bg-surface-900 border border-surface-500 text-white hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-300"
                            }`}
              >
                {symbol}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
