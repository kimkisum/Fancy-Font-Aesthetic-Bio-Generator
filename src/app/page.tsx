import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import BioTemplates from "@/components/BioTemplates";
import SymbolPicker from "@/components/SymbolPicker";
import SymbolLibrary from "@/components/SymbolLibrary";
import HomeContent from "@/components/HomeContent";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Fancy Font Generator | 50+ Best Copy & Paste Bio Fonts",
  description:
    "Free fancy font generator: instantly convert plain text into 50+ aesthetic Unicode styles. Copy and paste bold, cursive, Gothic, and Coquette fonts for Instagram, TikTok, and Discord bios.",
  keywords: [
    "fancy font generator",
    "aesthetic text maker",
    "instagram bio fonts",
    "copy and paste fonts",
    "fancy text generator",
    "unicode font converter",
    "cursive text generator",
    "bold text generator",
    "tiktok bio fonts",
    "discord fonts",
    "vaporwave text",
    "coquette aesthetic",
  ],
  openGraph: {
    title: "Fancy Font Generator | Best Aesthetic Text Styles",
    description:
      "A free online tool to create fancy text for your social media bios. Preview 50+ styles live in our Instagram and TikTok UI simulator.",
    type: "website",
    url: "https://gofancyfont.com",
    siteName: "Fancy Font Generator",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fancy Font Generator - Copy & Paste Aesthetic Text",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Font Generator | Aesthetic Copy & Paste Fonts",
    description:
      "Instantly convert text into bold, cursive, aesthetic, Gothic, Coquette & Zalgo fonts. Free for Instagram, TikTok & Twitter bios.",
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
    "A free online WebApplication that converts plain text into 50+ aesthetic Unicode formats (bold, cursive, Gothic). Users can preview and copy/paste the generated text into social media profiles like Instagram and TikTok.",
  url: "https://gofancyfont.com",
  applicationCategory: "DesignApplication, UtilitiesApplication",
  operatingSystem: "Windows, macOS, iOS, Android, web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "50+ Free Unicode Font Styles",
    "Smart Auto-Sorting for Favorite Fonts",
    "Live Instagram and TikTok Profile Previews",
    "One-click Copy and Paste functionality",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-ed-bg text-ed-charcoal">
        <Header />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
          <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">
            50+ Free Styles · No Sign-Up
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight
                         text-ed-charcoal mb-3 leading-[1.15]">
            Fancy Font Generator
          </h1>

          <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
            Transform any text into <strong className="text-ed-charcoal font-medium">50+ unique styles</strong> — 
            bold, cursive, Gothic, vaporwave, and cute decorations.
            Copy and paste instantly for Instagram, TikTok, or Discord.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[13px]">
            {["𝐁𝐨𝐥𝐝", "𝒞𝓊𝓇𝓈𝒾𝓋𝑒", "𝔊𝔬𝔱𝔥𝔦𝔠", "Ａｅｓｔｈ", "ˢᵘᵖᵉʳ"].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-md border border-ed-border text-ed-charcoal bg-white"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── Generator ────────────────────────────────────── */}
        <section id="generator" className="pb-4">
          <Generator />
        </section>

        {/* ── Templates ────────────────────────────────────── */}
        <section id="templates" className="pb-4">
          <BioTemplates />
        </section>

        {/* ── Symbols ──────────────────────────────────────── */}
        <section id="symbols" className="pb-2">
          <SymbolPicker />
        </section>

        <section id="library" className="pb-16">
          <SymbolLibrary />
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section className="border-t border-ed-border py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-xl font-serif font-bold text-center mb-8 text-ed-charcoal">
              Why GoFancyFont?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  title: "Instant Preview",
                  desc: "All 50+ styles update as you type. Zero delay.",
                },
                {
                  title: "One-Click Copy",
                  desc: "Hit Copy and paste anywhere — Instagram, TikTok, Discord.",
                },
                {
                  title: "No Sign-Up",
                  desc: "Completely free, forever. No account required.",
                },
                {
                  title: "Works Everywhere",
                  desc: "Unicode fonts work on every platform and device.",
                },
                {
                  title: "50+ Styles",
                  desc: "From cursive to Zalgo — with cute decoration styles.",
                },
                {
                  title: "Mobile-First",
                  desc: "Designed for comfortable phone browsing.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-xl bg-white border border-ed-border"
                >
                  <h3 className="font-medium text-ed-charcoal text-[14px] mb-1">{f.title}</h3>
                  <p className="text-[13px] text-ed-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeContent />
        <FAQSection />

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
          <p>© {new Date().getFullYear()} GoFancyFont.com</p>
          <p className="flex justify-center gap-5 flex-wrap">
            <Link href="/guide"   className="hover:text-ed-charcoal transition-colors">Guide</Link>
            <Link href="/about"   className="hover:text-ed-charcoal transition-colors">About</Link>
            <Link href="/contact" className="hover:text-ed-charcoal transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-ed-charcoal transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-ed-charcoal transition-colors">Terms</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
