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
  title: "花式字体与美学文案生成器 | 在线复制粘贴",
  description: "在线花体字与文案生成器，一键转化普通文本为美丽的Unicode字符，适用于微信、Instagram、TikTok和微博。",
  keywords: ["花体字生成器", "社交媒体字体", "instagram字体", "复制粘贴字体", "昵称生成器", "漂亮文字"],
  openGraph: {
    title: "花式字体生成器",
    description: "免费复制粘贴美观字体。",
    url: "https://gofancyfont.com/zh",
    locale: "zh_CN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "花式字体生成器" }],
  },
  alternates: { canonical: "https://gofancyfont.com/zh" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "花式字体生成器 (Fancy Font Generator)",
  description: "完全免费的网页应用程序，用于将文本转换为50多种精美Unicode样式。",
  url: "https://gofancyfont.com/zh",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
};

export default function HomePageZH() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">完全免费 · 无广告打扰</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">花式字体生成器</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">立刻转换你的社交媒体昵称与文案，让你的朋友圈和主页与众不同。</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="zh" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="zh" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="zh" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/ja" className="hover:text-ed-charcoal">日本語</Link>
          <Link href="/ko" className="hover:text-ed-charcoal">한국어</Link>
        </p>
      </footer>
    </main>
  );
}
