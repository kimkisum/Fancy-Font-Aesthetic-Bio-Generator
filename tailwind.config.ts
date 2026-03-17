import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        // ── Feminine rose palette ───────────────────────────────
        petal: {
          50:  "#FEF5F8",
          100: "#FDE8EF",
          200: "#FAC8D8",
          300: "#F4A0BB",
          400: "#E07898",
          500: "#C96B8A",
          600: "#A84D6E",
        },
        // ── Soft lavender accent ────────────────────────────────
        bloom: {
          50:  "#F8F4FD",
          100: "#F0E8FB",
          200: "#DCC8F5",
          300: "#C2A2EC",
          400: "#A07FD6",
          500: "#8060C0",
        },
        // ── Warm neutrals ───────────────────────────────────────
        ed: {
          bg:           "#FDF7F9",
          surface:      "#FFFFFF",
          surfaceMuted: "#FFF9FB",
          charcoal:     "#2D1F26",
          muted:        "#9E7E88",
          border:       "#F0D8E2",
          borderLight:  "#F7ECF1",
          sage:         "#A8B88A",
          sageMuted:    "#C4D4A4",
          sand:         "#F0E4EA",
          sandLight:    "#F8F0F4",
        },
        /* Keep surface/brand tokens for locale sub-pages */
        surface: {
          900: "#0a0a0f",
          800: "#111118",
          700: "#1a1a24",
          600: "#22222f",
          500: "#2e2e3e",
        },
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      keyframes: {
        "toast-in": {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "toast-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "toast-in": "toast-in 0.2s ease-out forwards",
        "toast-out": "toast-out 0.2s ease-in forwards",
      },
    },
  },
  plugins: [],
};

export default config;
