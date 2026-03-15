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
  title: "Générateur de Polices Aesthetic | Copier et Coller",
  description: "Générateur gratuit de texte stylé avec 22 polices Unicode. Copiez et collez pour Instagram, TikTok et Discord.",
  keywords: ["générateur de police", "texte aesthetic", "copier coller police", "police instagram", "texte stylé"],
  openGraph: {
    title: "Générateur de Polices Aesthetic",
    description: "Créez du texte stylé avec l'aperçu Instagram.",
    url: "https://gofancyfont.com/fr",
    locale: "fr",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Générateur de Polices Aesthetic" }],
  },
  alternates: { canonical: "https://gofancyfont.com/fr" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Générateur de Polices Aesthetic",
  description: "Convertit le texte avec 22 polices Unicode pour réseaux sociaux.",
  url: "https://gofancyfont.com/fr",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageFR() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">Gratuit · Sans Inscription</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">Générateur de Polices</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">Transformez votre texte en 50+ styles uniques. Copiez et collez sur Instagram ou TikTok.</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="fr" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="fr" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="fr" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/es" className="hover:text-ed-charcoal">Español</Link>
          <Link href="/de" className="hover:text-ed-charcoal">Deutsch</Link>
        </p>
      </footer>
    </main>
  );
}
