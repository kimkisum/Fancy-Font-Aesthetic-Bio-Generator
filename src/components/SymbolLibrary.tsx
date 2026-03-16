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
    label: "Arrows",
    icon: "╰┈➤",
    items: [
      "╰┈➤", "➵ ➵ ➵", "↬", "⇢", "➳",
      "↪", "⟶", "⟹", "⤷", "⤳",
      "→", "⟿", "↠", "↝", "⇀",
      "➜", "↣", "↦", "⊸", "⤙",
    ],
  },
  {
    id: "ribbons",
    label: "Ribbons 🎀",
    icon: "🎀",
    items: [
      "🎀", "𓆩🎀𓆪", "꒰🎀꒱", "🎀✦🎀",
      "﹌﹌🎀﹌﹌", "·̩̩̥͙**•̩̩͙✩•̩̩͙*˚🎀˚*•̩̩͙✩•̩̩͙*˚",
      "『🎀』", "⌒ ⌒ 🎀 ⌒ ⌒",
      "˗ˏˋ 🎀 ˎˊ˗", "°꒰🎀꒱°",
      "✿✦✿", "❀✿❀",
      "𓍢ִ໋🌸", "🌸✦🌸",
      "꒰🌷꒱", "𓆩🌷𓆪",
      "⌇🎀⌇", "𓂃🎀𓂃",
      "✩ ✩ ✩", "♡ ♡ ♡",
    ],
  },
  {
    id: "nature",
    label: "Nature 🌿",
    icon: "🌿",
    items: [
      "🌿", "🍃", "🌱", "🌸", "🌺",
      "🍄", "🌾", "🌻", "🍀", "🌼",
      "✿", "❀", "⁂", "𓍢ִ໋🌿͙֒",
      "°🌿°", "·˚ ༘ 🌿", "𓂃 🌱",
      "🌙✦🌿", "˚₊🍃⁺", "꒰🌿꒱",
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
    <section className="w-full max-w-3xl mx-auto px-5 pb-6">
      <div className="rounded-xl bg-white border border-ed-border overflow-hidden">

        <div className="flex items-center justify-between px-4 py-3 border-b border-ed-borderLight">
          <div>
            <h2 className="text-[13px] font-semibold text-ed-charcoal">
              Kaomoji & Decorations
            </h2>
            <p className="text-[11px] text-ed-muted mt-0.5">
              Click to copy
            </p>
          </div>
          {copiedItem && (
            <span className="text-[11px] text-ed-charcoal font-medium animate-toast-in">
              Copied
            </span>
          )}
        </div>

        <div className="flex gap-1 px-3 pt-2.5 pb-1.5 overflow-x-auto flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors duration-150
                ${activeCategory === cat.id
                  ? "bg-ed-charcoal text-white"
                  : "text-ed-muted hover:text-ed-charcoal hover:bg-ed-sand/40"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="px-3 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {current?.items.map((item, i) => (
              <button
                key={`${item}-${i}`}
                onClick={() => handleCopy(item)}
                title={`Copy: ${item}`}
                className={`px-2.5 py-1.5 rounded-md text-[13px] transition-colors duration-100
                            leading-none select-none
                  ${copiedItem === item
                    ? "bg-ed-sage/20 text-ed-charcoal"
                    : "bg-ed-bg text-ed-charcoal hover:bg-ed-sand/50"
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
