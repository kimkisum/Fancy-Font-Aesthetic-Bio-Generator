import { MetadataRoute } from "next";

const SLUG_DATA = [
  "instagram-fonts",
  "discord-text-generator",
  "tiktok-bio-maker",
  "cursed-text-generator",
  "cute-aesthetic-fonts",
  "gothic-font-generator",
  "cursive-text-generator",
  "vaporwave-text-generator",
  "bold-text-generator",
  "cool-text-generator",
  "gaming-username-generator",
  "aesthetic-bio-generator",
  "copy-paste-fonts",
  "small-caps-generator",
  "zalgo-text-generator",
  "unicode-text-converter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gofancyfont.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/guide",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicRoutes: MetadataRoute.Sitemap = SLUG_DATA.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
