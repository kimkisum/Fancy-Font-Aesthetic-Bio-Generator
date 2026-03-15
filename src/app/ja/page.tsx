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
  title: "おしゃれ特殊文字＆絵文字ジェネレーター | コピー＆ペースト",
  description:
    "無料のおしゃれ特殊文字ジェネレーター：テキストを50以上のUnicodeスタイルに変換。インスタ、TikTok、Discordでコピペして使えます。",
  keywords: [
    "特殊文字",
    "かわいいフォント",
    "インスタ フォント",
    "文字ジェネレーター",
    "コピーペースト",
    "ゲーム名 フォント",
  ],
  openGraph: {
    title: "おしゃれ特殊文字ジェネレーター | コピー＆ペースト",
    description:
      "SNSのプロフィールを彩るおしゃれな文字を簡単に作成できる無料ツール。50種類以上のスタイル。",
    type: "website",
    url: "https://gofancyfont.com/ja",
    siteName: "Fancy Font Generator JA",
    locale: "ja",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "おしゃれ特殊文字ジェネレーター" }],
  },
  alternates: {
    canonical: "https://gofancyfont.com/ja",
  },
  robots: "index, follow",
};

export default function HomePageJA() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <Header />

      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">
          50種類以上無料 · 登録不要
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">
          特殊文字ジェネレーター
        </h1>

        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          テキストを<strong className="text-ed-charcoal font-medium">50種類以上のユニークなスタイル</strong>（太字、筆記体、ゴシック体、可愛い装飾など）に変換します。Instagram、TikTok、Discordですぐにコピペして使えます。
        </p>
      </section>

      <section id="generator" className="pb-4">
        <Generator lang="ja" />
      </section>

      <section id="templates" className="pb-4">
        <BioTemplates lang="ja" />
      </section>

      <section id="symbols" className="pb-2">
        <SymbolPicker />
      </section>

      <section id="library" className="pb-16">
        <SymbolLibrary />
      </section>

      <HomeContent lang="ja" />
      <FAQSection />

      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal transition-colors">English (EN)</Link>
          <Link href="/es" className="hover:text-ed-charcoal transition-colors">Español (ES)</Link>
          <Link href="/pt" className="hover:text-ed-charcoal transition-colors">Português (PT)</Link>
        </p>
      </footer>
    </main>
  );
}
