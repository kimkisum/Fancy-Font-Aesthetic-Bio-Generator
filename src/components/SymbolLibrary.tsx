"use client";

import { useState, useCallback } from "react";

interface Category {
  id: string;
  label: string;
  icon: string;
  items: string[];
}

const CATEGORIES: Category[] = [
  {
    id: "kaomoji",
    label: "Kaomoji",
    icon: "( ˶ˆ꒳ˆ˵ )",
    items: [
      "(づ｡◕‿‿◕｡)づ", "٩(◕‿◕｡)۶", "(*´∀`)~♥", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      "ʕ•ᴥ•ʔ", "(⌐■_■)", "¯\\_(ツ)_/¯", "(づ￣ ³￣)づ",
      "ლ(´ڡ`ლ)", "(*^▽^*)", "( ´ ▽ ` )ﾉ", "(｡♥‿♥｡)",
      "ヽ(✿ﾟ▽ﾟ)ノ", "(ᵔᴥᵔ)", "✧⁺⸜(●˙▾˙●)⸝⁺✧", "( ˶ˆ꒳ˆ˵ )",
      "(ﾉ´ヮ`)ﾉ*: ･ﾟ", "(*ﾟ▽ﾟ*)", "(◍•ᴗ•◍)", "⊂(◉‿◉)つ",
    ],
  },
  {
    id: "borders",
    label: "Borders",
    icon: "╔══╗",
    items: [
      "╔══════╗", "╚══════╝", "┊✦ ✦┊", "╰┈➤",
      "•◦ ❈ ◦•", "▸▸▸▸▸", "◂◂◂◂◂", "━━━━━━━━━━",
      "· · • • • ✤ • • • · ·", "┌─────┐", "└─────┘", "│　　　│",
      "✦━━━━━━━━━✦", "◈──────◈", "⊱ ────── {.⋅ ♫ ⋅.} ────── ⊰",
      "•·.·'·.·• •·.·'·.·•", "▬▬▬▬▬▬▬▬", "┄┄┄┄┄┄┄┄",
      "～～～～～～", "≋≋≋≋≋≋≋≋",
    ],
  },
  {
    id: "stars",
    label: "Stars & Sparkles",
    icon: "✧˚",
    items: [
      "✧˚ · .", "⋆｡°✩", "✦✧✦", "˚₊· ͟͟͞͞➳❥",
      "⭑·͙̩̩͙˚*•̩̩͙✩•̩̩͙*˚·͙̩̩͙⭑", "✨✨✨", "꧁༺ ༻꧂",
      "⁎⁺˳✧༚", "✮⋆˙", "˚✧₊⁺", "°❀⋆.ೃ࿔*:･",
      "✩₊˚.⋆☾⋆⁺₊✧", "⊹ ˚. ♡", "✦✦✦", "☆彡",
      "·˚ ༘₊· ͟͟͞͞꒰애♡꒱", "✩°｡⋆⸜ 🎧✮", "₊˚ʚ ᗢ₊˚✧ ゚.",
    ],
  },
  {
    id: "hearts",
    label: "Hearts",
    icon: "♡",
    items: [
      "♡", "♥", "❤", "❥", "❣", "💕", "💗", "💓",
      "˚ʚ♡ɞ˚", "♡₊˚ 🦢･ₓ", "ʚ♡ɞ", "♡〜٩(^▿^)۶〜♡",
      "・❥・", "❤︎", "🫀", "♡ ̆̈", "‿︵‿︵ʚ˚̣̣̣͙ɞ・❉・ ʚ˚̣̣̣͙ɞ︵‿︵‿",
      "💞", "💝", "🩷",
    ],
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    icon: "ꕥ",
    items: [
      "ꕥ", "꒰ ꒱", "𓆩♡𓆪", "𓍢ִ໋🌷͙֒", "𓂃 ✾",
      "ᵕ̈", "𖦹", "𓈒 𓏸", "𓄼", "⩩", "⊹",
      "☆ ★ ☆", "◌", "⌇", "ᰔ", "ּ ִ ✮",
      "₊˚⊹♡", "🎀", "𓌅", "⟡", "꒦꒷꒦꒷꒦",
      "·͜·", "ꗃ", "⬡", "ᯓ★",
    ],
  },
  {
    id: "arrows",
    label: "Arrows & Lines",
    icon: "╰┈➤",
    items: [
      "╰┈➤", "➵ ➵ ➵", "↬", "⇢", "➳",
      "↪", "⟶", "⟹", "⤷", "⤳",
      "→", "⟿", "↠", "↝", "⇀",
      "➜", "↣", "↦", "⊸", "⤙",
    ],
  },
];

export default function SymbolLibrary() {
  const [activeCategory, setActiveCategory] = useState("kaomoji");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = useCallback((item: string) => {
    navigator.clipboard.writeText(item).then(() => {
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 1500);
    });
  }, []);

  const current = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-6">
      <div className="rounded-2xl bg-surface-700 border border-surface-600 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface-600">
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">
              ✦ Symbol & Kaomoji Library
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Click any item to copy — paste into your bio instantly
            </p>
          </div>
          {copiedItem && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30
                             text-emerald-400 text-xs font-medium animate-pulse max-w-[140px] truncate">
              Copied!
            </span>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 px-4 pt-3 pb-2 overflow-x-auto scrollbar-none flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150
                ${activeCategory === cat.id
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "bg-surface-600 text-slate-400 hover:bg-surface-500 hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="px-4 pb-5">
          <div className="flex flex-wrap gap-2">
            {current?.items.map((item, i) => (
              <button
                key={`${item}-${i}`}
                onClick={() => handleCopy(item)}
                title={`Copy: ${item}`}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-150 active:scale-95
                            font-mono leading-none select-none
                  ${copiedItem === item
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-surface-900 border border-surface-500 text-white hover:border-brand-400 hover:bg-brand-500/10"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
