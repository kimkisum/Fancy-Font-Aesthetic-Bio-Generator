import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — GoFancyFont.com",
  description:
    "Learn about GoFancyFont.com — a free, privacy-first fancy font generator built for social media creators, gamers, and anyone who wants to stand out online.",
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
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-brand-500/10 border border-brand-500/20 text-brand-400
                          text-xs font-medium tracking-widest uppercase mb-4">
            About
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            About GoFancyFont.com
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The fastest, cleanest fancy text generator on the web — built for creators, gamers,
            and anyone who wants their profile to stand out.
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
            <p>
              GoFancyFont.com exists to give everyone — from Instagram influencers to Discord
              server owners to mobile gamers — instant access to beautiful, copy-and-paste
              Unicode text styles, completely free and without any barriers. No sign-up. No
              downloads. No paywalls.
            </p>
            <p className="mt-3">
              We believe that creative self-expression online should not require a design degree
              or a paid subscription. A well-crafted bio or username is the digital equivalent
              of a first handshake, and we want to make that handshake as memorable as possible
              for every visitor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">What We Built</h2>
            <p>
              GoFancyFont is a browser-based utility tool that maps standard Latin text to
              Unicode Mathematical Alphanumeric Symbols and other decorative character ranges
              in real time. All 22+ font style transformations run entirely in your browser —
              no text you type is ever transmitted to our servers.
            </p>
            <p className="mt-3">
              We currently offer 22 distinct styles organized into six categories: Serif, Sans-Serif,
              Script, Decorative, Aesthetic, and Effects. Each style is previewed instantly as
              you type, with a one-click copy button that puts the styled text directly on your
              clipboard, ready to paste anywhere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🔒",
                  title: "Privacy First",
                  body: "Your text never leaves your device. We do not log, store, or analyze the content you generate.",
                },
                {
                  icon: "⚡",
                  title: "Performance Obsessed",
                  body: "Every design decision prioritizes speed. Instant previews, zero server latency, optimized for mobile.",
                },
                {
                  icon: "🌐",
                  title: "Universally Accessible",
                  body: "Our output works on every major platform — iOS, Android, Windows, macOS — because Unicode is universal.",
                },
                {
                  icon: "💸",
                  title: "Free Forever",
                  body: "GoFancyFont.com is and will always be free for personal and commercial use. No premium tiers.",
                },
              ].map((v) => (
                <div key={v.title} className="p-5 rounded-xl bg-surface-700 border border-surface-600">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                  <p className="text-sm text-slate-400">{v.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Get in Touch</h2>
            <p>
              Have a suggestion, found a bug, or want to collaborate? We&apos;d love to hear from
              you. Visit our{" "}
              <Link href="/contact" className="text-brand-400 underline hover:text-brand-300">
                Contact page
              </Link>{" "}
              or email us directly at{" "}
              <a href="mailto:hello@gofancyfont.com" className="text-brand-400 underline hover:text-brand-300">
                hello@gofancyfont.com
              </a>
              .
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-surface-600 py-6 text-center text-slate-600 text-sm mt-8">
        <p>
          © {new Date().getFullYear()} GoFancyFont.com ·{" "}
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          {" · "}
          <Link href="/about" className="hover:text-slate-400 transition-colors">About</Link>
        </p>
      </footer>
    </main>
  );
}
