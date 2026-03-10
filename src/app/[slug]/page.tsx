import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Generator from "@/components/Generator";
import FAQSection from "@/components/FAQSection";

// ─── Slug Data ──────────────────────────────────────────────────────────────
interface SlugConfig {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  body: string[];
  keywords: string[];
}

const SLUG_DATA: SlugConfig[] = [
  {
    slug: "instagram-fonts",
    title: "Instagram Fonts Generator — Copy & Paste Bio Fonts for Instagram",
    h1: "Instagram Fonts Generator",
    description: "Generate 22+ fancy Unicode fonts for your Instagram bio. Bold, cursive, aesthetic, Gothic & more. Copy and paste instantly — no app required.",
    intro: "Your Instagram bio has 150 characters to make a first impression. Choosing the right fancy font style transforms a plain bio into a standout profile that gets follows.",
    body: [
      "Instagram's bio field accepts any Unicode text, which means you can use mathematical script, bold serif, aesthetic fullwidth, or small caps characters without any special app or workaround. Simply type your text, select a style, and paste it directly into your Instagram profile.",
      "The most popular Instagram bio fonts in 2026 are Bold Script (𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽) for luxury and lifestyle brands, Aesthetic (Ａｅｓｔｈｅｔｉｃ) for K-pop and vaporwave aesthetics, and Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) for minimalist professional profiles.",
      "Use the Instagram Bio Preview card on this page to see exactly how your styled text will look in a real profile layout before you copy it — saving you time and guesswork.",
    ],
    keywords: ["instagram fonts", "instagram bio fonts", "copy paste fonts instagram", "fancy fonts for instagram"],
  },
  {
    slug: "discord-text-generator",
    title: "Discord Font Generator — Fancy Text for Discord Username & Status",
    h1: "Discord Font Generator",
    description: "Create unique Discord usernames and server names with 22 fancy Unicode fonts. Monospace, Gothic, Zalgo, Circled & more. One-click copy, free forever.",
    intro: "Discord is the most Unicode-permissive major platform — all 22 GoFancyFont styles render perfectly in usernames, custom statuses, bio sections, and channel descriptions.",
    body: [
      "Discord renders the full range of Unicode Mathematical Alphanumeric Symbols, making it the ideal platform for creative font styling. Whether you're running a gaming server, tech community, or creative collective, your username and server name are prime real estate for expressing your identity.",
      "Top Discord font picks: Monospace (𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎) for developer and cyberpunk servers, Gothic Fraktur (𝔊𝔬𝔱𝔥𝔦𝔠) for fantasy roleplay and metal communities, Zalgo (Z̷a̷l̷g̷o̷) for horror and meme servers, and Double Struck (𝔻𝕠𝕦𝕓𝕝𝕖) for academic and science communities.",
      "Discord also renders Circled (Ⓓⓘⓢⓒⓞⓡⓓ) and Squared (🅂🅀🅄🄰🅁🄴🄳) styles cleanly across both desktop and mobile clients on Windows, macOS, iOS, and Android.",
    ],
    keywords: ["discord font generator", "discord text generator", "discord username fonts", "fancy text discord"],
  },
  {
    slug: "tiktok-bio-maker",
    title: "TikTok Bio Maker — Fancy Fonts & Aesthetic Text for TikTok",
    h1: "TikTok Bio Maker & Font Generator",
    description: "Design the perfect TikTok bio with aesthetic Unicode fonts. Bold, cursive, small caps & vaporwave styles. 80-character limit supported. Copy in one click.",
    intro: "TikTok gives you 80 characters to hook a viewer before they decide to follow. Fancy Unicode fonts make every character count — visually.",
    body: [
      "TikTok's bio field fully supports Unicode text, meaning any style you generate on GoFancyFont copies and pastes perfectly into your TikTok profile, on both iOS and Android.",
      "Because TikTok's 80-character limit is tight, style choice matters more here than on any other platform. Bold Sans-Serif (𝗦𝗮𝗻𝘀-𝗦𝗲𝗿𝗶𝗳) offers maximum legibility at small screen sizes. Cursive Script (𝒞𝓊𝓇𝓈𝒾𝓋𝑒) adds personality without sacrificing readability. Aesthetic (Ａｅｓｔｈｅｔｉｃ) creates strong visual spacing that makes even a single line feel premium.",
      "Pro tip: combine a fancy font name on the first line with a plain-text line for your niche, and use aesthetic symbols from GoFancyFont's Symbol Library as dividers — ✦ ·  ꕥ — to create a professional, layered bio layout.",
    ],
    keywords: ["tiktok bio maker", "tiktok fonts", "aesthetic text tiktok", "tiktok bio generator"],
  },
  {
    slug: "cursed-text-generator",
    title: "Cursed Text Generator — Zalgo Glitch & Horror Font Maker",
    h1: "Cursed Text Generator (Zalgo & Glitch Fonts)",
    description: "Generate creepy cursed Zalgo text with stacked glitch diacritics. Perfect for horror bios, meme captions, SCP Foundation Discord servers. Free online tool.",
    intro: "Zalgo text — also known as cursed text or glitch text — uses Unicode Combining Diacritical Marks stacked above, through, and below letters to create a corrupted, horror aesthetic that renders on every device.",
    body: [
      "The Zalgo effect works by attaching multiple Unicode combining characters (from the range U+0300–U+036F) to each letter. These are the same characters used for accent marks in French and Spanish — but stacked in extreme quantities, they produce a visually chaotic 'glitching' effect.",
      "Zalgo text is fully safe — the characters are plain Unicode, not code. It copies and pastes correctly into Discord, Instagram, Twitter/X, Reddit, and most chat applications. Some spam filters may flag heavy Zalgo use in comments, so it's best used in profile bios and usernames rather than in bulk messaging.",
      "GoFancyFont uses a calibrated intensity level (2 combining marks per direction per character) for a visually impactful Zalgo effect that still remains readable and doesn't crash rendering engines on older devices.",
    ],
    keywords: ["cursed text generator", "zalgo text generator", "glitch text generator", "creepy font generator"],
  },
  {
    slug: "cute-aesthetic-fonts",
    title: "Cute Aesthetic Fonts — Kawaii & Soft Aesthetic Text Generator",
    h1: "Cute & Aesthetic Font Generator",
    description: "Generate cute, kawaii, and soft aesthetic Unicode fonts for Instagram, TikTok, and Tumblr bios. Bold Script, Small Caps, Cursive & more. Free, instant copy.",
    intro: "Aesthetic fonts combine visual softness with expressive personality — the perfect choice for lifestyle influencers, K-pop fan accounts, art creators, and anyone who wants their profile to feel warm, creative, and uniquely them.",
    body: [
      "The most popular cute aesthetic fonts are Bold Script (𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽) for a luxurious handwritten feel, Italic Serif (𝐼𝑡𝑎𝑙𝑖𝑐) for elegant softness, and Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) for a whimsical minimalist look.",
      "Pair your chosen font with cute aesthetic symbols from GoFancyFont's Symbol Library — ˚₊·˚ᗢ₊˚✧ ゚. or ꕥ ꒰ ꒱ or ʚ♡ɞ — to build a cohesive bio that feels carefully curated rather than randomly assembled.",
      "Aesthetic text works equally well on Instagram, TikTok, Twitter, Pinterest bios, Tumblr descriptions, and Notion page headers. Because these are Unicode characters rather than image-based fonts, they scale perfectly at any screen size and resolution.",
    ],
    keywords: ["cute aesthetic fonts", "kawaii font generator", "aesthetic text generator", "soft aesthetic font"],
  },
  {
    slug: "gothic-font-generator",
    title: "Gothic Font Generator — Fraktur & Medieval Text Maker Online",
    h1: "Gothic Font Generator — Fraktur & Medieval Text",
    description: "Create Gothic Fraktur and Bold Gothic text for Discord, Instagram, and gaming usernames. Free Unicode medieval font generator — copy and paste instantly.",
    intro: "Gothic Fraktur fonts evoke the weight of medieval manuscripts and the drama of dark academia — a striking choice for gaming communities, metal fans, horror creators, and anyone who wants their text to command attention.",
    body: [
      "GoFancyFont offers two Gothic styles: Fraktur (𝔉𝔯𝔞𝔨𝔱𝔲𝔯) using the Unicode Mathematical Fraktur range (U+1D504–U+1D537), and Bold Fraktur (𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗) from the Bold Mathematical Fraktur range (U+1D56C–U+1D59F). Both render correctly across all major platforms including Discord, Instagram, and Twitter.",
      "Gothic fonts are particularly popular in Discord servers centered on fantasy roleplay, Dungeons & Dragons, dark academia, heavy metal music, gothic literature, and horror fiction. They're also widely used for game server names, clan tags in MMORPG games, and aesthetic usernames.",
      "Note that the standard Fraktur range has some exceptions for letters C (ℭ), H (ℌ), I (ℑ), R (ℜ), and Z (ℨ) which use special Unicode code points from the Letterlike Symbols block. GoFancyFont handles these exceptions automatically for accurate rendering.",
    ],
    keywords: ["gothic font generator", "fraktur font generator", "medieval text generator", "gothic text copy paste"],
  },
  {
    slug: "cursive-text-generator",
    title: "Cursive Text Generator — Fancy Script Font Copy & Paste",
    h1: "Cursive Text Generator & Script Font Maker",
    description: "Generate elegant cursive and script Unicode text for Instagram bios, wedding captions, and social media. Mathematical Script & Bold Script styles. Copy instantly.",
    intro: "Cursive and script fonts communicate elegance, creativity, and personal expression — making them the most-used fancy font style for Instagram bios, brand names, and creator profiles.",
    body: [
      "GoFancyFont offers two cursive styles: Script (𝒮𝒸𝓇𝒾𝓅𝓉) from the Unicode Mathematical Script range (U+1D49C), which has a lighter, more classical cursive appearance; and Bold Script (𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝒾𝓹𝓉) from U+1D4D0, which produces a thick, luxurious handwritten style that's more visible at small sizes.",
      "Cursive Unicode text works across all platforms because it uses dedicated code points rather than font file rendering. Unlike a 'cursive' CSS font rule, which reverts to plain text when pasted elsewhere, GoFancyFont's cursive characters are the styled characters themselves — the styling travels with every copy and paste.",
      "Cursive fonts are particularly effective for: personal brand bios on Instagram and LinkedIn, product names and taglines in social media posts, event promotion captions (weddings, galas, product launches), and creative portfolio descriptions.",
    ],
    keywords: ["cursive text generator", "cursive font generator", "script font generator", "cursive copy paste"],
  },
  {
    slug: "vaporwave-text-generator",
    title: "Vaporwave Text Generator — Aesthetic Full-Width Font Maker",
    h1: "Vaporwave & Aesthetic Text Generator",
    description: "Generate full-width vaporwave aesthetic text (Ａｅｓｔｈｅｔｉｃ) for Instagram, TikTok, and Tumblr. Retro 80s & 90s style Unicode text. Free, instant copy.",
    intro: "Vaporwave aesthetic text — written in fullwidth Unicode characters — captures the nostalgia of 80s Japanese city pop, retro computing, and the dreamy pastel internet aesthetic that defines a generation of online culture.",
    body: [
      "The Aesthetic (Fullwidth) style uses Unicode's Fullwidth Latin character range (U+FF01–U+FF5E), where each character occupies double the horizontal space of standard ASCII. Originally designed for CJK (Chinese, Japanese, Korean) text alignment, fullwidth Latin characters became iconic in internet vaporwave culture for their distinctive wide spacing.",
      "Writing in fullwidth characters creates a unique pacing effect — text feels slow, deliberate, and cinematic. This is why aesthetic vaporwave text is so effective in bios and profile headers, where you want viewers to slow down and absorb your personal brand.",
      "Vaporwave aesthetic text pairs perfectly with the symbols in GoFancyFont's Symbol Library, particularly sparkle strings (✧˚ · .) and kaomoji (｡◕‿◕｡), to build cohesive lo-fi, aesthetic, or cottagecore social media profiles.",
    ],
    keywords: ["vaporwave text generator", "aesthetic text generator", "full width text", "aesthetic font maker"],
  },
  {
    slug: "bold-text-generator",
    title: "Bold Text Generator — Bold Font Copy & Paste for Any Platform",
    h1: "Bold Text Generator — Copy & Paste Bold Font",
    description: "Generate bold Unicode text that works on Instagram, Discord, Twitter, and anywhere. Mathematical Bold Serif & Sans-Serif. Instant copy — no app required.",
    intro: "Bold text draws the eye, conveys authority, and makes key words pop in any bio or caption. Unlike HTML bold tags that don't travel with copy-pasted text, Unicode bold characters keep their weight everywhere.",
    body: [
      "GoFancyFont offers two distinct bold styles: Bold Serif (𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟) from the Mathematical Bold range (U+1D400), which combines weight with traditional serif letterforms for a classic, authoritative look; and Bold Sans-Serif (𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀) from U+1D5D4, which produces a clean, modern weight similar to a bold Helvetica or Inter.",
      "Bold text is particularly effective in social media bios when you want to emphasize key information: your name or brand (in bold), followed by your niche in plain text, followed by a call-to-action in bold again. This creates visual hierarchy that guides the reader's eye.",
      "Bold Unicode characters have virtually universal support across all modern devices and platforms, making them the safest choice when compatibility is a priority alongside visual impact.",
    ],
    keywords: ["bold text generator", "bold font generator", "bold copy paste", "unicode bold text"],
  },
  {
    slug: "cool-text-generator",
    title: "Cool Text Generator — 22 Fancy Unicode Fonts Online Free",
    h1: "Cool Text Generator — 22 Styles, Instant Copy",
    description: "Generate cool text with 22 fancy Unicode font styles — bold, cursive, Gothic, aesthetic, bubble, monospace & more. Free cool text generator, no sign-up needed.",
    intro: "The best cool text generator gives you maximum creative range with minimum friction. GoFancyFont delivers 22 simultaneously previewed styles with one-click copy — the most comprehensive free cool text tool in 2026.",
    body: [
      "What makes text look 'cool' varies by context and community. For gaming, it's Gothic Fraktur or Monospace. For fashion and lifestyle, it's Bold Script or Aesthetic. For tech and developer culture, it's Monospace or Double Struck. For edgy or alternative aesthetics, it's Zalgo or Strikethrough. GoFancyFont covers all of these in a single page with category filters to narrow your search.",
      "All 22 cool text styles use Unicode characters that work cross-platform. Unlike image-based 'cool text' generators that produce a PNG file you can't paste into a text field, GoFancyFont's output is pure text — pasteable into any app, searchable in any search bar, readable by every screen reader.",
      "GoFancyFont also pairs cool text fonts with a curated Symbol Library featuring Kaomoji, text borders (╔══════╗), sparkle strings (✧˚ · .), and aesthetic decorations — so you can build a complete bio aesthetic in one place.",
    ],
    keywords: ["cool text generator", "fancy text generator", "cool font generator", "cool text copy paste"],
  },
  {
    slug: "gaming-username-generator",
    title: "Gaming Username Generator — Fancy Text for Free Fire, PUBG & More",
    h1: "Gaming Username Generator — Fancy Fonts for Any Game",
    description: "Create unique gaming usernames with fancy Unicode fonts for Free Fire, PUBG Mobile, Mobile Legends, Genshin Impact & more. Copy and paste clan tags. Free.",
    intro: "A standout gaming username is part of your in-game identity. Whether you're grinding ranked, leading a clan, or streaming, a fancy Unicode username makes you instantly recognizable.",
    body: [
      "Many popular mobile and PC games support Unicode characters in player names: Free Fire, PUBG Mobile, Mobile Legends, Genshin Impact, Roblox, Minecraft, and others. To use a fancy gaming username, generate it on GoFancyFont, copy it, then paste it into your game's name-change field.",
      "For maximum compatibility across different games, the Bold Serif, Italic, Circled (Ⓒⓘⓡⓒⓛⓔⓓ), and Squared (🅂🅀🅄🄰🅁🄴🄳) styles tend to render correctly in the widest range of gaming clients. Avoid Zalgo for gaming usernames as some games filter heavy combining characters.",
      "Keep your gaming username short — most games have character limits (often 8–16 characters) that may count differently for multi-byte Unicode characters. Test your username in-game first to confirm it fits within the allowed length.",
    ],
    keywords: ["gaming username generator", "free fire name generator", "pubg name generator", "fancy gaming username"],
  },
  {
    slug: "aesthetic-bio-generator",
    title: "Aesthetic Bio Generator — Instagram & TikTok Bio Ideas 2026",
    h1: "Aesthetic Bio Generator — Craft the Perfect Social Bio",
    description: "Build an aesthetic bio for Instagram, TikTok, and Twitter with fancy fonts, symbols, and kaomoji. Real-time Instagram bio preview. Free, instant, no login.",
    intro: "An aesthetic bio isn't just about fonts — it's about visual hierarchy, symbol placement, and creating a profile that feels intentional. GoFancyFont gives you every tool to build it on one page.",
    body: [
      "The anatomy of a great aesthetic bio typically follows a three-line structure: (1) your name or brand in a fancy font style, (2) your niche or value proposition in plain or small-caps text, and (3) a call-to-action with an aesthetic symbol or kaomoji. GoFancyFont's Symbol Library provides hundreds of symbols, borders, and kaomoji to complete each section.",
      "Use GoFancyFont's Instagram Bio Preview card to see how your styled text looks in a real profile layout as you type — including avatar, follower stats, and action buttons. This eliminates the guesswork of font size and spacing that trips up most creators.",
      "For maximum engagement, mix font styles deliberately: use one fancy font for emphasis, keep the rest in plain or small-caps text for readability. Profiles that use too many simultaneous styles often feel cluttered — the most effective aesthetic bios use contrast strategically.",
    ],
    keywords: ["aesthetic bio generator", "instagram bio ideas", "tiktok bio maker", "aesthetic text maker"],
  },
  {
    slug: "copy-paste-fonts",
    title: "Copy & Paste Fonts — 22 Fancy Text Styles That Work Everywhere",
    h1: "Copy & Paste Fonts — Fancy Text for Every Platform",
    description: "Browse 22 copy-and-paste Unicode fonts that work on Instagram, TikTok, Discord, Twitter, WhatsApp & more. Bold, cursive, Gothic, aesthetic, Zalgo. Free forever.",
    intro: "Copy and paste fonts work because they use dedicated Unicode characters — not font files — to encode visual style directly into the text. The result: styled text that travels perfectly wherever you paste it.",
    body: [
      "The copy-paste font concept is often misunderstood. When people say 'copy and paste fonts', they mean Unicode character substitution — replacing standard Latin letters with mathematically or aesthetically equivalent characters from specialized Unicode blocks. The styling is baked into the character itself, not applied externally by a font renderer.",
      "This is why paste fonts work on Instagram when Word-formatted text doesn't: a 'bold' Word document uses the font Arial Bold to render standard Unicode codepoint U+0041 (A) — but the codepoint itself is still U+0041, which pastes as plain A. GoFancyFont uses U+1D400 (𝐀), a different character that looks bold regardless of which font renders it.",
      "GoFancyFont's 22 copy-paste font styles cover every major aesthetic need: professional (Bold, Small Caps), creative (Script, Cursive), technical (Monospace, Double Struck), decorative (Circled, Squared, Bubble), and expressive (Zalgo, Upside Down, Aesthetic).",
    ],
    keywords: ["copy paste fonts", "copy and paste fonts", "paste fonts", "unicode copy paste"],
  },
  {
    slug: "small-caps-generator",
    title: "Small Caps Text Generator — Sᴍᴀʟʟ Cᴀᴘꜱ Font Copy & Paste",
    h1: "Small Caps Generator — ꜱᴍᴀʟʟ ᴄᴀᴘꜱ Unicode Font",
    description: "Generate small capital letters (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) for Instagram, LinkedIn, Discord, and YouTube bios. Professional Unicode small caps — copy and paste free.",
    intro: "Small capitals provide the visual weight of uppercase letters with the proportions of lowercase — creating a sophisticated, understated typographic effect that signals polish and professionalism.",
    body: [
      "Small caps in GoFancyFont are generated using Unicode Phonetic Extensions and Latin Extended blocks, where individual small capital letterforms exist as dedicated code points. For example, small capital A is ᴀ (U+1D00), small capital B is ʙ (U+0299), and small capital C is ᴄ (U+1D04). These are specific characters, not scaled letterforms.",
      "Small caps are the preferred aesthetic font style for professional and business social media profiles because they maintain legibility at small sizes while providing visual differentiation from plain text. They work particularly well on LinkedIn bios, YouTube channel descriptions, and Twitter profiles where credibility is important.",
      "Unlike most fancy font styles, small caps convert lowercase input to their small capital equivalents, meaning they work best on lowercase text. GoFancyFont's small caps transformation processes the entire input regardless of case, producing consistent results.",
    ],
    keywords: ["small caps generator", "small caps font", "small caps text", "small capitals generator"],
  },
  {
    slug: "zalgo-text-generator",
    title: "Zalgo Text Generator — Cursed & Glitch Font Online Free",
    h1: "Zalgo Text Generator — Cursed Glitch Font",
    description: "Create creepy Zalgo glitch text with combining Unicode diacritics for horror bios, Discord, and meme captions. Instant preview and copy. Free online tool.",
    intro: "Zalgo text is the internet's most visually chaotic text style — stacked diacritical marks that overwhelm each letter, creating a corrupted, horror-aesthetic that has become iconic in meme culture, SCP communities, and online horror.",
    body: [
      "The Zalgo effect is created by attaching multiple Unicode Combining Diacritical Marks (U+0300–U+036F) above, through, and below each base letter. These combining characters were designed for accent marks in various writing systems — Zalgo style applies many of them simultaneously to create visual chaos. The base letters and their combining marks are all standard Unicode and copy-paste correctly on every major platform.",
      "Zalgo text was popularized in the late 2000s internet horror scene and has since become a staple of creepypasta, SCP Foundation lore, and horror meme culture. It's commonly used in Discord server names and channels, Reddit posts, Twitter bios for horror content creators, and horror-themed social media profiles.",
      "GoFancyFont uses a controlled Zalgo intensity (2 marks per direction per character) — heavy enough for a strong glitch effect, but calibrated to remain visually distinguishable and avoid crashing older rendering engines. For a more intense effect on desktop, simply repeat your text and stack two Zalgo outputs.",
    ],
    keywords: ["zalgo text generator", "cursed text generator", "glitch text online", "zalgo font"],
  },
  {
    slug: "unicode-text-converter",
    title: "Unicode Text Converter — Convert Text to Unicode Font Styles",
    h1: "Unicode Text Converter — 22 Style Transformations",
    description: "Convert plain text into 22 Unicode font styles instantly. Bold, italic, script, Gothic, aesthetic, monospace & more. Free Unicode text converter — no download.",
    intro: "A Unicode text converter maps standard Latin characters to specialized Unicode code points that visually resemble styled fonts — producing text that retains its appearance wherever it's pasted, on any platform, without any font files.",
    body: [
      "GoFancyFont's conversion engine processes each input character against 22 separate Unicode range mappings, covering the Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), the Enclosed Alphanumerics block (U+2460–U+24FF), the Enclosed Alphanumeric Supplement (U+1F100–U+1F1FF), Fullwidth Latin (U+FF01–U+FF5E), and Unicode Combining Diacritical Marks (U+0300–U+036F).",
      "All conversions handle the known exceptions in the Unicode standard — for example, the Mathematical Italic range has dedicated code points for h (ℎ, U+210E) and several other letters that fall outside the regular range. Bold Script uses ℬ for B, ℰ for E, ℱ for F, ℋ for H, ℐ for I, ℒ for L, ℳ for M, and ℛ for R from the Letterlike Symbols block. These edge cases are resolved automatically.",
      "The converter runs entirely client-side in your browser using JavaScript. No API calls are made, no text is transmitted to any server, and all 22 style previews update simultaneously in under 16 milliseconds per keystroke on modern hardware.",
    ],
    keywords: ["unicode text converter", "unicode font converter", "text to unicode", "fancy unicode generator"],
  },
];

// ─── Static Params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return SLUG_DATA.map(({ slug }) => ({ slug }));
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = SLUG_DATA.find((s) => s.slug === slug);
  if (!page) return { title: "Not Found" };

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://gofancyfont.com/${slug}`,
      type: "website",
      images: [
        {
          url: `/og?title=${encodeURIComponent(page.h1)}`,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`/og?title=${encodeURIComponent(page.h1)}`],
    },
    alternates: { canonical: `https://gofancyfont.com/${slug}` },
  };
}

// ─── Page Component ─────────────────────────────────────────────────────────
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = SLUG_DATA.find((s) => s.slug === slug);
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-surface-900 text-white">
      {/* Hero */}
      <section className="border-b border-surface-600 bg-surface-800/50">
        <div className="max-w-5xl mx-auto px-4 pt-12 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-brand-500/10 border border-brand-500/20 text-brand-400
                          text-xs font-medium tracking-widest uppercase mb-5">
            ✨ Free Tool — No Sign-Up
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4
                         bg-gradient-to-br from-white via-slate-200 to-slate-400
                         bg-clip-text text-transparent">
            {page.h1}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            {page.intro}
          </p>
        </div>
      </section>

      {/* Generator */}
      <Generator />

      {/* SEO Content */}
      <section className="border-t border-surface-600 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-5 text-slate-400 leading-relaxed">
          {page.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-surface-600 py-8 text-center text-slate-600 text-sm space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-4 flex-wrap">
          {[
            { href: "/", label: "Home" },
            { href: "/guide", label: "Guide" },
            { href: "/about", label: "About" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map(({ href, label }) => (
            <a key={href} href={href}
               className="hover:text-slate-400 transition-colors">
              {label}
            </a>
          ))}
        </p>
      </footer>
    </main>
  );
}
