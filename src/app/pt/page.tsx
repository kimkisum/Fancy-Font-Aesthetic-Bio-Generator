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
  title: "Gerador de Fontes Aesthetic e Bios | Copiar e Colar",
  description:
    "Gerador de fontes aesthetic grátis: converta texto em mais de 50 estilos Unicode. Copie e cole fontes para Instagram, TikTok e Discord.",
  keywords: [
    "gerador de letras",
    "fontes para instagram",
    "letras aesthetic",
    "copiar e colar letras",
    "fontes para discord",
    "letras diferentes",
  ],
  openGraph: {
    title: "Gerador de Fontes Aesthetic | Copiar e Colar",
    description:
      "Ferramenta gratuita para criar texto elegante para seus perfis de redes sociais. Teste mais de 50 estilos.",
    type: "website",
    url: "https://gofancyfont.com/pt",
    siteName: "Fancy Font Generator PT",
    locale: "pt",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gerador de Fontes Aesthetic" }],
  },
  alternates: {
    canonical: "https://gofancyfont.com/pt",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gerador de Fontes Aesthetic",
  description: "Crie texto elegante para seus perfis de redes sociais com estilos grátis e rápidos.",
  url: "https://gofancyfont.com/pt",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePagePT() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">
          50+ Estilos Grátis · Sem Cadastro
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">
          Gerador de Fontes
        </h1>

        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Transforme qualquer texto em <strong className="text-ed-charcoal font-medium">50+ estilos únicos</strong> — 
          negrito, cursiva, gótico e decorações fofas. Copie e cole instantaneamente para Instagram, TikTok ou Discord.
        </p>
      </section>

      <section id="generator" className="pb-4">
        <Generator lang="pt" />
      </section>

      <section id="templates" className="pb-4">
        <BioTemplates lang="pt" />
      </section>

      <section id="symbols" className="pb-2">
        <SymbolPicker />
      </section>

      <section id="library" className="pb-16">
        <SymbolLibrary />
      </section>

      <HomeContent lang="pt" />
      <FAQSection />

      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal transition-colors">English (EN)</Link>
          <Link href="/es" className="hover:text-ed-charcoal transition-colors">Español (ES)</Link>
          <Link href="/ja" className="hover:text-ed-charcoal transition-colors">日本語 (JA)</Link>
        </p>
      </footer>
    </main>
  );
}
