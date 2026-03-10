// HomeContent.tsx — 800+ word SEO article + 7-FAQ schema block
// Placed at the bottom of the home page.

const FAQ_ITEMS = [
  {
    question: "Are these fancy fonts compatible with Android and iOS?",
    answer:
      "Yes. GoFancyFont uses Unicode characters that are natively supported by both Android and iOS operating systems. Because the styled letters are actual Unicode code points — not images or font files — they display correctly in any text field on any modern smartphone or tablet, including Samsung Galaxy, Google Pixel, iPhone, and iPad. No app installation is required.",
  },
  {
    question: "Why do some characters appear as boxes or question marks [?]?",
    answer:
      "Boxes or question marks appear when the device or app does not have a font installed that covers those specific Unicode code points. This typically happens on older devices, certain niche apps, or some gaming clients. For the broadest compatibility, use the Bold Serif, Italic Serif, Aesthetic (Full-Width), or Small Caps styles — these ranges are supported by virtually all modern fonts including the default system fonts on iOS, Android, Windows, and macOS.",
  },
  {
    question:
      "Can I use these fancy fonts in my gaming username on Free Fire, PUBG, or other games?",
    answer:
      "Many popular mobile games including Free Fire, PUBG Mobile, Mobile Legends, and Genshin Impact allow Unicode characters in player names and clan tags. Simply generate your styled name on GoFancyFont.com, copy it, and paste it into the name-change field in your game. Note that some games filter specific Unicode ranges, so if one style is rejected, try another — Bold Serif and Circled styles tend to have the widest acceptance in gaming contexts.",
  },
  {
    question:
      "Will fancy fonts affect my character count on Instagram or Twitter?",
    answer:
      "Each Unicode character counts as exactly one character, the same as a standard letter. So a 150-character bio written in Bold Script uses exactly 150 characters — the same as plain text. Instagram's 150-character bio limit and Twitter's 160-character bio limit apply equally to Unicode styled text. This means fancy fonts do not reduce or increase your usable character budget.",
  },
  {
    question:
      "Can search engines read and index my fancy Unicode text?",
    answer:
      "Partially. Google's crawler can technically read many Unicode mathematical characters, but these characters are not treated as equivalent to their standard Latin counterparts for keyword matching purposes. A bio written in Bold Script is unlikely to rank for its keywords in the same way plain text would. For SEO-sensitive content (page copy, headings, blog posts), always use standard text. Reserve fancy Unicode fonts for decorative UI elements, usernames, and social media bios where discoverability is not the primary concern.",
  },
  {
    question: "Is GoFancyFont.com free to use? Are there any limits?",
    answer:
      "GoFancyFont.com is 100% free with no usage limits, no account required, and no watermarks on the output. All 22+ font styles are available to every visitor without any paywall or subscription. The tool runs entirely in your browser — no text is sent to any server — so you can use it as frequently as you like for personal or commercial projects.",
  },
  {
    question:
      "How is this different from simply changing the font in Microsoft Word or Google Docs?",
    answer:
      "When you change the font in Word or Google Docs, you are selecting a font file that controls how standard code points (A, B, C...) are visually rendered on your screen. That visual rendering does not travel with the text when you copy and paste it elsewhere — so pasting 'bold' Word text into an Instagram bio produces plain text. GoFancyFont works differently: it replaces each standard letter with a different Unicode character that was designed to look bold, italic, or decorative. Because the character itself is different, the visual style is embedded in the text and preserved wherever it is pasted.",
  },
];

export default function HomeContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full border-t border-surface-600 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

          {/* ── SEO Article ─────────────────────────────── */}
          <article className="space-y-10">

            <header>
              <p className="text-xs text-brand-400 font-semibold tracking-widest uppercase mb-2">
                In-Depth Guide · 2026
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Why GoFancyFont Is the Best Aesthetic Text Tool
                for Social Media in 2026
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Social media profiles are your digital first impression. In a feed saturated
                with plain text, a beautifully styled bio written with{" "}
                <strong className="text-slate-200">copy and paste fonts</strong> can be the
                difference between someone scrolling past and clicking follow. GoFancyFont.com
                offers the fastest, cleanest, and most comprehensive{" "}
                <strong className="text-slate-200">aesthetic text maker</strong> on the web —
                and this guide explains exactly why.
              </p>
            </header>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
                How Unicode Magic Powers Your Social Media Bios
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Every character you see on a screen — every letter, number, emoji, and symbol —
                is defined by the{" "}
                <strong className="text-slate-200">Unicode Standard</strong>, a universal
                encoding system maintained by the Unicode Consortium. Unicode currently encodes
                over 149,000 characters covering 161 modern and historic scripts. Within this
                vast library are entire alphabets designed for specialized mathematical
                typesetting: bold serifs, italic serifs, script cursives, Fraktur Gothic, double
                struck, monospace, and more.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                GoFancyFont maps your typed text — letter by letter — to these specialized
                Unicode ranges in real time. The letter{" "}
                <strong className="text-white">A</strong> (U+0041) becomes{" "}
                <strong className="text-white">𝐀</strong> (U+1D400, Mathematical Bold Capital A)
                or <strong className="text-white">𝒜</strong> (U+1D49C, Mathematical Script
                Capital A) or <strong className="text-white">Ａ</strong> (U+FF21, Fullwidth
                Latin Capital Letter A). Because each styled character is a genuinely different
                Unicode code point, the visual styling is{" "}
                <strong className="text-slate-200">embedded in the text itself</strong> — not
                in a font file. This is the fundamental reason why copy-and-paste fonts work
                on every platform: the characters travel with the text.
              </p>
              <p className="text-slate-400 leading-relaxed">
                This approach requires zero plugins, zero downloads, and zero accounts. All
                22 style transformations happen locally in your browser using a single
                JavaScript mapping function — making GoFancyFont one of the fastest{" "}
                <strong className="text-slate-200">aesthetic text makers</strong> available.
                There is no server round-trip, which also means your typed text is never
                collected, stored, or transmitted.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
                Step-by-Step Guide: Copy and Paste Fancy Fonts for Instagram,
                TikTok, and Discord
              </h2>

              <h3 className="text-base font-semibold text-slate-200 mb-3 mt-5">
                Instagram Bio Ideas with Fancy Fonts
              </h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Instagram's bio field accepts any Unicode text, making it the most popular
                destination for styled fonts. Here's how to craft the perfect{" "}
                <strong className="text-slate-200">Instagram bio idea</strong> with GoFancyFont:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-400 mb-4">
                <li>Type your name or tagline into the GoFancyFont input box.</li>
                <li>Browse the 22 live previews — try <em>Bold Script</em> for elegance or <em>Aesthetic</em> for a vaporwave look.</li>
                <li>Click <strong className="text-slate-200">Copy Text</strong> on your chosen style.</li>
                <li>Open Instagram → Edit Profile → Bio → long-press → Paste.</li>
                <li>Combine multiple styles: use Bold Script for your name, plain text for your tagline, and Superscript for a subtle detail line.</li>
              </ol>
              <div className="p-4 rounded-lg bg-surface-700 border border-surface-600 mb-5">
                <p className="text-sm text-slate-300">
                  <strong>Pro tip:</strong> Use aesthetic separators like{" "}
                  <span className="text-brand-400">✦ · ∙ ◈ ⟡</span> between lines of your bio
                  to create a professional, polished look without reducing your character count.
                </p>
              </div>

              <h3 className="text-base font-semibold text-slate-200 mb-3 mt-5">
                TikTok & Twitter Bios
              </h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                TikTok's bio limit is 80 characters, so brevity matters. Choose a single
                high-impact style — <em>Cursive Script</em> for a personal brand, or{" "}
                <em>Small Caps</em> for a clean professional look. Twitter/X allows 160
                characters in the bio field and fully supports all Unicode styles including
                the Zalgo glitch effect, which is popular in creative and gaming communities.
              </p>

              <h3 className="text-base font-semibold text-slate-200 mb-3 mt-5">
                Discord Font Generator Use Cases
              </h3>
              <p className="text-slate-400 leading-relaxed">
                As a <strong className="text-slate-200">Discord font generator</strong>,
                GoFancyFont is particularly popular for server names, custom statuses, and
                channel descriptions. The Monospace style gives a developer/hacker aesthetic
                that fits tech servers perfectly. Gothic Fraktur suits fantasy or medieval
                roleplay servers. Zalgo is a staple in horror, meme, and creepypasta
                communities. Discord also renders Circled and Squared block letter styles
                cleanly across both desktop and mobile clients.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
                The Difference Between Fonts and Mathematical Alphanumeric Symbols
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Understanding this distinction will help you use fancy text generators more
                effectively and explain to others why they work.
              </p>

              <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">
                Traditional Fonts (TrueType / OpenType)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                A font file (e.g., <em>.ttf</em> or <em>.otf</em>) is a software library that
                maps standard Unicode code points to visual glyph designs. When you set text
                to "Arial Bold" in a word processor, the software reads the Arial font file
                and renders each letter using that file's bold glyph designs. The underlying
                code points remain unchanged (A is always U+0041). Copy that text and paste
                it into a plain text field — like an Instagram bio — and only the bare code
                points travel. The font is left behind. The result is unstyled plain text.
              </p>

              <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">
                Unicode Mathematical Alphanumeric Symbols (Block U+1D400–U+1D7FF)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                The Unicode Standard includes a dedicated block called{" "}
                <strong className="text-slate-200">Mathematical Alphanumeric Symbols</strong>{" "}
                (U+1D400 to U+1D7FF), originally intended for mathematical notation in academic
                publishing. This block contains complete alphabets in bold, italic, bold italic,
                script, bold script, Fraktur, double-struck, sans-serif, and monospace styles —
                uppercase, lowercase, and digits. A character from this block is a{" "}
                <em>different code point</em> from a standard Latin letter. It looks stylized
                because it was designed to, not because a font file is styling it. When you
                copy U+1D400 (𝐀), you copy the stylized character itself. It renders
                identically on any system that supports that Unicode block — which includes
                every major OS released since 2010.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {[
                  { label: "Bold Serif 𝐀𝐁𝐂",    range: "U+1D400–U+1D433", compat: "Universal" },
                  { label: "Script 𝒜ℬ𝒞",          range: "U+1D49C–U+1D4CF", compat: "Universal" },
                  { label: "Aesthetic Ａ Ｂ Ｃ",   range: "U+FF01–U+FF5E",   compat: "Universal" },
                  { label: "Gothic 𝔄𝔅ℭ",           range: "U+1D504–U+1D537", compat: "Universal" },
                  { label: "Circled Ⓐ Ⓑ Ⓒ",      range: "U+24B6–U+24E9",   compat: "Universal" },
                  { label: "Zalgo Z̷a̷l̷g̷o̷",         range: "Combining chars",  compat: "Most apps" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-lg bg-surface-900 border border-surface-600 text-center">
                    <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                    <p className="text-[10px] text-slate-500">{item.range}</p>
                    <p className="text-[10px] text-emerald-400 mt-1">{item.compat}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 leading-relaxed mt-5">
                Beyond the Mathematical Alphanumeric Symbols block, GoFancyFont also uses
                the <strong className="text-slate-200">Enclosed Alphanumerics</strong> block
                (Circled, Squared), the{" "}
                <strong className="text-slate-200">Fullwidth Latin</strong> range (Aesthetic),
                and Unicode{" "}
                <strong className="text-slate-200">Combining Diacritical Marks</strong> (Zalgo
                glitch effect) — giving you 22 distinct visual styles from a single tool.
              </p>
            </section>

            {/* Why GoFancyFont */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
                What Makes GoFancyFont Different from Other Generators?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "22 styles, one page",
                    body: "Most tools show 5–8 styles. GoFancyFont renders all 22 simultaneously in real time so you can compare every option at a glance, without clicking through pages or reloading.",
                  },
                  {
                    title: "Zero latency, privacy-first",
                    body: "All transformations run in your browser using a local Unicode mapping function. Nothing you type is ever sent to a server. There are no cookies set by the generator itself, no analytics attached to your keystrokes.",
                  },
                  {
                    title: "Category filter + search",
                    body: "Quickly narrow down results by style category (Serif, Script, Decorative, Effects) or search by name. Ideal when you know the aesthetic you're going for — gothic, vaporwave, minimal — without scrolling through everything.",
                  },
                  {
                    title: "Mobile-optimized interface",
                    body: "Built with a mobile-first layout. The copy button is large and well-spaced for touchscreen use, because most users will paste directly into an Instagram or TikTok app on their phone.",
                  },
                  {
                    title: "AdSense-free generator area",
                    body: "Advertisements are placed thoughtfully — above the results, between style groups, and in the page footer — never interrupting the core copy-and-paste workflow. Your experience stays clean and fast.",
                  },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-brand-500/20
                                      text-brand-400 flex items-center justify-center text-xs">✓</span>
                    <div>
                      <strong className="text-slate-200">{title}:</strong>{" "}
                      <span className="text-slate-400">{body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          {/* ── FAQ Section ─────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-surface-600">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="group bg-surface-700 border border-surface-600 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer
                                       font-medium text-white list-none select-none
                                       hover:bg-surface-600 transition-colors">
                    {item.question}
                    <span className="shrink-0 ml-4 text-slate-500 group-open:rotate-180 transition-transform duration-200">
                      ▾
                    </span>
                  </summary>
                  <p className="px-5 pb-5 pt-4 text-slate-400 text-sm leading-relaxed border-t border-surface-500">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
