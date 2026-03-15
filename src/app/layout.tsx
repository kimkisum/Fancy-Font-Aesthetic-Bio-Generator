import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gofancyfont.com"),
  verification: {
    google: "djcQHrizMenk2JPPjw2bGwMoAU1QOCnsOUrgnRH1BTU",
  },
  other: {
    "google-adsense-account": "ca-pub-4640858493582523",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GoFancyFont",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GoFancyFont" />
        <meta name="theme-color" content="#FAF9F6" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased bg-ed-bg text-ed-charcoal">
        {children}
        <ServiceWorkerRegistration />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4640858493582523"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
