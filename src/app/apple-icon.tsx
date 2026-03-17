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
          background: "#0a0a0f",
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
              "radial-gradient(ellipse at 60% 30%, rgba(129,96,235,0.4) 0%, rgba(219,86,167,0.2) 55%, transparent 75%)",
          }}
        />

        {/* Bottom ambient glow */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 140,
            height: 80,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Sparkle dots */}
        <div style={{ position: "absolute", top: 24, right: 28, width: 6, height: 6, borderRadius: "50%", background: "rgba(244,114,182,0.75)", boxShadow: "0 0 6px rgba(244,114,182,0.9)" }} />
        <div style={{ position: "absolute", top: 38, left: 25, width: 3, height: 3, borderRadius: "50%", background: "rgba(167,139,250,0.6)" }} />
        <div style={{ position: "absolute", bottom: 32, right: 24, width: 4, height: 4, borderRadius: "50%", background: "rgba(167,139,250,0.55)", boxShadow: "0 0 4px rgba(167,139,250,0.8)" }} />
        <div style={{ position: "absolute", bottom: 44, left: 22, width: 3, height: 3, borderRadius: "50%", background: "rgba(244,114,182,0.4)" }} />

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
              color: "#a78bfa",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              filter:
                "drop-shadow(0 0 16px rgba(167,139,250,0.95)) drop-shadow(0 0 40px rgba(139,92,246,0.55))",
            }}
          >
            A
          </span>
          <span
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#f472b6",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginLeft: 2,
              filter:
                "drop-shadow(0 0 12px rgba(244,114,182,0.9)) drop-shadow(0 0 30px rgba(236,72,153,0.5))",
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
              color: "rgba(167,139,250,0.45)",
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
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
