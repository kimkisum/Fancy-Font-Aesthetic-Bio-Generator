// FAQSection.tsx — Server Component with JSON-LD FAQPage schema
// Optimized for AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)

const FAQS = [
  {
    question: "What is a fancy font generator?",
    answer:
      "A fancy font generator is a web tool that converts standard text into creative, aesthetic Unicode characters. Because it uses Unicode symbols rather than actual font files, the generated text can be copied and pasted directly into social media bios, usernames, and messages on platforms like Instagram, TikTok, and Discord.",
  },
  {
    question: "How do you copy and paste fancy fonts on Instagram?",
    answer:
      "To copy and paste fancy fonts on Instagram: 1. Type your text into the GoFancyFont input box. 2. Choose from over 50 styles (like cursive, bold, or aesthetic formats) and click the 'Copy' button. 3. Open the Instagram app, go to 'Edit Profile', and paste the copied text into your 'Bio' or 'Name' field. The styling will remain exactly as previewed.",
  },
  {
    question: "Are fancy text fonts safe to use on social media?",
    answer:
      "Yes, fancy text fonts are completely safe to use. They are simply standard Unicode characters recognized universally by modern operating systems (iOS, Android, Windows) and social networks. They do not contain malicious code or scripts. However, avoid excessive use of 'glitch' or Zalgo text in comment sections, as heavy symbol stacking can sometimes trigger automated spam filters.",
  },
  {
    question: "How is GoFancyFont better than other font generators?",
    answer:
      "GoFancyFont is optimized for a premium, frictionless user experience. Unlike older tools with cluttered interfaces, we offer: Smart Auto-Sorting that anchors your most-used fonts at the top, live App Previews to test fonts within mock Instagram and TikTok UIs, categorized filtering by aesthetic (Cute, Gothic, Script), and local storage saving. It is 100% free with no sign-ups.",
  },
  {
    question: "Why do some Unicode fonts show up as square boxes or question marks?",
    answer:
      "Square boxes (commonly called 'tofu') or question marks appear when a viewer's device lacks a system font that supports a specific Unicode character. This usually only happens on older smartphones or severely outdated browsers. For maximum global compatibility, use widely supported styles like Bold Serif, Italic, or Small Caps.",
  },
  {
    question: "Can I use Unicode fonts in gaming usernames?",
    answer:
      "Yes, many popular games—including PUBG Mobile, Free Fire, Mobile Legends, and Genshin Impact—support Unicode characters in player names and clan tags. If a specific style is rejected due to character limits or specific character blacklists in the game, try a simpler Unicode style like the Circled Alphabet or Aesthetic Full-Width.",
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
    <section id="faq" className="w-full max-w-3xl mx-auto px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-10 text-center">
        <p className="text-[11px] text-ed-muted font-bold tracking-[0.2em] uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ed-charcoal">
          Frequently Asked Questions
        </h2>
        <p className="text-ed-muted text-[14px] mt-3">
          Clear answers about using Unicode fonts for your profiles.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <details
            key={i}
            className="group bg-white border border-ed-border rounded-xl overflow-hidden shadow-sm shadow-ed-charcoal/[0.02]"
          >
            <summary
              className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer
                         text-[15px] font-medium text-ed-charcoal list-none select-none hover:bg-ed-bg
                         transition-colors leading-snug"
            >
              <span>{faq.question}</span>
              <span className="shrink-0 mt-0.5 text-ed-muted group-open:rotate-180
                               transition-transform duration-200 text-lg leading-none">
                ▾
              </span>
            </summary>
            <div className="px-5 pb-5 pt-3 text-ed-muted text-[14px] leading-relaxed border-t border-ed-borderLight">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
