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
  title: "Generador de Fuentes Aesthetic y Biografías | Copiar y Pegar",
  description:
    "Generador de fuentes aesthetic gratis: convierte texto en más de 50 estilos Unicode. Copia y pega fuentes para Instagram, TikTok y Discord.",
  keywords: [
    "generador de letras",
    "fuentes para instagram",
    "letras aesthetic",
    "copiar y pegar letras",
    "fuentes para discord",
    "letras raras",
  ],
  openGraph: {
    title: "Generador de Fuentes Aesthetic | Copiar y Pegar",
    description:
      "Herramienta gratuita para crear texto elegante para tus perfiles de redes sociales. Previsualiza más de 50 estilos en vivo.",
    type: "website",
    url: "https://gofancyfont.com/es",
    siteName: "Fancy Font Generator ES",
    locale: "es",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Generador de Fuentes Aesthetic" }],
  },
  alternates: {
    canonical: "https://gofancyfont.com/es",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Generador de Fuentes Aesthetic",
  description: "Crea texto elegante y biografías aesthetic gratis con más de 50 estilos Unicode.",
  url: "https://gofancyfont.com/es",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageES() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">
          50+ Estilos Gratis · Sin Registro
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">
          Generador de Fuentes
        </h1>

        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Transforma cualquier texto en <strong className="text-ed-charcoal font-medium">50+ estilos únicos</strong> — 
          negrita, cursiva, gótica y decoraciones lindas. Copia y pega al instante para Instagram, TikTok o Discord.
        </p>
      </section>

      <section id="generator" className="pb-4">
        <Generator lang="es" />
      </section>

      <section id="templates" className="pb-4">
        <BioTemplates lang="es" />
      </section>

      <section id="symbols" className="pb-2">
        <SymbolPicker />
      </section>

      <section id="library" className="pb-16">
        <SymbolLibrary />
      </section>

      <HomeContent lang="es" />
      <FAQSection />

      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal transition-colors">English (EN)</Link>
          <Link href="/pt" className="hover:text-ed-charcoal transition-colors">Português (PT)</Link>
          <Link href="/ja" className="hover:text-ed-charcoal transition-colors">日本語 (JA)</Link>
        </p>
      </footer>
    </main>
  );
}
