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
        ed: {
          bg: "#FAF9F6",
          surface: "#FFFFFF",
          surfaceMuted: "#FDFDFD",
          charcoal: "#2C2C2C",
          muted: "#8E8E8E",
          border: "#EAEAEA",
          borderLight: "#F0F0EE",
          sage: "#C1CFA1",
          sageMuted: "#D8E2C0",
          sand: "#E5E0D8",
          sandLight: "#F0ECE6",
        },
        /* Keep surface tokens for sub-pages that still use the dark theme */
        surface: {
          900: "#0a0a0f",
          800: "#111118",
          700: "#1a1a24",
          600: "#22222f",
          500: "#2e2e3e",
        },
        brand: {
          50: "#f0f9ff",
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
