import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import BioTemplates from "@/components/BioTemplates";
import SymbolPicker from "@/components/SymbolPicker";
import SymbolLibrary from "@/components/SymbolLibrary";
import HomeContent from "@/components/HomeContent";
import FAQSection from "@/components/FAQSection";

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
    "soft girl aesthetic bio",
    "dark academia instagram bio",
    "cottagecore bio ideas",
    "y2k font generator",
    "coquette aesthetic text",
    "aesthetic bio maker for girls",
    "cute instagram bio fonts",
  ],
  openGraph: {
    title: "Fancy Font Generator — 22 Free Aesthetic Text Styles",
    description:
      "Copy-ready fancy fonts for Instagram, TikTok & Twitter bios. Bold, cursive, Gothic, vaporwave, Zalgo & 16 more. Instant, free, no login.",
    type: "website",
    url: "https://gofancyfont.com",
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
    canonical: "https://gofancyfont.com",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fancy Font Generator",
  description:
    "Free online tool to convert text into 22+ Unicode fancy font styles for social media bios.",
  url: "https://gofancyfont.com",
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

      <main className="min-h-screen bg-ed-bg text-ed-charcoal">

        {/* ── Header ──────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-ed-bg/95 backdrop-blur-sm border-b border-ed-border">
          <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif italic text-xl font-bold text-ed-charcoal tracking-tight">
                GoFancyFont
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-petal-100 text-petal-500 font-medium border border-petal-200">
                ✦ free
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-[13px] text-ed-muted">
              <a href="#templates" className="hover:text-petal-500 transition-colors duration-200">Templates</a>
              <a href="#generator" className="hover:text-petal-500 transition-colors duration-200">Generator</a>
              <a href="#symbols"   className="hover:text-petal-500 transition-colors duration-200">Symbols</a>
              <a href="#faq"       className="hover:text-petal-500 transition-colors duration-200">FAQ</a>
            </nav>
          </div>
        </header>

        {/* ── Hero ────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-ed-border">
          {/* Subtle gradient orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
                            bg-gradient-to-b from-petal-100/60 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-10 right-0 w-64 h-64
                            bg-bloom-100/40 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-5 pt-16 pb-14 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                            bg-petal-100 border border-petal-200 text-petal-500
                            text-[11px] font-semibold tracking-[0.18em] uppercase mb-7">
              ✦ 22+ Free Aesthetic Styles
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[58px] font-bold
                           tracking-tight leading-[1.1] text-ed-charcoal mb-4">
              Fancy Font
              <span className="block italic text-petal-500"> Generator</span>
            </h1>

            <p className="max-w-xl mx-auto text-ed-muted text-[15px] sm:text-base
                          leading-relaxed mb-9">
              Turn any text into{" "}
              <span className="text-ed-charcoal font-medium">bold, cursive, gothic, vaporwave</span>{" "}
              & 18 more styles. Copy instantly for your{" "}
              <span className="text-petal-500 font-medium">Instagram bio, TikTok</span>, or
              Twitter profile.
            </p>

            {/* Font preview chips */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {[
                { label: "𝒞𝓊𝓇𝓈𝒾𝓋𝑒",   color: "bg-petal-100 text-petal-600 border-petal-200" },
                { label: "𝐁𝐨𝐥𝐝",         color: "bg-bloom-100 text-bloom-500 border-bloom-200" },
                { label: "𝔊𝔬𝔱𝔥𝔦𝔠",       color: "bg-amber-50 text-amber-700 border-amber-200" },
                { label: "Ａｅｓｔｈｅｔｉｃ",   color: "bg-sky-50 text-sky-600 border-sky-200" },
                { label: "Ⓒⓘⓡⓒⓛⓔⓓ",     color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
                { label: "ᴅᴏᴜʙʟᴇ ꜱᴛʀᴜᴄᴋ", color: "bg-petal-50 text-petal-500 border-petal-200" },
              ].map((s) => (
                <span
                  key={s.label}
                  className={`px-3.5 py-1.5 rounded-full border text-[13px] font-medium ${s.color}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bio Templates ────────────────────────────────── */}
        <section id="templates" className="py-2">
          <BioTemplates />
        </section>

        {/* ── Generator ────────────────────────────────────── */}
        <section id="generator" className="pb-4">
          <Generator />
        </section>

        {/* ── Symbol Picker ─────────────────────────────────── */}
        <section id="symbols" className="pb-2">
          <SymbolPicker />
        </section>

        {/* ── Symbol Library ───────────────────────────────── */}
        <section id="library" className="pb-16">
          <SymbolLibrary />
        </section>

        {/* ── Why section ──────────────────────────────────── */}
        <section id="styles" className="border-t border-ed-border bg-white py-16">
          <div className="max-w-5xl mx-auto px-5">
            <p className="text-[11px] font-semibold text-petal-400 tracking-[0.2em] uppercase text-center mb-2">
              Why GoFancyFont
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-ed-charcoal mb-2">
              Made for aesthetic creators
            </h2>
            <p className="text-ed-muted text-sm text-center mb-10 max-w-md mx-auto">
              The fastest, cleanest fancy text tool — built for your vibe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "⚡", title: "Instant Preview",   desc: "All 22 styles update as you type. Zero delay, zero friction." },
                { icon: "📋", title: "One-Click Copy",     desc: "Hit Copy — it's on your clipboard. Paste on Instagram, TikTok, Discord." },
                { icon: "🔒", title: "No Sign-Up Ever",   desc: "100% free, forever. No account, no email, no tracking." },
                { icon: "🌐", title: "Works Everywhere",  desc: "Unicode fonts work on iOS, Android, PC & Mac — no app needed." },
                { icon: "🎀", title: "22+ Cute Styles",   desc: "Soft cursive to chaotic Zalgo — find the perfect aesthetic." },
                { icon: "📱", title: "Mobile First",      desc: "Designed for scrolling on your phone. Type and copy on the go." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-2xl bg-ed-bg border border-ed-border hover:border-petal-200 transition-colors duration-200"
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-ed-charcoal mb-1 text-[15px]">{f.title}</h3>
                  <p className="text-sm text-ed-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section id="faq" className="py-16 border-t border-ed-border bg-ed-bg">
          <div className="max-w-3xl mx-auto px-5">
            <p className="text-[11px] font-semibold text-petal-400 tracking-[0.2em] uppercase text-center mb-2">
              FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-ed-charcoal mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
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
                  className="group bg-white border border-ed-border rounded-2xl overflow-hidden
                             hover:border-petal-200 transition-colors duration-200"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer
                                       font-medium text-ed-charcoal text-[15px] list-none select-none
                                       hover:text-petal-500 transition-colors">
                    {item.q}
                    <span className="text-petal-300 group-open:rotate-180 transition-transform duration-200 ml-4 shrink-0">
                      ▾
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-ed-muted text-sm leading-relaxed
                                border-t border-ed-borderLight pt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Article ──────────────────────────────────── */}
        <HomeContent />
        <FAQSection />

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className="border-t border-ed-border bg-white py-10 text-center space-y-3">
          <p className="font-serif italic text-ed-charcoal font-semibold text-lg">
            GoFancyFont
          </p>
          <p className="text-ed-muted text-[13px]">
            © {new Date().getFullYear()} GoFancyFont.com — Free Fancy Font & Aesthetic Bio Generator
          </p>
          <p className="flex justify-center gap-5 flex-wrap text-[13px] text-ed-muted">
            <Link href="/guide"   className="hover:text-petal-500 transition-colors">Guide</Link>
            <Link href="/about"   className="hover:text-petal-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-petal-500 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-petal-500 transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-petal-500 transition-colors">Terms</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
