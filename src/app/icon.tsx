// app/icon.tsx — Dynamic Favicon via Next.js App Router + next/og
// Served automatically as /favicon.ico and <link rel="icon">

import { ImageResponse } from "next/og";

export const size        = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #ede9fe 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft glow background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 65% 35%, rgba(244,114,182,0.25) 0%, rgba(167,139,250,0.15) 60%, transparent 85%)",
          }}
        />

        {/* Aa text mark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
            position: "relative",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 900,
              color: "#c026d3",
              letterSpacing: "-0.03em",
            }}
          >
            A
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#ec4899",
              letterSpacing: "-0.02em",
              marginLeft: 1,
            }}
          >
            a
          </span>
        </div>

        {/* Sparkle top-right */}
        <div
          style={{
            position: "absolute",
            top: 4,
            right: 5,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(236,72,153,0.6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
