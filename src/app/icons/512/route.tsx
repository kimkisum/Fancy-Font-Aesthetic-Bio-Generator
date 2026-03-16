// Route handler: dynamically generates a proper 512×512 PWA icon
// Accessible at /icons/512

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const S = 512;

  return new ImageResponse(
    (
      <div
        style={{
          width: S,
          height: S,
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
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Inner tight glow orb */}
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Sparkle — top-left */}
        <div style={{ position: "absolute", top: 62, left: 62, width: 14, height: 14, borderRadius: "50%", background: "rgba(167,139,250,0.5)" }} />
        {/* Sparkle — top-right */}
        <div style={{ position: "absolute", top: 80, right: 72, width: 8, height: 8, borderRadius: "50%", background: "rgba(167,139,250,0.35)" }} />
        {/* Sparkle — bottom-right */}
        <div style={{ position: "absolute", bottom: 74, right: 62, width: 14, height: 14, borderRadius: "50%", background: "rgba(167,139,250,0.45)" }} />
        {/* Sparkle — bottom-left */}
        <div style={{ position: "absolute", bottom: 62, left: 86, width: 8, height: 8, borderRadius: "50%", background: "rgba(167,139,250,0.3)" }} />

        {/* Main Letter F */}
        <span
          style={{
            color: "#c4b5fd",
            fontSize: 308,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            filter:
              "drop-shadow(0 0 50px rgba(167,139,250,0.95)) drop-shadow(0 0 110px rgba(139,92,246,0.5))",
          }}
        >
          F
        </span>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "rgba(167,139,250,0.5)",
              fontSize: 32,
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
            border: "3px solid rgba(139,92,246,0.18)",
          }}
        />
      </div>
    ),
    { width: S, height: S }
  );
}
