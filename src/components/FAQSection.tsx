// FAQSection.tsx — Server Component with JSON-LD FAQPage schema
// Renders 6 high-value FAQs + injects structured data for Google Rich Snippets

const FAQS = [
  {
    question: "Are these fancy fonts safe to use on Instagram, TikTok, and Discord?",
    answer:
      "Yes — completely safe. GoFancyFont generates standard Unicode characters that are part of the global text encoding standard used by every modern device and operating system. They are plain text, not code, scripts, or exploits. Instagram, TikTok, Discord, Twitter/X, YouTube, and WhatsApp all accept Unicode text in bios, display names, captions, and status fields. The only exception is Zalgo glitch text, which uses combining diacritical marks — while harmless, very heavy use may occasionally be flagged by spam filters in comment sections. For bios and profile headers, all 22 styles on GoFancyFont are safe and widely supported.",
  },
  {
    question: "Why do some letters show up as square boxes (□) or question marks?",
    answer:
      "Square boxes or question marks appear when the device or application doesn't have a font installed that covers those specific Unicode code points. This typically occurs on very old smartphones (pre-2015), certain niche gaming clients, or outdated browser versions. For maximum compatibility across all devices and platforms, choose the Bold Serif (𝐀𝐁𝐂), Italic Serif (𝐴𝐵𝐶), Aesthetic Full-Width (ＡＢＣ), or Small Caps (ᴀʙᴄ) styles — these use Unicode ranges that are covered by nearly every system font installed on modern iOS, Android, Windows, and macOS devices. Avoid Zalgo and some decorative squared styles on platforms with limited Unicode font support.",
  },
  {
    question: "Can I use these fancy fonts in my gaming username on Free Fire, PUBG, or Fortnite?",
    answer:
      "Many popular mobile and PC games allow Unicode characters in player names and clan tags, including Free Fire, PUBG Mobile, Mobile Legends, Genshin Impact, and several others. To use a fancy font username: type your desired name in GoFancyFont, select the style (Bold, Circled, and Aesthetic styles tend to have the highest acceptance rate in games), copy it with one click, then paste into your game's name-change field. Note that some games may restrict certain Unicode ranges or have character length limits that apply differently to multi-byte Unicode characters. If one style is rejected, try another — Bold Serif and Circled Alphabet styles typically have the widest gaming compatibility.",
  },
  {
    question: "Is GoFancyFont.com free? Are there any hidden limits or subscriptions?",
    answer:
      "GoFancyFont.com is 100% free with absolutely no limits, no account required, no watermarks, and no premium tiers. All 22+ font style transformations are available to every visitor on every visit without restriction. The tool runs entirely in your browser — all Unicode conversion happens locally using JavaScript, with no text sent to any server. The site is supported by non-intrusive display advertising. There is no subscription model and no plans to add one.",
  },
  {
    question: "How do I copy a fancy font and paste it into my Instagram or TikTok bio?",
    answer:
      "It takes about 10 seconds. First, type your desired text into the GoFancyFont input box — all 22 style previews update in real time as you type. Second, find the style you like and click the blue 'Copy Text' button. Third, open Instagram or TikTok on your phone, go to Edit Profile, tap the Bio field, long-press and select Paste. The styled Unicode text will appear exactly as shown in the preview. You can also use the Instagram Bio Preview card on GoFancyFont to see how your text will look in a real profile layout before copying.",
  },
  {
    question: "Why can't I just bold text in WhatsApp or Notes and copy-paste it to Instagram?",
    answer:
      "When you apply bold, italic, or any other font formatting in an app like Microsoft Word, Google Docs, or WhatsApp, the app is using a font file to visually render standard code points differently on your screen. The underlying characters are still plain A, B, C — the font styling is not embedded in the text itself. When you copy and paste that text into Instagram or TikTok, only the raw characters (A, B, C) travel — the font file stays behind. GoFancyFont works differently: it replaces each standard letter with a distinct Unicode character (like 𝐀 at U+1D400 instead of A at U+0041) that was designed to look bold. Because the character itself is different, the visual style is preserved wherever you paste it — no font file required.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8 text-center">
        <p className="text-xs text-brand-400 font-semibold tracking-widest uppercase mb-2">
          FAQ
        </p>
        <h2 className="text-2xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Everything you need to know about fancy Unicode fonts and copy-paste text styles.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <details
            key={i}
            className="group bg-surface-700 border border-surface-600 rounded-xl overflow-hidden"
          >
            <summary
              className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer
                         font-medium text-white list-none select-none hover:bg-surface-600
                         transition-colors leading-snug"
            >
              <span>{faq.question}</span>
              <span className="shrink-0 mt-0.5 text-slate-500 group-open:rotate-180
                               transition-transform duration-200 text-lg leading-none">
                ▾
              </span>
            </summary>
            <p className="px-5 pb-5 pt-4 text-slate-400 text-sm leading-relaxed
                          border-t border-surface-500">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
