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
    label: "Nature",
    emoji: "🌸",
    symbols: [
      "✨","⚡","🔥","❄","☀","🌙","⚜","🔮","💎","👑","🌸","🌺",
      "🍃","🌿","🌱","🌼","🌻","🌹","🌷","🍀","✿","❀","❁","❃",
    ],
  },
  {
    id: "borders",
    label: "Lines",
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
    label: "Misc",
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
    <section className="w-full max-w-3xl mx-auto px-5 pb-4">
      <div className="rounded-xl bg-white border border-ed-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ed-borderLight">
          <div>
            <h2 className="text-[13px] font-semibold text-ed-charcoal">
              Symbol Library
            </h2>
            <p className="text-[11px] text-ed-muted mt-0.5">
              Click to copy
            </p>
          </div>
          {copied && (
            <span className="text-[11px] text-ed-charcoal font-medium animate-toast-in">
              Copied
            </span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-3 pt-2.5 pb-1.5 flex-wrap">
          {SYMBOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors duration-150
                ${activeCategory === cat.id
                  ? "bg-ed-charcoal text-white"
                  : "text-ed-muted hover:text-ed-charcoal hover:bg-ed-sand/40"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="px-3 pb-3">
          <div className="flex flex-wrap gap-1.5">
            {currentSymbols.map((symbol, i) => (
              <button
                key={`${symbol}-${i}`}
                onClick={() => handleCopy(symbol)}
                title={`Copy ${symbol}`}
                className={`w-9 h-9 flex items-center justify-center rounded-md text-base
                            transition-colors duration-100 select-none
                            ${copied?.symbol === symbol
                              ? "bg-ed-sage/20 text-ed-charcoal"
                              : "bg-ed-bg text-ed-charcoal hover:bg-ed-sand/50"
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
