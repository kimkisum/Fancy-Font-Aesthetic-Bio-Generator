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
  title: "Ästhetischer Schriftarten Generator | Kopieren und Einfügen",
  description: "Kostenloser Schriftart-Generator: Verwandeln Sie Text in 50+ Unicode-Stile für Instagram, TikTok und Discord.",
  keywords: ["schriftarten generator", "kopieren und einfügen", "instagram schriftart", "lustige schriften", "discord schriftarten"],
  openGraph: {
    title: "Ästhetischer Schriftarten Generator",
    description: "Kostenloses Tool, um coolen Text zu kopieren.",
    url: "https://gofancyfont.com/de",
    locale: "de",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ästhetischer Schriftarten Generator" }],
  },
  alternates: { canonical: "https://gofancyfont.com/de" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Ästhetischer Schriftarten Generator",
  description: "Wandelt Standardtext in Unicode-Stile für Instagram und TikTok um.",
  url: "https://gofancyfont.com/de",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageDE() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">Kostenlos · Ohne Anmeldung</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">Schriftarten Generator</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">Erstelle einzigartige Profil-Bios und Gamer-Namen in Sekunden. Jetzt für Instagram kopieren.</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="de" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="de" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="de" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/fr" className="hover:text-ed-charcoal">Français</Link>
          <Link href="/it" className="hover:text-ed-charcoal">Italiano</Link>
        </p>
      </footer>
    </main>
  );
}
