// app/og/route.tsx — Dynamic OG Image via next/og ImageResponse
// Usage: /og?title=Instagram+Fonts

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawTitle = searchParams.get("title") ?? "Fancy Font Generator";

  // Truncate to avoid overflow
  const title =
    rawTitle.length > 60 ? rawTitle.slice(0, 57) + "…" : rawTitle;

  const subtitle = "22+ Unicode Styles · Instant Copy & Paste · Free";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 18px",
            borderRadius: "999px",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.35)",
            marginBottom: "28px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#a78bfa", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ✦  GoFancyFont.com
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: title.length > 35 ? "52px" : "64px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "960px",
            padding: "0 40px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        {/* Decorative font samples */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "28px",
            marginBottom: "28px",
          }}
        >
          {["𝓕𝓪𝓷𝓬𝔂", "𝔽𝕠𝕟𝕥𝕤", "Ｆｏｎｔｓ", "𝕱𝖔𝖓𝖙𝖘"].map((sample) => (
            <span
              key={sample}
              style={{
                fontSize: "26px",
                color: "rgba(167,139,250,0.7)",
                fontWeight: 400,
              }}
            >
              {sample}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(148,163,184,0.9)",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom domain bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "56px",
            background: "rgba(139,92,246,0.12)",
            borderTop: "1px solid rgba(139,92,246,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {["Instagram Fonts", "TikTok Bio", "Discord Fonts", "Cursive Text", "Zalgo"].map((tag) => (
            <span key={tag} style={{ fontSize: "14px", color: "rgba(148,163,184,0.6)", letterSpacing: "0.05em" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
