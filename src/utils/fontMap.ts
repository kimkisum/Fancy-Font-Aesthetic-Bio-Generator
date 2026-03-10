export interface FontStyle {
  id: string;
  name: string;
  description: string;
  category: "serif" | "sans" | "script" | "decorative" | "aesthetic" | "effect";
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
  "6": "9",  "7": "ㄥ", "8": "8", "9": "6", ".": "˙", ",": "'",
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

// Squared (A=🄰)
const SQUARED_MAP = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉".split("");
const squaredTransform = (text: string) =>
  [...text]
    .map((c) => {
      const upper = c.toUpperCase().charCodeAt(0) - 65;
      if (upper >= 0 && upper <= 25) return SQUARED_MAP[upper];
      return c;
    })
    .join("");

// Squared Negative (🅐)
const SQUARED_NEG_MAP = "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩".split("");
const squaredNegTransform = (text: string) =>
  [...text]
    .map((c) => {
      const upper = c.toUpperCase().charCodeAt(0) - 65;
      if (upper >= 0 && upper <= 25) return SQUARED_NEG_MAP[upper];
      return c;
    })
    .join("");

// Bubble / Enclosed (Ａ→ⓐ)
const bubbleTransform = unicodeMapper(0x24b6, 0x24d0);

// Bubble Filled (negative)
const bubbleFilledTransform = (text: string) =>
  [...text]
    .map((c) => {
      const code = c.toUpperCase().charCodeAt(0) - 65;
      if (c === "0") return "⓪";
      const upper = c.charCodeAt(0) - 48;
      if (upper >= 1 && upper <= 20) return String.fromCodePoint(0x2460 + upper - 1);
      if (code >= 0 && code <= 25) return String.fromCodePoint(0x1f150 + code);
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

// Wave / Superscript
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

// ─── Font Styles Registry ────────────────────────────────────────────────────
export const FONT_STYLES: FontStyle[] = [
  {
    id: "bold",
    name: "𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟",
    description: "Classic bold serif — perfect for strong statements",
    category: "serif",
    transform: unicodeMapper(0x1d400, 0x1d41a, {}, {}, 0x1d7ce),
  },
  {
    id: "italic",
    name: "𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓",
    description: "Elegant italic serif for a refined touch",
    category: "serif",
    transform: unicodeMapper(0x1d434, 0x1d44e, {}, { 7: "ℎ" }),
  },
  {
    id: "bold-italic",
    name: "𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄",
    description: "Bold italic — dramatic and eye-catching",
    category: "serif",
    transform: unicodeMapper(0x1d468, 0x1d482),
  },
  {
    id: "script",
    name: "𝒮𝒸𝓇𝒾𝓅𝓉 𝒞𝓊𝓇𝓈𝒾𝓋𝑒",
    description: "Flowing cursive script — great for elegant bios",
    category: "script",
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
    transform: unicodeMapper(0x1d4d0, 0x1d4ea),
  },
  {
    id: "fraktur",
    name: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 / 𝔊𝔬𝔱𝔥𝔦𝔠",
    description: "Gothic Fraktur — dark, mysterious, medieval vibes",
    category: "serif",
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
    transform: unicodeMapper(0x1d56c, 0x1d586),
  },
  {
    id: "double-struck",
    name: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜",
    description: "Mathematical blackboard bold — academic and cool",
    category: "sans",
    transform: unicodeMapper(
      0x1d538, 0x1d552,
      { 2: "ℂ", 7: "ℍ", 13: "ℕ", 15: "ℙ", 16: "ℚ", 17: "ℝ", 25: "ℤ" },
      {},
      0x1d7d8
    ),
  },
  {
    id: "sans-bold",
    name: "𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱",
    description: "Clean sans-serif bold — modern and readable",
    category: "sans",
    transform: unicodeMapper(0x1d5d4, 0x1d5ee, {}, {}, 0x1d7ec),
  },
  {
    id: "sans-italic",
    name: "𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤",
    description: "Modern italic sans-serif — stylish and clean",
    category: "sans",
    transform: unicodeMapper(0x1d608, 0x1d622),
  },
  {
    id: "monospace",
    name: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
    description: "Typewriter monospace — techy and retro developer vibes",
    category: "sans",
    transform: unicodeMapper(0x1d670, 0x1d68a, {}, {}, 0x1d7f6),
  },
  {
    id: "aesthetic",
    name: "Ａｅｓｔｈｅｔｉｃ",
    description: "Full-width vaporwave aesthetic — retro Japanese city pop",
    category: "aesthetic",
    transform: aestheticTransform,
  },
  {
    id: "small-caps",
    name: "Sᴍᴀʟʟ Cᴀᴘꜱ",
    description: "Small capital letters — subtle and sophisticated",
    category: "decorative",
    transform: smallCapsTransform,
  },
  {
    id: "circled",
    name: "Ⓒⓘⓡⓒⓛⓔⓓ",
    description: "Circled letters — playful and eye-catching",
    category: "decorative",
    transform: circledTransform,
  },
  {
    id: "squared",
    name: "🄱🄾🅇🄴🄳",
    description: "Squared letters — structured and geometric",
    category: "decorative",
    transform: squaredTransform,
  },
  {
    id: "squared-neg",
    name: "🅑🅛🅐🅒🅚",
    description: "Black square blocks — bold contrast statement",
    category: "decorative",
    transform: squaredNegTransform,
  },
  {
    id: "upside-down",
    name: "nʍop ǝpᴉsdn",
    description: "Flipped upside-down text — for the rebels",
    category: "effect",
    transform: upsideDownTransform,
  },
  {
    id: "mirror",
    name: "rorriM",
    description: "Reversed mirror text — enigmatic and cryptic",
    category: "effect",
    transform: mirrorTransform,
  },
  {
    id: "strikethrough",
    name: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶",
    description: "Crossed-out text — edgy and dramatic",
    category: "effect",
    transform: strikethroughTransform,
  },
  {
    id: "underline",
    name: "U͟n͟d͟e͟r͟l͟i͟n͟e͟",
    description: "Double underline — clean emphasis",
    category: "effect",
    transform: underlineTransform,
  },
  {
    id: "superscript",
    name: "ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
    description: "Tiny superscript — mini text for aesthetic bios",
    category: "effect",
    transform: superscriptTransform,
  },
  {
    id: "zalgo",
    name: "Z̷̧̛͎̺a̷͍͝l̶̗̿g̷͖͠o̵͍̽",
    description: "Glitch Zalgo horror — cursed and corrupted",
    category: "effect",
    transform: (text) => zalgoTransform(text, 2),
  },
];

export const CATEGORIES = [
  { id: "all",        label: "All Styles" },
  { id: "serif",      label: "Serif" },
  { id: "sans",       label: "Sans-Serif" },
  { id: "script",     label: "Script" },
  { id: "decorative", label: "Decorative" },
  { id: "aesthetic",  label: "Aesthetic" },
  { id: "effect",     label: "Effects" },
] as const;
