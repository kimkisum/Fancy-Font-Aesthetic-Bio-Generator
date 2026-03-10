import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";

export const metadata: Metadata = {
  title: "Fancy Font Generator & Aesthetic Bio Maker — 22 Styles",
  description:
    "Transform plain text into 22+ fancy Unicode fonts instantly. Bold, italic, cursive, Gothic, aesthetic vaporwave, Zalgo glitch & more. Perfect for Instagram bios, TikTok profiles, Twitter, Discord — no sign-up needed.",
  keywords: [
    "fancy font generator",
    "aesthetic text maker",
    "instagram bio fonts",
    "unicode font converter",
    "cool text generator",
    "cursive text generator",
    "bold text generator",
    "aesthetic bio generator",
    "tiktok bio fonts",
    "twitter fonts",
    "discord fonts",
    "vaporwave text",
    "zalgo text generator",
    "gothic font generator",
    "small caps generator",
  ],
  openGraph: {
    title: "Fancy Font Generator — 22 Free Aesthetic Text Styles",
    description:
      "Copy-ready fancy fonts for Instagram, TikTok & Twitter bios. Bold, cursive, Gothic, vaporwave, Zalgo & 16 more. Instant, free, no login.",
    type: "website",
    url: "https://fancyfont.io",
    siteName: "Fancy Font Generator",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fancy Font & Aesthetic Bio Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Font Generator — 22 Aesthetic Text Styles",
    description:
      "Instantly convert text into bold, cursive, aesthetic, Gothic & Zalgo fonts. Free for Instagram, TikTok & Twitter bios.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fancyfont.io",
  },
  robots: "index, follow",
};

// ── Structured Data ────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fancy Font Generator",
  description:
    "Free online tool to convert text into 22+ Unicode fancy font styles for social media bios.",
  url: "https://fancyfont.io",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-surface-900 text-white">
        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="border-b border-surface-600 bg-surface-800/60 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span className="font-bold text-lg tracking-tight">
                Fancy<span className="text-brand-400">Font</span>
              </span>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
              <a href="#generator" className="hover:text-white transition-colors">Generator</a>
              <a href="#styles"    className="hover:text-white transition-colors">Styles</a>
              <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
        </header>

        {/* ── Hero Section ─────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                            bg-brand-500/10 blur-[100px] rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                            bg-brand-500/10 border border-brand-500/20 text-brand-400
                            text-xs font-medium tracking-widest uppercase mb-6">
              ✨ 22 Free Font Styles
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight
                           bg-gradient-to-br from-white via-slate-200 to-slate-400
                           bg-clip-text text-transparent mb-4 leading-tight">
              Fancy Font Generator
              <br />
              <span className="text-2xl sm:text-3xl font-medium text-brand-400">
                & Aesthetic Bio Maker
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              Transform any text into{" "}
              <strong className="text-slate-200">22+ unique Unicode font styles</strong> — Bold,
              Cursive, Gothic, Vaporwave, Zalgo Glitch & more. Copy instantly for your{" "}
              <strong className="text-slate-200">Instagram bio, TikTok, Twitter,</strong> or
              Discord profile.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-500">
              {["𝐁𝐨𝐥𝐝", "𝒞𝓊𝓇𝓈𝒾𝓋𝑒", "𝔊𝔬𝔱𝔥𝔦𝔠", "Ａｅｓｔｈｅｔｉｃ", "Z̷a̷l̷g̷o̷", "Ⓒⓘⓡⓒⓛⓔⓓ", "ᴅᴏᴜʙʟᴇ sᴛʀᴜᴄᴋ"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-surface-700 border border-surface-500 text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Generator ────────────────────────────────────── */}
        <section id="generator" className="pb-16">
          <Generator />
        </section>

        {/* ── Feature Cards ────────────────────────────────── */}
        <section id="styles" className="border-t border-surface-600 bg-surface-800/40 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-2">
              Why Use Fancy Font Generator?
            </h2>
            <p className="text-slate-400 text-center mb-10 text-sm">
              The fastest, cleanest fancy text tool on the web.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "⚡",
                  title: "Instant Preview",
                  desc: "See all 22 styles update in real-time as you type. Zero delay.",
                },
                {
                  icon: "📋",
                  title: "One-Click Copy",
                  desc: "Hit Copy and it's on your clipboard. Paste anywhere — Instagram, TikTok, Discord.",
                },
                {
                  icon: "🔒",
                  title: "No Sign-Up",
                  desc: "Completely free, forever. No account, no email, no tracking.",
                },
                {
                  icon: "🌐",
                  title: "Works Everywhere",
                  desc: "Unicode fonts work on every platform: iOS, Android, PC, Mac.",
                },
                {
                  icon: "🎨",
                  title: "22+ Styles",
                  desc: "From elegant cursive to chaotic Zalgo — there's a style for every mood.",
                },
                {
                  icon: "📱",
                  title: "Mobile-Friendly",
                  desc: "Perfectly optimized for smartphone use. Type and copy on the go.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-xl bg-surface-700 border border-surface-600"
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section id="faq" className="py-16 border-t border-surface-600">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "How does the fancy font generator work?",
                  a: "It maps standard ASCII letters to Unicode mathematical and decorative character ranges, producing visually distinct text that works on any platform that supports Unicode.",
                },
                {
                  q: "Do these fonts work on Instagram?",
                  a: "Yes. Instagram, TikTok, Twitter/X, Facebook, Discord, YouTube, WhatsApp, and most modern apps all support Unicode text, so these styles copy and paste perfectly.",
                },
                {
                  q: "Is it free?",
                  a: "100% free, no sign-up required, and there's no limit on how many times you can use it.",
                },
                {
                  q: "Why doesn't the font show on some apps?",
                  a: "A small number of older or specialized apps may not render all Unicode ranges. For maximum compatibility, the Bold, Italic, and Aesthetic styles have the broadest support.",
                },
                {
                  q: "What is a Zalgo / Glitch font?",
                  a: "Zalgo text uses Unicode combining diacritical marks stacked above and below letters to create a corrupted, horror-style effect. It's supported everywhere but may look different across operating systems.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-surface-700 border border-surface-600 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer
                                       font-medium text-white list-none select-none
                                       hover:bg-surface-600 transition-colors">
                    {item.q}
                    <span className="text-slate-500 group-open:rotate-180 transition-transform duration-200 ml-4">
                      ▾
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-surface-500 pt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className="border-t border-surface-600 py-8 text-center text-slate-600 text-sm space-y-2">
          <p>© {new Date().getFullYear()} FancyFont.io — Free Fancy Font & Aesthetic Bio Generator</p>
          <p className="flex justify-center gap-4 flex-wrap">
            <Link href="/guide"   className="hover:text-slate-400 transition-colors">Guide</Link>
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
