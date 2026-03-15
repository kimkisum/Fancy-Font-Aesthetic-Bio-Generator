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
  title: "Pembuat Font Aesthetic Instagram | Salin dan Tempel",
  description: "Ubah teks Anda menjadi 50+ gaya font estetik dan unik. Salin dan tempel untuk bio Instagram, TikTok, dan game.",
  keywords: ["font aesthetic", "salin tempel font", "font ig aesthetic", "pembuat font", "tulisan keren"],
  openGraph: {
    title: "Pembuat Font Aesthetic",
    description: "Salin font Unicode 100% gratis.",
    url: "https://gofancyfont.com/id",
    locale: "id",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Font Aesthetic Generator" }],
  },
  alternates: { canonical: "https://gofancyfont.com/id" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pembuat Font Aesthetic",
  description: "Web app gratis untuk mengubah teks menjadi font keren.",
  url: "https://gofancyfont.com/id",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageID() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">Alat Gratis · Tanpa Berlangganan</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">Pembuat Font Aesthetic</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">Buat bio profil sosial media yang keren dan lucu. Langsung salin ke IG atau TikTok!</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="id" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="id" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="id" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/pt" className="hover:text-ed-charcoal">Português</Link>
          <Link href="/hi" className="hover:text-ed-charcoal">हिन्दी</Link>
        </p>
      </footer>
    </main>
  );
}
