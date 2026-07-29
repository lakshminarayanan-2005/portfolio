import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          950: "#07070B", // page background
          900: "#0C0C13", // section background
          800: "#14141E", // card background
          700: "#1D1D2A", // borders / dividers
        },
        ink: {
          100: "#F5F5F7", // primary text
          300: "#C3C3CE", // secondary text
          500: "#8B8B9A", // muted text
        },
        signal: {
          DEFAULT: "#7DE6C3", // terminal-green accent (compiled/success)
          dim: "#4FA88A",
        },
        accent: {
          DEFAULT: "#8B7CF6", // violet accent (in-progress / links)
          dim: "#6B5CD1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #07070B), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(600px circle at var(--x,50%) var(--y,20%), rgba(139,124,246,0.15), transparent 40%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
