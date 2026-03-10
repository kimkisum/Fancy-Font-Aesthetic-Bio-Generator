import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultimate Guide to Aesthetic Fonts & Fancy Text — FancyFont.io",
  description:
    "Learn how fancy font generators work, how to use aesthetic Unicode text for Instagram bios and TikTok profiles, why copy-paste fonts work everywhere, and whether special characters are safe on social media.",
  keywords: [
    "aesthetic fonts guide",
    "how fancy font generator works",
    "instagram bio font tutorial",
    "unicode fonts explained",
    "copy paste fonts safe",
    "tiktok aesthetic text",
    "fancy text generator guide",
  ],
  openGraph: {
    title: "Ultimate Guide to Aesthetic Fonts & Fancy Text",
    description:
      "Everything you need to know about fancy Unicode fonts — how they work, where to use them, and pro tips for stunning social media bios.",
    type: "article",
    url: "https://gofancyfont.com/guide",
  },
  alternates: { canonical: "https://gofancyfont.com/guide" },
};

// FAQ Schema for this guide page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a fancy font generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fancy font generator is a free online tool that converts standard text into stylized Unicode characters. It maps regular letters (A–Z) to mathematical, decorative, or symbolic Unicode ranges, producing text that looks like a different font but is actually plain Unicode — meaning it works on any device or platform that supports Unicode.",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my Instagram bio font?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Type your text into a fancy font generator, select the style you like, click 'Copy', then open the Instagram app, go to Edit Profile, tap on the Bio field, and paste. The styled Unicode text will appear exactly as shown in the generator.",
      },
    },
    {
      "@type": "Question",
      name: "Why do copy-paste fonts work on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copy-paste fonts work because they use Unicode characters — the universal text standard used by every operating system, browser, and modern app. Social platforms like Instagram, TikTok, and Twitter don't restrict which Unicode characters you can use in text fields, so the styled characters paste and display correctly.",
      },
    },
    {
      "@type": "Question",
      name: "Are Unicode special characters safe to use on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Unicode special characters are safe for personal use in bios, posts, and captions. They are standard text characters and do not contain executable code. However, extremely heavy use of combining diacritical marks (Zalgo text) may be filtered by some platforms' spam detection.",
      },
    },
    {
      "@type": "Question",
      name: "Which fancy font style is most compatible across all platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bold Serif, Italic Serif, and Aesthetic (Full-Width) styles have the broadest compatibility because they use well-established Unicode mathematical and fullwidth character ranges that are supported by virtually every modern OS and browser. Zalgo and combining character styles may render differently depending on the device.",
      },
    },
  ],
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-surface-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Generator
          </Link>
          <span className="text-xs text-slate-600 hidden sm:block">
            ✨ FancyFont.io
          </span>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-brand-500/10 border border-brand-500/20 text-brand-400
                          text-xs font-medium tracking-widest uppercase mb-4">
            Complete Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            The Ultimate Guide to Aesthetic Fonts
            <br />
            <span className="text-2xl font-semibold text-slate-400">
              & Fancy Text Generators
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Everything you need to know about Unicode fancy fonts — how they work, how to use them
            for Instagram, TikTok, and Twitter bios, and why they&apos;re safe, reliable, and free.
          </p>
        </div>

        {/* Ad Slot */}
        <div className="w-full h-[90px] bg-surface-700 border border-surface-500 rounded-xl
                        flex items-center justify-center text-slate-600 text-sm mb-10">
          [ Advertisement ]
        </div>

        {/* Table of Contents */}
        <nav className="p-5 rounded-xl bg-surface-700 border border-surface-600 mb-10">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Table of Contents
          </p>
          <ol className="space-y-2 text-sm text-brand-400">
            {[
              ["#what-is", "What is a Fancy Font Generator?"],
              ["#how-to-use", "How to Change Fonts for Instagram Bio & TikTok"],
              ["#unicode-vs-regular", "Unicode vs. Regular Fonts: Why Copy-Paste Works"],
              ["#safety", "Is it Safe to Use Special Characters on Social Media?"],
              ["#best-styles", "Best Font Styles for Different Platforms"],
              ["#pro-tips", "Pro Tips for Crafting the Perfect Aesthetic Bio"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label], i) => (
              <li key={href}>
                <a href={href} className="hover:text-brand-300 transition-colors">
                  {i + 1}. {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1 ─────────────────────────────────── */}
        <section id="what-is" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            What is a Fancy Font Generator?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A <strong className="text-white">fancy font generator</strong> is a free, browser-based tool that
            converts ordinary text into visually distinctive character styles — without installing any fonts or
            software. Instead of true typographic fonts, it leverages the Unicode Standard to produce text that
            appears bold, italic, cursive, gothic, or completely abstract.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Unicode Standard is a universal encoding system that assigns a unique code point to over 140,000
            characters across dozens of writing systems, symbols, and mathematical notation sets. Within this
            vast character library, there exist entire ranges of letters that were originally designed for
            mathematical typesetting — but which, when placed in a social media bio or caption, appear as unique
            decorative fonts.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For example, the letter <strong className="text-white">&quot;A&quot;</strong> in standard ASCII is code point
            U+0041. But <strong className="text-white">𝐀</strong> (Mathematical Bold Capital A) sits at U+1D400,{" "}
            <strong className="text-white">𝒜</strong> (Mathematical Script Capital A) at U+1D49C, and{" "}
            <strong className="text-white">Ａ</strong> (Fullwidth Latin Capital Letter A) at U+FF21. A fancy font
            generator automatically maps every character you type to its equivalent in these special Unicode
            ranges — instantly, in real-time, with no server required.
          </p>
          <div className="p-4 rounded-lg bg-surface-700 border border-surface-600 mt-4">
            <p className="text-sm text-slate-400">
              <strong className="text-slate-200">Key takeaway:</strong> A fancy font generator doesn&apos;t use
              actual font files. It produces Unicode text — which means the output is a string of characters
              that you can copy, paste, and share anywhere text is accepted, on any device, without any special
              software.
            </p>
          </div>
        </section>

        {/* ── Section 2 ─────────────────────────────────── */}
        <section id="how-to-use" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            How to Change Fonts for Instagram Bio & TikTok
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Instagram and TikTok do not offer built-in font customization for bios, captions, or usernames.
            However, because both platforms fully support Unicode text in their text input fields, you can
            effectively &quot;change&quot; your font by pasting Unicode styled text — and the result looks identical
            to a custom typeface.
          </p>

          <h3 className="text-lg font-semibold text-white mb-3 mt-6">
            Step-by-Step: Fancy Font for Instagram Bio
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-400">
            <li>
              <strong className="text-slate-200">Open FancyFont.io</strong> in your browser (mobile or desktop).
            </li>
            <li>
              <strong className="text-slate-200">Type or paste your bio text</strong> into the input field.
              You&apos;ll see all 22 styles update instantly.
            </li>
            <li>
              <strong className="text-slate-200">Browse the styles</strong> — use the category filters
              (Script, Gothic, Aesthetic, etc.) to narrow down options.
            </li>
            <li>
              <strong className="text-slate-200">Click &quot;Copy Text&quot;</strong> on your chosen style. The styled
              text is now on your clipboard.
            </li>
            <li>
              Open the <strong className="text-slate-200">Instagram app</strong> → Profile → Edit Profile → Bio
              field → long-press → Paste.
            </li>
            <li>
              <strong className="text-slate-200">Save your profile.</strong> Your new fancy font bio is live.
            </li>
          </ol>

          <h3 className="text-lg font-semibold text-white mb-3 mt-6">
            For TikTok, Twitter/X, and Discord
          </h3>
          <p className="text-slate-300 leading-relaxed mb-3">
            The process is identical across all platforms. TikTok bios, Twitter/X display names and bios,
            Discord usernames and statuses, YouTube channel descriptions, and WhatsApp statuses all accept
            Unicode text. Simply copy from FancyFont.io and paste into the relevant text field.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong className="text-slate-200">TikTok bio:</strong> Settings → Edit Profile → Bio</li>
            <li><strong className="text-slate-200">Twitter/X bio:</strong> Profile → Edit Profile → Bio</li>
            <li><strong className="text-slate-200">Discord status:</strong> User Settings → Custom Status</li>
            <li><strong className="text-slate-200">YouTube:</strong> Channel customization → Basic info → Description</li>
          </ul>
        </section>

        {/* ── Ad Slot Mid ───────────────────────────────── */}
        <div className="w-full h-[250px] bg-surface-700 border border-surface-500 rounded-xl
                        flex items-center justify-center text-slate-600 text-sm mb-12">
          [ Advertisement ]
        </div>

        {/* ── Section 3 ─────────────────────────────────── */}
        <section id="unicode-vs-regular" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            Unicode vs. Regular Fonts: Why Copy-Paste Works
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is the most common question first-time users ask: <em>&quot;Why does this work? I&apos;m just copying
            text.&quot;</em> The answer lies in the fundamental difference between{" "}
            <strong className="text-white">font files</strong> and{" "}
            <strong className="text-white">Unicode characters</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mb-3 mt-6">Regular Fonts (True Type / OpenType)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            A traditional font like <em>Times New Roman</em> or <em>Arial</em> is a software file that maps
            standard code points (A = U+0041, B = U+0042, etc.) to graphical glyph designs. When you change the
            font in Microsoft Word, you&apos;re telling the program which glyph file to use for rendering. But when
            you copy that text and paste it somewhere else, only the underlying code points (A, B, C...) travel
            with the text — the font file does not. This is why pasting &quot;bold&quot; Word text into an Instagram bio
            shows plain text.
          </p>

          <h3 className="text-lg font-semibold text-white mb-3 mt-6">Unicode Mathematical Characters</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Unicode fancy fonts work differently. The &quot;bold&quot; letter{" "}
            <strong className="text-white">𝐀</strong> isn&apos;t the letter A displayed in a bold font — it is a
            completely different character with its own unique code point (U+1D400). It looks bold because the
            Unicode Consortium designed that character to resemble a bold capital A, but it is as distinct as
            the difference between &quot;A&quot; and &quot;Α&quot; (Greek Alpha). Because the styled character{" "}
            <em>itself</em> is what travels when you copy and paste, the visual styling is preserved
            everywhere — no font file required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Regular Font Bold",
                desc: "Applies a font file. Style is lost when pasted.",
                icon: "✗",
                color: "text-red-400 border-red-500/30 bg-red-500/5",
              },
              {
                title: "Unicode Bold 𝐀𝐁𝐂",
                desc: "Each character has a unique code point. Style is preserved everywhere.",
                icon: "✓",
                color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
              },
            ].map((item) => (
              <div key={item.title} className={`p-4 rounded-lg border ${item.color}`}>
                <p className={`font-bold mb-1 ${item.color.split(" ")[0]}`}>
                  {item.icon} {item.title}
                </p>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4 ─────────────────────────────────── */}
        <section id="safety" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            Is it Safe to Use Special Characters on Social Media?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The short answer is <strong className="text-white">yes — for personal use, Unicode fancy fonts are
            completely safe.</strong> They are plain text characters, not code, scripts, or exploits. You cannot
            &quot;hack&quot; a platform simply by pasting Unicode characters into a bio field.
          </p>

          <h3 className="text-lg font-semibold text-white mb-3 mt-6">What You Should Know</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-400">
            <li>
              <strong className="text-slate-200">Accessibility:</strong> Screen readers and assistive
              technologies may not correctly pronounce or interpret Unicode mathematical characters. If
              accessibility is important for your content, consider using standard text alongside fancy styles.
            </li>
            <li>
              <strong className="text-slate-200">Searchability:</strong> Fancy Unicode text is generally not
              indexed or searchable by social platform search engines. If you want your bio to be discoverable
              by keywords, include some plain-text content as well.
            </li>
            <li>
              <strong className="text-slate-200">Platform Policies:</strong> Fancy fonts themselves do not
              violate the terms of service of Instagram, TikTok, Twitter, or Discord. However, using any text
              — fancy or plain — to violate community guidelines (harassment, spam, impersonation) is against
              the rules of those platforms.
            </li>
            <li>
              <strong className="text-slate-200">Zalgo / Glitch Text:</strong> Very heavy use of combining
              diacritical marks can occasionally trigger spam filters on some platforms, especially in comments
              or messages. Use Zalgo text sparingly and primarily in bios or headers where it won&apos;t be
              mistaken for automated spam.
            </li>
            <li>
              <strong className="text-slate-200">Character Limits:</strong> Because each Unicode character
              counts as one character, fancy fonts do not &quot;cheat&quot; character limits. A 30-character bio in
              fancy text still uses 30 characters.
            </li>
          </ul>
        </section>

        {/* ── Section 5 ─────────────────────────────────── */}
        <section id="best-styles" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            Best Font Styles for Different Platforms
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-500">
                  <th className="py-3 px-4 text-slate-300 font-semibold">Platform</th>
                  <th className="py-3 px-4 text-slate-300 font-semibold">Recommended Styles</th>
                  <th className="py-3 px-4 text-slate-300 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                {[
                  ["Instagram Bio", "Bold Script 𝓑𝓸𝓵𝓭, Aesthetic Ａｅｓｔｈｅｔｉｃ", "Works perfectly on iOS & Android"],
                  ["TikTok Bio", "Cursive 𝒮𝒸𝓇𝒾𝓅𝓉, Small Caps ꜱᴍᴀʟʟ ᴄᴀᴘꜱ", "Short bios work best"],
                  ["Twitter / X", "Bold 𝐁𝐨𝐥𝐝, Double Struck 𝔻𝕠𝕦𝕓𝕝𝕖", "Name field supports all styles"],
                  ["Discord", "Monospace 𝙼𝚘𝚗𝚘, Circled Ⓒⓘⓡⓒⓛⓔⓓ, Zalgo Z̷a̷l̷g̷o̷", "Zalgo popular in gaming communities"],
                  ["YouTube", "Bold Serif 𝐁𝐨𝐥𝐝, Gothic 𝔊𝔬𝔱𝔥𝔦𝔠", "Channel description & name"],
                ].map(([platform, styles, notes]) => (
                  <tr key={platform} className="border-b border-surface-700 hover:bg-surface-700/50 transition-colors">
                    <td className="py-3 px-4 text-slate-200 font-medium">{platform}</td>
                    <td className="py-3 px-4">{styles}</td>
                    <td className="py-3 px-4 text-slate-500">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 6 ─────────────────────────────────── */}
        <section id="pro-tips" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-surface-600">
            Pro Tips for Crafting the Perfect Aesthetic Bio
          </h2>
          <ul className="space-y-4 text-slate-400">
            {[
              {
                tip: "Mix styles strategically",
                detail:
                  "Use a fancy font for your name or headline, then switch to plain text for details like links or contact info. This creates visual hierarchy without overwhelming the reader.",
              },
              {
                tip: "Use emoji as separators",
                detail:
                  "Unicode fancy fonts pair naturally with emoji. Try using ✦ ✧ ✩ ◈ or ∙ as decorative dividers between sections of your bio.",
              },
              {
                tip: "Keep it legible",
                detail:
                  "The most aesthetic bio is also readable. Scripts and Gothic fonts look stunning as a name style, but long paragraphs in these styles can be hard to scan quickly. Reserve complex styles for one or two key lines.",
              },
              {
                tip: "Test on mobile first",
                detail:
                  "Most social media is consumed on smartphones. Always preview your bio on your phone before finalizing, as some styles render differently on different screen resolutions.",
              },
              {
                tip: "Save your favorites",
                detail:
                  "There's no account system needed — simply paste your favorite styled text into your phone's Notes app to save it for later use.",
              },
            ].map(({ tip, detail }) => (
              <li key={tip} className="flex gap-4">
                <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-brand-500/20 text-brand-400
                                  flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <div>
                  <strong className="text-slate-200">{tip}:</strong>{" "}
                  <span>{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ Section ───────────────────────────────── */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-surface-600">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <details
                key={item.name}
                className="group bg-surface-700 border border-surface-600 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer
                                     font-medium text-white list-none select-none
                                     hover:bg-surface-600 transition-colors">
                  {item.name}
                  <span className="text-slate-500 group-open:rotate-180 transition-transform duration-200 ml-4 shrink-0">
                    ▾
                  </span>
                </summary>
                <p className="px-5 pb-5 pt-4 text-slate-400 text-sm leading-relaxed border-t border-surface-500">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-500/10 to-surface-700
                        border border-brand-500/20 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to Create Your Aesthetic Bio?
          </h2>
          <p className="text-slate-400 text-sm mb-5">
            22 styles. Real-time preview. One-click copy. Completely free.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-brand-500 hover:bg-brand-600 text-white font-semibold
                       transition-all duration-200 active:scale-95"
          >
            ✨ Open Generator
          </Link>
        </div>
      </article>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} FancyFont.io ·{" "}
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          {" · "}
          <Link href="/guide" className="hover:text-slate-400 transition-colors">Guide</Link>
        </p>
      </footer>
    </main>
  );
}
