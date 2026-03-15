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
  title: "인스타 폰트 및 프로필 특수문자 변환기 | GoFancyFont",
  description: "복사 & 붙여넣기로 바로 사용하는 50+ 예쁜 인스타 폰트. 틱톡/디스코드/게임 닉네임을 꾸며주는 무료 특수문자 생성기입니다.",
  keywords: ["인스타 폰트", "인스타 글씨체 변환", "에스테틱 폰트", "틱톡 프로필 꾸미기", "게임 닉네임", "예쁜 특수문자", "인스타 텍스트 대치"],
  openGraph: {
    title: "인스타 폰트 변환기 | GoFancyFont",
    description: "앱 설치 없는 100% 무료 인스타 프로필 글씨체 변환기입니다. 귀여운 무드, 시크한 감성 폰트를 확인하세요.",
    url: "https://gofancyfont.com/ko",
    locale: "ko_KR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "인스타 폰트 바꾸기" }],
  },
  alternates: { canonical: "https://gofancyfont.com/ko" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gofancyfont 인스타 폰트 변환기",
  description: "인스타그램, 틱톡, 디스코드에서 바로 쓸 수 있는 유니코드 글꼴 및 특수문자 무료 복사/붙여넣기 툴.",
  url: "https://gofancyfont.com/ko",
  applicationCategory: "DesignApplication",
  operatingSystem: "All",
};

export default function HomePageKO() {
  return (
    <main className="min-h-screen bg-ed-bg text-ed-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-[11px] font-medium text-ed-muted tracking-[0.2em] uppercase mb-5">앱 설치 ❌ · 로그인 ❌</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-ed-charcoal mb-3 leading-[1.15]">인스타 폰트 변환기</h1>
        <p className="text-ed-muted text-[15px] leading-relaxed max-w-lg mx-auto mb-8">내 프로필을 감성적으로 돋보이게 만들어줄 50가지 예쁜 폰트. 미리보기로 확인하고 즉시 복사하세요.</p>
      </section>
      <section id="generator" className="pb-4"><Generator lang="ko" /></section>
      <section id="templates" className="pb-4"><BioTemplates lang="ko" /></section>
      <section id="symbols" className="pb-2"><SymbolPicker /></section>
      <section id="library" className="pb-16"><SymbolLibrary /></section>
      <HomeContent lang="ko" />
      <FAQSection />
      <footer className="border-t border-ed-border py-8 text-center text-ed-muted text-[13px] space-y-2">
        <p>© {new Date().getFullYear()} GoFancyFont.com</p>
        <p className="flex justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-ed-charcoal">English</Link>
          <Link href="/ja" className="hover:text-ed-charcoal">日本語</Link>
          <Link href="/zh" className="hover:text-ed-charcoal">中文</Link>
        </p>
      </footer>
    </main>
  );
}
