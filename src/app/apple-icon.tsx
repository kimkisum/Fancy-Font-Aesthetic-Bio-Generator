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
          background: "linear-gradient(145deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Outer ambient glow */}
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Inner tight glow orb */}
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Sparkle dots — top-left */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 22,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.5)",
          }}
        />
        {/* Sparkle dots — top-right */}
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 25,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.35)",
          }}
        />
        {/* Sparkle dots — bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 26,
            right: 22,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.45)",
          }}
        />
        {/* Sparkle dots — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 30,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.3)",
          }}
        />

        {/* Main Letter F */}
        <span
          style={{
            color: "#c4b5fd",
            fontSize: 108,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            filter:
              "drop-shadow(0 0 18px rgba(167,139,250,0.95)) drop-shadow(0 0 40px rgba(139,92,246,0.5))",
          }}
        >
          F
        </span>

        {/* Bottom label: gofancyfont */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <span
            style={{
              color: "rgba(167,139,250,0.5)",
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
            borderRadius: 0,
            border: "1px solid rgba(139,92,246,0.18)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
