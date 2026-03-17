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
          background: "#0a0a0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient glow background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 30%, rgba(129,96,235,0.35) 0%, rgba(219,86,167,0.15) 60%, transparent 80%)",
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
              color: "#a78bfa",
              filter: "drop-shadow(0 0 5px rgba(167,139,250,0.9))",
              letterSpacing: "-0.03em",
            }}
          >
            A
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#f472b6",
              filter: "drop-shadow(0 0 4px rgba(244,114,182,0.85))",
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
            background: "rgba(244,114,182,0.8)",
            boxShadow: "0 0 3px rgba(244,114,182,0.9)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
