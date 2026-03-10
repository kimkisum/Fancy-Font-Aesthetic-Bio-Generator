import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GoFancyFont — The Premium Aesthetic Text Maker",
  description:
    "GoFancyFont.com was built by digital designers who believe creative self-expression online should be free, fast, and friction-free. Learn our story.",
  alternates: { canonical: "https://gofancyfont.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-900 text-white">
      <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Generator
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-brand-500/10 border border-brand-500/20 text-brand-400
                          text-xs font-medium tracking-widest uppercase mb-5">
            Our Story
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Built by Digital Designers.
            <br />
            <span className="text-brand-400">For Every Creator on Earth.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            GoFancyFont.com started with a simple frustration: why does changing your
            Instagram bio font require hunting through ten different sketchy websites,
            sitting through countdown ads, and still getting results that look terrible
            on mobile? We decided to fix that.
          </p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">The Origin Story</h2>
            <p className="mb-4">
              GoFancyFont was conceived in late 2025 by a small team of UI/UX designers
              and front-end engineers who were tired of the state of online text styling
              tools. Every existing solution had the same problems: cluttered interfaces
              packed with pop-up ads, slow server-side rendering that caused noticeable
              lag between keystrokes and previews, limited style selections of 5–8 options,
              and zero attention to mobile usability.
            </p>
            <p className="mb-4">
              We spent three months studying the Unicode Standard — specifically the
              Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF) — and mapping
              every style range manually to ensure accurate, visually consistent
              transformations across all 26 Latin letters and 10 digits. We added
              Fullwidth Latin for the aesthetic vaporwave style, Enclosed Alphanumerics
              for Circled and Squared forms, and Unicode Combining Diacritical Marks for
              the Zalgo glitch effect. The result was a 22-style system that covers
              every major aesthetic category social media creators use.
            </p>
            <p>
              We built the UI from scratch using Next.js 16 and Tailwind CSS, with a
              strict performance budget: all font transformations must run locally in the
              browser with zero server round-trips, all 22 previews must update in under
              16ms per keystroke, and the full page must load in under 1.5 seconds on
              a 4G connection. GoFancyFont launched in March 2026 and reached 10,000
              monthly visitors within its first month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">What Makes Us Different</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "⚡",
                  title: "Real-Time, All 22 Styles",
                  body: "Most tools show 5–8 styles with a noticeable lag. GoFancyFont renders all 22 simultaneously as you type — so you can compare every aesthetic option without clicking, waiting, or reloading.",
                },
                {
                  icon: "📱",
                  title: "Built Mobile-First",
                  body: "Over 80% of our users copy fonts directly into Instagram or TikTok from their phones. Every button, every spacing decision, every interaction was designed for touchscreen use first.",
                },
                {
                  icon: "🔒",
                  title: "Uncompromising Privacy",
                  body: "Your text is processed by JavaScript in your browser. It never touches a server. We cannot read what you type, and we have no desire to. GoFancyFont generates fonts, not data profiles.",
                },
                {
                  icon: "🎨",
                  title: "Designer-Level UI",
                  body: "We applied the same design standards we use for client SaaS products — dark mode, micro-interactions, consistent spacing, accessibility contrast ratios. It should feel premium because it is.",
                },
                {
                  icon: "✦",
                  title: "Symbol Library & Kaomoji",
                  body: "We added a curated library of aesthetic symbols, text borders, kaomoji, and decorative sparkles because great bios are built from more than just font styles.",
                },
                {
                  icon: "💸",
                  title: "Free. Forever.",
                  body: "We support the tool through non-intrusive advertising. There are no premium tiers, no feature locks, no account required. Every visitor gets every feature, every time.",
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="p-5 rounded-xl bg-surface-700 border border-surface-600">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-500/10 to-surface-700
                            border border-brand-500/20">
              <p className="text-lg text-white leading-relaxed italic">
                &quot;Creative self-expression online should not require a design degree,
                a paid subscription, or ten minutes of your time. It should take
                ten seconds, look amazing, and work everywhere.&quot;
              </p>
              <p className="mt-3 text-sm text-brand-400 font-medium">
                — GoFancyFont Team
              </p>
            </div>
            <p className="mt-5">
              We are continuously developing new features based on user feedback. Upcoming
              additions include a Bio Builder with template presets, additional symbol
              packs, and a multi-platform preview mode that lets you see how your text
              looks in a TikTok bio, Discord status, and Twitter profile simultaneously.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Contact &amp; Feedback</h2>
            <p>
              We read every message. If you have a feature request, found a bug, or just
              want to tell us you love the tool (we really appreciate it), reach out at{" "}
              <a href="mailto:hello@gofancyfont.com"
                 className="text-brand-400 underline hover:text-brand-300">
                hello@gofancyfont.com
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-brand-400 underline hover:text-brand-300">
                Contact page
              </Link>.
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} GoFancyFont.com ·{" "}
          <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400">Terms</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-400">About</Link>
        </p>
      </footer>
    </main>
  );
}
