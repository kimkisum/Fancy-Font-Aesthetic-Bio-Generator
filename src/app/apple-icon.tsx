// app/apple-icon.tsx — Dynamic Apple Touch Icon via Next.js App Router + next/og
// Served automatically as /apple-icon.png, linked in <head> for iOS PWA

import { ImageResponse } from "next/og";

export const size        = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 45%, #ede9fe 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient gradient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 65% 35%, rgba(244,114,182,0.3) 0%, rgba(167,139,250,0.2) 55%, transparent 75%)",
          }}
        />

        {/* Sparkle dots */}
        <div style={{ position: "absolute", top: 24, right: 28, width: 6, height: 6, borderRadius: "50%", background: "rgba(236,72,153,0.5)" }} />
        <div style={{ position: "absolute", top: 38, left: 25, width: 3, height: 3, borderRadius: "50%", background: "rgba(192,38,211,0.4)" }} />
        <div style={{ position: "absolute", bottom: 32, right: 24, width: 4, height: 4, borderRadius: "50%", background: "rgba(167,139,250,0.5)" }} />
        <div style={{ position: "absolute", bottom: 44, left: 22, width: 3, height: 3, borderRadius: "50%", background: "rgba(244,114,182,0.35)" }} />

        {/* Main Aa mark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            position: "relative",
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 90,
              fontWeight: 900,
              color: "#c026d3",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            A
          </span>
          <span
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#ec4899",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginLeft: 2,
            }}
          >
            a
          </span>
        </div>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "rgba(192,38,211,0.4)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            gofancyfont
          </span>
        </div>

        {/* Subtle border ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(236,72,153,0.15)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
