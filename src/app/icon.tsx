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
          borderRadius: 7,
          background: "linear-gradient(145deg, #0f172a, #1e1b4b)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Glow halo behind F */}
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.55) 0%, transparent 70%)",
          }}
        />

        {/* Letter F */}
        <span
          style={{
            color: "#c4b5fd",
            fontSize: 21,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            // Satori supports a single box-shadow-like text glow via filter
            filter: "drop-shadow(0 0 4px rgba(167,139,250,0.9))",
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  );
}
