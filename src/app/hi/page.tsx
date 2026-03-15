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
  title: "एस्थेटिक फ़ॉन्ट जेनरेटर | कॉपी और पेस्ट",
  description: "मुफ़्त फ़ॉन्ट जेनरेटर: अपने टेक्स्ट को Unicode शैलियों में बदलें। Instagram, TikTok और Discord के लिए कॉपी और पेस्ट करें।",
  keywords: ["फ़ॉन्ट जेनरेटर", "instagram font hindi", "aesthetic text maker india", "copy paste fonts"],
  openGraph: {
    title: "एस्थेटिक फ़ॉन्ट जेनरेटर",
    description: "सोशल मीडिया बायो के लिए 50+ मुफ्त फ़ॉन्ट शैलियाँ।",
    url: "https://gofancyfont.com/hi",
    locale: "hi_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "एस्थेटिक फ़ॉन्ट जेनरेटर" }],
  },
  alternates: { canonical: "https://gofancyfont.com/hi" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fancy Font Generator Hindi",
  description: "Convert text to unique Unicode web fonts instantly.",
  url: "https://gofancyfont.com/hi",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageHI() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">मुफ़्त उपयोग · कोई साइन अप नहीं</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">फ़ॉन्ट जेनरेटर</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">अपने इंस्टाग्राम और फेसबुक बायो को सुंदर फैंसी टेक्स्ट में बदलें।</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="hi" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="hi" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="hi" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/id" className="hover:text-ed-charcoal">Bahasa Indonesia</Link>
        </p>
      </footer>
    </main>
  );
}
