export interface FontStyle {
  id: string;
  name: string;
  description: string;
  category: "serif" | "sans" | "script" | "decorative" | "aesthetic" | "effect" | "cute";
  tags: string[];
  /**
   * "latin" = Latin/ASCII only · "all" = any language · "ja" = Japanese hiragana/katakana
   */
  langCompat: "latin" | "all" | "ja";
  transform: (text: string) => string;
}

// ─── Unicode Range Mapper ───────────────────────────────────────────────────
function unicodeMapper(
  upperOffset: number,
  lowerOffset: number,
  upperExceptions: Record<number, string> = {},
  lowerExceptions: Record<number, string> = {},
  digitOffset?: number
): (text: string) => string {
  return (text: string) =>
    [...text]
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          const idx = code - 65;
          return upperExceptions[idx] ?? String.fromCodePoint(upperOffset + idx);
        }
        if (code >= 97 && code <= 122) {
          const idx = code - 97;
          return lowerExceptions[idx] ?? String.fromCodePoint(lowerOffset + idx);
        }
        if (digitOffset !== undefined && code >= 48 && code <= 57) {
          return String.fromCodePoint(digitOffset + (code - 48));
        }
        return char;
      })
      .join("");
}

// ─── Specialty Transformers ─────────────────────────────────────────────────

// Full-width / Aesthetic vaporwave
const aestheticTransform = (text: string) =>
  [...text]
    .map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 33 && code <= 126) return String.fromCodePoint(code + 0xfee0);
      if (c === " ") return "\u3000";
      return c;
    })
    .join("");

// Small Caps
const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ",
  i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
  q: "Q", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
  y: "ʏ", z: "ᴢ",
};
const smallCapsTransform = (text: string) =>
  [...text.toLowerCase()]
    .map((c) => SMALL_CAPS_MAP[c] ?? c)
    .join("");

// Upside Down
const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
  i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
  q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H",
  I: "I", J: "ɾ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ",
  Q: "Q", R: "ɹ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X",
  Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ",
  "6": "9", "7": "ㄥ", "8": "8", "9": "6", ".": "˙", ",": "'",
  "?": "¿", "!": "¡",
};
const upsideDownTransform = (text: string) =>
  [...text].reverse().map((c) => UPSIDE_DOWN_MAP[c] ?? c).join("");

// Mirror / Reverse
const mirrorTransform = (text: string) => [...text].reverse().join("");

// Strikethrough
const strikethroughTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u0336")).join("");

// Double Underline
const underlineTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u0333")).join("");

// Circled (A=Ⓐ)
const circledTransform = unicodeMapper(0x24b6, 0x24d0);

// Squared & Squared Negative (supplementary-plane characters)
const SQUARED_MAP = [..."🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"];
const squaredTransform = (text: string) =>
  [...text]
    .map((c) => {
      const idx = c.toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx <= 25) return SQUARED_MAP[idx];
      return c;
    })
    .join("");

const SQUARED_NEG_MAP = [..."🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"];
const squaredNegTransform = (text: string) =>
  [...text]
    .map((c) => {
      const idx = c.toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx <= 25) return SQUARED_NEG_MAP[idx];
      return c;
    })
    .join("");

// Zalgo / Glitch
const ZALGO_UP = [
  "\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311",
  "\u0306", "\u0310", "\u0352", "\u0357", "\u0351", "\u0307",
];
const ZALGO_MID = [
  "\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321",
  "\u0322", "\u0327", "\u0328", "\u0334", "\u0335", "\u0336",
];
const ZALGO_DOWN = [
  "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e",
  "\u031f", "\u0320", "\u032a", "\u032b", "\u032c", "\u032d",
];
const zalgoTransform = (text: string, intensity: number = 3) =>
  [...text]
    .map((c) => {
      if (c === " ") return c;
      let result = c;
      for (let i = 0; i < intensity; i++) {
        result += ZALGO_UP[Math.floor(Math.random() * ZALGO_UP.length)];
        result += ZALGO_MID[Math.floor(Math.random() * ZALGO_MID.length)];
        result += ZALGO_DOWN[Math.floor(Math.random() * ZALGO_DOWN.length)];
      }
      return result;
    })
    .join("");

// Superscript
const SUPERSCRIPT_MAP: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  q: "q", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
};
const superscriptTransform = (text: string) =>
  [...text].map((c) => SUPERSCRIPT_MAP[c.toLowerCase()] ?? c).join("");

// Parenthesized lowercase ⒜⒝⒞... (U+249C–U+24B5)
const parenthesizedTransform = (text: string) =>
  [...text.toLowerCase()]
    .map((c) => {
      const idx = c.charCodeAt(0) - 97;
      if (idx >= 0 && idx <= 25) return String.fromCodePoint(0x249c + idx);
      return c;
    })
    .join("");

// Dotted / Interpunct  h·e·l·l·o
const dottedTransform = (text: string) =>
  [...text]
    .map((c, i, arr) => {
      if (c === " ") return " ";
      const next = arr[i + 1];
      return next !== undefined && next !== " " ? c + "·" : c;
    })
    .join("");

// Spaced  h e l l o
const spacedTransform = (text: string) =>
  [...text].join(" ");

// Slashed diagonal (combining long solidus overlay U+0338)
const slashedTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u0338")).join("");

// Overline  T̅e̅x̅t̅ (combining overline U+0305)
const overlineTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u0305")).join("");

// Wave / Tilde-through  T̴e̴x̴t̴ (combining tilde overlay U+0334)
const waveTildeTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u0334")).join("");

// Double overline  T̿e̿x̿t̿ (combining double overline U+033F)
const doubleOverlineTransform = (text: string) =>
  [...text].map((c) => (c === " " ? c : c + "\u033f")).join("");

// ── Japanese Script Transforms ───────────────────────────────────────────────
// Hiragana → Katakana (offset +0x60: U+3041–U+3096 → U+30A1–U+30F6)
const hiraganaToKatakanaTransform = (text: string) =>
  [...text].map((c) => {
    const code = c.charCodeAt(0);
    return code >= 0x3041 && code <= 0x3096 ? String.fromCharCode(code + 0x60) : c;
  }).join("");

// Katakana → Hiragana (offset -0x60: U+30A1–U+30F6 → U+3041–U+3096)
const katakanaToHiraganaTransform = (text: string) =>
  [...text].map((c) => {
    const code = c.charCodeAt(0);
    return code >= 0x30a1 && code <= 0x30f6 ? String.fromCharCode(code - 0x60) : c;
  }).join("");

// ════════════════════════════════════════════════════════════════════════════════
// ██  DECORATION / STRING-MANIPULATION STYLES                                 ██
// ██  These use creative wrapping, insertion, and framing — not Unicode fonts. ██
// ════════════════════════════════════════════════════════════════════════════════
//
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  HOW TO ADD MORE CUSTOM STYLES:                                            │
// │                                                                            │
// │  1. Create a transform function: (text: string) => string                  │
// │     Use string manipulation — insert emojis, wrap in frames, etc.          │
// │                                                                            │
// │  2. Add an entry to FONT_STYLES array below:                               │
// │     {                                                                      │
// │       id: "my-style",          // unique kebab-case id                     │
// │       name: "My Style ✨",     // display name (can use emoji)             │
// │       description: "...",      // one-line description                     │
// │       category: "cute",        // "cute" | "aesthetic" | "effect" | etc.   │
// │       tags: ["cute", "girly"], // for filtering — match MOOD_TAGS keywords │
// │       langCompat: "all",       // "latin" or "all"                         │
// │       transform: myFn,         // your transform function                  │
// │     }                                                                      │
// │                                                                            │
// │  That's it! The card will appear automatically in the UI.                  │
// └─────────────────────────────────────────────────────────────────────────────┘

// Helper: insert a separator between every visible character (skipping spaces)
function insertBetween(text: string, sep: string): string {
  return [...text]
    .map((c, i, arr) => {
      if (c === " ") return " ";
      const next = arr[i + 1];
      return next !== undefined && next !== " " ? c + sep : c;
    })
    .join("");
}

// Helper: wrap text in prefix/suffix
function wrapText(text: string, prefix: string, suffix: string): string {
  return `${prefix} ${text} ${suffix}`;
}

// Helper: insert separator between words
function insertBetweenWords(text: string, sep: string): string {
  return text.split(/\s+/).join(` ${sep} `);
}

// ── Decoration Transforms ───────────────────────────────────────────────────

const coquetteTransform = (text: string) => insertBetween(text, "🎀");
const sparkleWrapTransform = (text: string) => wrapText(text, "✨", "✨");
const fairycoreTransform = (text: string) => insertBetween(text, "✧") + " ⋆˙⟡♡";
const kaomojiFrameTransform = (text: string) => wrapText(text, "ʕ•ᴥ•ʔ", "ʕ•ᴥ•ʔ");
const cloudTransform = (text: string) => wrapText(text, "☁️", "☁️");
const starryTransform = (text: string) => wrapText(text, "⋆｡˚", "˚｡⋆");
const ribbonTransform = (text: string) => insertBetween(text, "✿");
const heartsTransform = (text: string) => insertBetween(text, "♡");
const softAestheticTransform = (text: string) => wrapText(text, "₊˚✧", "✧˚₊");
const angelTransform = (text: string) => wrapText(text, "♡₊˚ 🦢・", "・🦢 ˚₊♡");
const dreamyTransform = (text: string) => wrapText(text, "·˚ ༘", "·˚ ༘");
const cottagecoreTransform = (text: string) => insertBetween(text, "🌿");
const y2kTransform = (text: string) => wrapText(text, "»★«", "»★«");
const bracketsTransform = (text: string) => `【${text}】`;
const clapTransform = (text: string) => insertBetweenWords(text, "👏");
const butterfliesTransform = (text: string) => insertBetween(text, "🦋");
const cherryTransform = (text: string) => wrapText(text, "🍒", "🍒");
const moonTransform = (text: string) => wrapText(text, "☾", "☽");
const sakuraTransform = (text: string) => insertBetween(text, "🌸");
const witchyTransform = (text: string) => wrapText(text, "🔮✦", "✦🔮");
const tinyStarsTransform = (text: string) => wrapText(text, "˚ ✩ ₊˚", "˚₊ ✩ ˚");
const loveLetterTransform = (text: string) => wrapText(text, "💌", "💌");
const gemTransform = (text: string) => insertBetween(text, "💎");
const snowflakeTransform = (text: string) => insertBetween(text, "❄");
const arrowFrameTransform = (text: string) => wrapText(text, "╰┈➤", "╰┈➤");


// ─── Font Styles Registry ────────────────────────────────────────────────────
export const FONT_STYLES: FontStyle[] = [

  // ── SERIF ──────────────────────────────────────────────────────────────────
  {
    id: "bold",
    name: "𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟",
    description: "Classic bold serif — perfect for strong statements",
    category: "serif",
    tags: ["professional", "strong", "formal", "bold", "powerful"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d400, 0x1d41a, {}, {}, 0x1d7ce),
  },
  {
    id: "italic",
    name: "𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓",
    description: "Elegant italic serif for a refined touch",
    category: "serif",
    tags: ["elegant", "luxury", "classic", "sophisticated", "formal"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d434, 0x1d44e, {}, { 7: "ℎ" }),
  },
  {
    id: "bold-italic",
    name: "𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄",
    description: "Bold italic — dramatic and eye-catching",
    category: "serif",
    tags: ["dramatic", "bold", "intense", "fashion", "strong"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d468, 0x1d482),
  },
  {
    id: "fraktur",
    name: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 / 𝔊𝔬𝔱𝔥𝔦𝔠",
    description: "Gothic Fraktur — dark, mysterious, medieval vibes",
    category: "serif",
    tags: ["gothic", "medieval", "dark", "metal", "vintage", "historical"],
    langCompat: "latin",
    transform: unicodeMapper(
      0x1d504, 0x1d51e,
      { 2: "ℭ", 7: "ℌ", 8: "ℑ", 17: "ℜ", 25: "ℨ" }
    ),
  },
  {
    id: "bold-fraktur",
    name: "𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗",
    description: "Heavy Gothic — maximum impact and attitude",
    category: "serif",
    tags: ["gothic", "medieval", "dark", "metal", "heavy", "historical"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d56c, 0x1d586),
  },

  // ── SCRIPT ─────────────────────────────────────────────────────────────────
  {
    id: "script",
    name: "𝒮𝒸𝓇𝒾𝓅𝓉 𝒞𝓊𝓇𝓈𝒾𝓋𝑒",
    description: "Flowing cursive script — great for elegant bios",
    category: "script",
    tags: ["cute", "elegant", "luxury", "romantic", "cursive", "aesthetic", "girly"],
    langCompat: "latin",
    transform: unicodeMapper(
      0x1d49c, 0x1d4b6,
      { 1: "ℬ", 4: "ℰ", 5: "ℱ", 7: "ℋ", 8: "ℐ", 11: "ℒ", 12: "ℳ", 17: "ℛ" },
      { 4: "ℯ", 6: "ℊ", 14: "ℴ" }
    ),
  },
  {
    id: "bold-script",
    name: "𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽",
    description: "Bold cursive for a luxurious, standout look",
    category: "script",
    tags: ["cute", "luxury", "fancy", "girly", "cursive", "romantic", "aesthetic", "instagram"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d4d0, 0x1d4ea),
  },

  // ── SANS ───────────────────────────────────────────────────────────────────
  {
    id: "double-struck",
    name: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜",
    description: "Mathematical blackboard bold — academic and cool",
    category: "sans",
    tags: ["math", "academic", "professional", "modern", "cool", "unique"],
    langCompat: "latin",
    transform: unicodeMapper(
      0x1d538, 0x1d552,
      { 2: "ℂ", 7: "ℍ", 13: "ℕ", 15: "ℙ", 16: "ℚ", 17: "ℝ", 25: "ℤ" },
      {},
      0x1d7d8
    ),
  },
  {
    id: "sans-regular",
    name: "𝖲𝖺𝗇𝗌 𝖱𝖾𝗀𝗎𝗅𝖺𝗋",
    description: "Clean sans-serif — minimal, modern, and easy to read",
    category: "sans",
    tags: ["clean", "modern", "minimal", "simple", "light", "readable", "professional"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d5a0, 0x1d5ba, {}, {}, 0x1d7e2),
  },
  {
    id: "sans-bold",
    name: "𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱",
    description: "Clean sans-serif bold — modern and readable",
    category: "sans",
    tags: ["modern", "clean", "professional", "bold", "strong"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d5d4, 0x1d5ee, {}, {}, 0x1d7ec),
  },
  {
    id: "sans-italic",
    name: "𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤",
    description: "Modern italic sans-serif — stylish and clean",
    category: "sans",
    tags: ["modern", "clean", "stylish", "sleek", "elegant"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d608, 0x1d622),
  },
  {
    id: "sans-bold-italic",
    name: "𝙎𝙖𝙣𝙨 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘",
    description: "Bold italic sans-serif — dynamic, energetic, sporty",
    category: "sans",
    tags: ["dynamic", "sporty", "bold", "modern", "energetic", "strong"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d63c, 0x1d656),
  },
  {
    id: "monospace",
    name: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
    description: "Typewriter monospace — techy and retro developer vibes",
    category: "sans",
    tags: ["tech", "hacker", "developer", "retro", "gaming", "code"],
    langCompat: "latin",
    transform: unicodeMapper(0x1d670, 0x1d68a, {}, {}, 0x1d7f6),
  },

  // ── AESTHETIC ──────────────────────────────────────────────────────────────
  {
    id: "aesthetic",
    name: "Ａｅｓｔｈｅｔｉｃ",
    description: "Full-width vaporwave aesthetic — retro Japanese city pop",
    category: "aesthetic",
    tags: ["vaporwave", "retro", "japanese", "chill", "vintage", "aesthetic", "instagram"],
    langCompat: "latin",
    transform: aestheticTransform,
  },
  {
    id: "dotted",
    name: "D·o·t·t·e·d",
    description: "Interpunct dots between letters — minimal aesthetic bio style",
    category: "aesthetic",
    tags: ["aesthetic", "minimal", "cute", "instagram", "elegant", "clean"],
    langCompat: "all",
    transform: dottedTransform,
  },
  {
    id: "spaced",
    name: "S p a c e d",
    description: "Wide-spaced letters — airy, editorial, and Instagram-ready",
    category: "aesthetic",
    tags: ["aesthetic", "minimal", "clean", "elegant", "instagram", "vaporwave", "editorial"],
    langCompat: "all",
    transform: spacedTransform,
  },

  // ── DECORATIVE ─────────────────────────────────────────────────────────────
  {
    id: "small-caps",
    name: "Sᴍᴀʟʟ Cᴀᴘꜱ",
    description: "Small capital letters — subtle and sophisticated",
    category: "decorative",
    tags: ["professional", "elegant", "sophisticated", "formal", "classic"],
    langCompat: "latin",
    transform: smallCapsTransform,
  },
  {
    id: "circled",
    name: "Ⓒⓘⓡⓒⓛⓔⓓ",
    description: "Circled letters — playful and eye-catching",
    category: "decorative",
    tags: ["fun", "playful", "cute", "unique", "creative"],
    langCompat: "latin",
    transform: circledTransform,
  },
  {
    id: "parenthesized",
    name: "⒫⒜⒭⒠⒩⒯⒣⒠⒮⒤⒮",
    description: "Letters in parentheses — soft, cute, and uniquely styled",
    category: "decorative",
    tags: ["cute", "unique", "creative", "fun", "different", "playful"],
    langCompat: "latin",
    transform: parenthesizedTransform,
  },
  {
    id: "squared",
    name: "🄱🄾🅇🄴🄳",
    description: "Squared letters — structured and geometric",
    category: "decorative",
    tags: ["geometric", "bold", "unique", "creative", "structured"],
    langCompat: "latin",
    transform: squaredTransform,
  },
  {
    id: "squared-neg",
    name: "🅑🅛🅐🅒🅚",
    description: "Black square blocks — bold contrast statement",
    category: "decorative",
    tags: ["bold", "dark", "statement", "unique", "contrast"],
    langCompat: "latin",
    transform: squaredNegTransform,
  },

  // ── EFFECTS ────────────────────────────────────────────────────────────────
  {
    id: "upside-down",
    name: "nʍop ǝpᴉsdn",
    description: "Flipped upside-down text — for the rebels",
    category: "effect",
    tags: ["fun", "weird", "quirky", "rebel", "funny"],
    langCompat: "latin",
    transform: upsideDownTransform,
  },
  {
    id: "mirror",
    name: "rorriM",
    description: "Reversed mirror text — enigmatic and cryptic",
    category: "effect",
    tags: ["mystery", "weird", "quirky", "cryptic", "unique"],
    langCompat: "all",
    transform: mirrorTransform,
  },
  {
    id: "strikethrough",
    name: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶",
    description: "Crossed-out text — edgy and dramatic",
    category: "effect",
    tags: ["edgy", "dark", "dramatic", "cool", "rebel"],
    langCompat: "all",
    transform: strikethroughTransform,
  },
  {
    id: "slashed",
    name: "S̸l̸a̸s̸h̸e̸d̸",
    description: "Diagonal slash through letters — rebellious cyberpunk vibes",
    category: "effect",
    tags: ["edgy", "cool", "rebel", "dramatic", "unique", "cyberpunk"],
    langCompat: "all",
    transform: slashedTransform,
  },
  {
    id: "underline",
    name: "U͟n͟d͟e͟r͟l͟i͟n͟e͟",
    description: "Double underline — clean emphasis",
    category: "effect",
    tags: ["clean", "emphasis", "professional", "formal"],
    langCompat: "all",
    transform: underlineTransform,
  },
  {
    id: "overline",
    name: "O̅v̅e̅r̅l̅i̅n̅e̅",
    description: "Overline above every letter — sleek and editorial",
    category: "effect",
    tags: ["clean", "minimal", "editorial", "modern", "unique"],
    langCompat: "all",
    transform: overlineTransform,
  },
  {
    id: "wave-tilde",
    name: "W̴a̴v̴e̴ T̴i̴l̴d̴e̴",
    description: "Tilde wave through letters — glitchy dreamy effect",
    category: "effect",
    tags: ["edgy", "glitch", "aesthetic", "dreamy", "unique", "creative"],
    langCompat: "all",
    transform: waveTildeTransform,
  },
  {
    id: "double-overline",
    name: "D̿o̿u̿b̿l̿e̿ O̿v̿e̿r̿",
    description: "Double overline — bold architectural emphasis",
    category: "effect",
    tags: ["bold", "unique", "structured", "editorial", "modern"],
    langCompat: "all",
    transform: doubleOverlineTransform,
  },
  {
    id: "superscript",
    name: "ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
    description: "Tiny superscript — mini text for aesthetic bios",
    category: "effect",
    tags: ["cute", "tiny", "kawaii", "mini", "aesthetic"],
    langCompat: "latin",
    transform: superscriptTransform,
  },
  {
    id: "zalgo",
    name: "Z̷̧̛͎̺a̷͍͝l̶̗̿g̷͖͠o̵͍̽",
    description: "Glitch Zalgo horror — cursed and corrupted",
    category: "effect",
    tags: ["horror", "creepy", "cursed", "scary", "glitch", "dark"],
    langCompat: "all",
    transform: (text) => zalgoTransform(text, 2),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ██  CUTE / DECORATION STYLES (String manipulation — no Unicode mapping) ██
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "coquette",
    name: "C🎀o🎀q🎀u🎀e🎀t🎀t🎀e",
    description: "Coquette bow between every letter — soft girl essential",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "coquette", "romantic", "instagram"],
    langCompat: "all",
    transform: coquetteTransform,
  },
  {
    id: "sparkle-wrap",
    name: "✨ Sparkle ✨",
    description: "Sparkle emoji wrapping — instant glow-up",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "sparkle", "instagram", "fancy"],
    langCompat: "all",
    transform: sparkleWrapTransform,
  },
  {
    id: "fairycore",
    name: "F✧a✧i✧r✧y ⋆˙⟡♡",
    description: "Fairycore stars between letters with whimsical suffix",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "fairy", "romantic", "kawaii"],
    langCompat: "all",
    transform: fairycoreTransform,
  },
  {
    id: "kaomoji-frame",
    name: "ʕ•ᴥ•ʔ Text ʕ•ᴥ•ʔ",
    description: "Cute bear kaomoji framing your text",
    category: "cute",
    tags: ["cute", "kawaii", "fun", "playful", "creative", "japanese"],
    langCompat: "all",
    transform: kaomojiFrameTransform,
  },
  {
    id: "cloud",
    name: "☁️ Cloud ☁️",
    description: "Dreamy cloud-wrapped text — soft and airy",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "dreamy", "soft", "chill"],
    langCompat: "all",
    transform: cloudTransform,
  },
  {
    id: "starry",
    name: "⋆｡˚ Starry ˚｡⋆",
    description: "Starry night framing — celestial aesthetic vibes",
    category: "cute",
    tags: ["aesthetic", "girly", "dreamy", "romantic", "instagram", "cute"],
    langCompat: "all",
    transform: starryTransform,
  },
  {
    id: "ribbon",
    name: "R✿i✿b✿b✿o✿n",
    description: "Floral ribbon between letters — garden party aesthetic",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "romantic", "instagram"],
    langCompat: "all",
    transform: ribbonTransform,
  },
  {
    id: "hearts",
    name: "H♡e♡a♡r♡t♡s",
    description: "Hearts between every letter — love letter vibes",
    category: "cute",
    tags: ["cute", "girly", "romantic", "love", "instagram", "aesthetic"],
    langCompat: "all",
    transform: heartsTransform,
  },
  {
    id: "soft-aesthetic",
    name: "₊˚✧ Soft ✧˚₊",
    description: "Soft aesthetic wrapping — premium Instagram bio energy",
    category: "cute",
    tags: ["aesthetic", "girly", "cute", "soft", "instagram", "luxury"],
    langCompat: "all",
    transform: softAestheticTransform,
  },
  {
    id: "angel",
    name: "♡₊˚ 🦢・Angel・🦢 ˚₊♡",
    description: "Angel wings swan frame — ethereal and elegant",
    category: "cute",
    tags: ["cute", "girly", "romantic", "aesthetic", "luxury", "elegant"],
    langCompat: "all",
    transform: angelTransform,
  },
  {
    id: "dreamy",
    name: "·˚ ༘ Dreamy ·˚ ༘",
    description: "Dreamy Tibetan dot wrapping — mystical soft vibes",
    category: "cute",
    tags: ["aesthetic", "dreamy", "girly", "chill", "romantic", "cute"],
    langCompat: "all",
    transform: dreamyTransform,
  },
  {
    id: "cottagecore",
    name: "C🌿o🌿t🌿t🌿a🌿g🌿e",
    description: "Cottagecore leaves between letters — nature lover aesthetic",
    category: "cute",
    tags: ["aesthetic", "cute", "chill", "romantic", "instagram"],
    langCompat: "all",
    transform: cottagecoreTransform,
  },
  {
    id: "y2k",
    name: "»★« Y2K »★«",
    description: "Y2K star frame — early 2000s retro nostalgia",
    category: "cute",
    tags: ["retro", "fun", "aesthetic", "vintage", "creative"],
    langCompat: "all",
    transform: y2kTransform,
  },
  {
    id: "brackets",
    name: "【Brackets】",
    description: "CJK corner brackets — bold and structured Asian aesthetic",
    category: "cute",
    tags: ["aesthetic", "japanese", "clean", "modern", "structured"],
    langCompat: "all",
    transform: bracketsTransform,
  },
  {
    id: "clap",
    name: "Clap 👏 Between 👏 Words",
    description: "Clap emoji between words — for emphasis and attitude",
    category: "cute",
    tags: ["fun", "playful", "energetic", "creative", "strong"],
    langCompat: "all",
    transform: clapTransform,
  },
  {
    id: "butterflies",
    name: "B🦋u🦋t🦋t🦋e🦋r🦋f🦋l🦋y",
    description: "Butterflies between letters — metamorphosis aesthetic",
    category: "cute",
    tags: ["cute", "girly", "aesthetic", "romantic", "instagram"],
    langCompat: "all",
    transform: butterfliesTransform,
  },
  {
    id: "cherry",
    name: "🍒 Cherry 🍒",
    description: "Cherry emoji frame — sweet retro pop vibes",
    category: "cute",
    tags: ["cute", "retro", "fun", "girly", "aesthetic"],
    langCompat: "all",
    transform: cherryTransform,
  },
  {
    id: "moon",
    name: "☾ Moon ☽",
    description: "Crescent moon frame — celestial witchy aesthetic",
    category: "cute",
    tags: ["aesthetic", "dreamy", "romantic", "dark", "girly"],
    langCompat: "all",
    transform: moonTransform,
  },
  {
    id: "sakura",
    name: "S🌸a🌸k🌸u🌸r🌸a",
    description: "Cherry blossom between letters — Japanese spring aesthetic",
    category: "cute",
    tags: ["cute", "japanese", "girly", "aesthetic", "romantic", "kawaii"],
    langCompat: "all",
    transform: sakuraTransform,
  },
  {
    id: "witchy",
    name: "🔮✦ Witchy ✦🔮",
    description: "Crystal ball frame — mystic and enchanting",
    category: "cute",
    tags: ["dark", "aesthetic", "girly", "creative", "mystery"],
    langCompat: "all",
    transform: witchyTransform,
  },
  {
    id: "tiny-stars",
    name: "˚ ✩ ₊˚ Stars ˚₊ ✩ ˚",
    description: "Tiny star dust wrapping — subtle celestial touch",
    category: "cute",
    tags: ["aesthetic", "cute", "girly", "dreamy", "soft", "instagram"],
    langCompat: "all",
    transform: tinyStarsTransform,
  },
  {
    id: "love-letter",
    name: "💌 Love Letter 💌",
    description: "Love letter envelope frame — romantic and sweet",
    category: "cute",
    tags: ["cute", "romantic", "girly", "love", "aesthetic"],
    langCompat: "all",
    transform: loveLetterTransform,
  },
  {
    id: "gem",
    name: "G💎e💎m💎s",
    description: "Diamond gems between letters — luxury and sparkle",
    category: "cute",
    tags: ["luxury", "aesthetic", "girly", "fancy", "instagram"],
    langCompat: "all",
    transform: gemTransform,
  },
  {
    id: "snowflake",
    name: "S❄n❄o❄w",
    description: "Snowflakes between letters — winter wonderland vibes",
    category: "cute",
    tags: ["aesthetic", "chill", "cute", "dreamy", "creative"],
    langCompat: "all",
    transform: snowflakeTransform,
  },
  {
    id: "arrow-frame",
    name: "╰┈➤ Arrow ╰┈➤",
    description: "Arrow line frame — clean directional aesthetic",
    category: "cute",
    tags: ["clean", "modern", "aesthetic", "minimal", "instagram"],
    langCompat: "all",
    transform: arrowFrameTransform,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ██  JAPANESE SCRIPT STYLES (copy-paste survives — real Unicode convert) ██
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "ja-hiragana-to-katakana",
    name: "ひらがな → カタカナ",
    description: "Convert hiragana to katakana — sharp, confident Japanese style",
    category: "effect",
    tags: ["japanese", "aesthetic", "modern", "clean", "unique"],
    langCompat: "ja",
    transform: hiraganaToKatakanaTransform,
  },
  {
    id: "ja-katakana-to-hiragana",
    name: "カタカナ → ひらがな",
    description: "Convert katakana to hiragana — soft, flowing Japanese style",
    category: "effect",
    tags: ["japanese", "cute", "soft", "aesthetic", "kawaii"],
    langCompat: "ja",
    transform: katakanaToHiraganaTransform,
  },
];

// ─── Category Filter ─────────────────────────────────────────────────────────
export const CATEGORIES = [
  { id: "all",        label: "All Styles" },
  { id: "cute",       label: "✨ Cute" },
  { id: "script",     label: "Script" },
  { id: "serif",      label: "Serif" },
  { id: "sans",       label: "Sans-Serif" },
  { id: "aesthetic",  label: "Aesthetic" },
  { id: "decorative", label: "Decorative" },
  { id: "effect",     label: "Effects" },
] as const;

// ─── Mood / Vibe Filter ───────────────────────────────────────────────────────
export const MOOD_TAGS = [
  { id: 'cute',         emoji: '🌸', label: 'Cute',         keywords: ['cute', 'kawaii', 'girly', 'romantic', 'mini', 'playful', 'coquette', 'fairy'] },
  { id: 'luxury',       emoji: '👑', label: 'Luxury',       keywords: ['luxury', 'elegant', 'sophisticated', 'fancy', 'formal', 'classic'] },
  { id: 'gothic',       emoji: '🖤', label: 'Gothic',       keywords: ['gothic', 'dark', 'medieval', 'metal', 'heavy', 'historical'] },
  { id: 'aesthetic',    emoji: '✨', label: 'Aesthetic',    keywords: ['aesthetic', 'vaporwave', 'retro', 'instagram', 'minimal', 'chill', 'editorial', 'dreamy', 'soft'] },
  { id: 'tech',         emoji: '💻', label: 'Tech',         keywords: ['tech', 'hacker', 'developer', 'gaming', 'code', 'retro'] },
  { id: 'fun',          emoji: '😂', label: 'Fun',          keywords: ['fun', 'funny', 'quirky', 'weird', 'rebel', 'unique', 'creative', 'energetic'] },
  { id: 'creepy',       emoji: '👻', label: 'Creepy',       keywords: ['creepy', 'cursed', 'horror', 'scary', 'glitch', 'edgy', 'dramatic'] },
  { id: 'pro',          emoji: '💼', label: 'Pro',          keywords: ['professional', 'clean', 'modern', 'formal', 'strong', 'bold', 'readable'] },
  { id: 'softgirl',     emoji: '🎀', label: 'Soft Girl',    keywords: ['cute', 'girly', 'romantic', 'kawaii', 'mini', 'playful'] },
  { id: 'darkacademia', emoji: '📚', label: 'Dark Academia',keywords: ['gothic', 'vintage', 'elegant', 'sophisticated', 'historical', 'classic'] },
  { id: 'y2k',          emoji: '💿', label: 'Y2K',          keywords: ['vaporwave', 'retro', 'aesthetic', 'instagram', 'unique'] },
  { id: 'cottagecore',  emoji: '🌿', label: 'Cottagecore',  keywords: ['aesthetic', 'cute', 'elegant', 'minimal', 'romantic'] },
  { id: 'coquette',     emoji: '🩷', label: 'Coquette',     keywords: ['luxury', 'elegant', 'fancy', 'girly', 'romantic'] },
] as const;
