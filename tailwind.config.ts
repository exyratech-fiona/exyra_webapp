import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        exyra: {
          bg:        "#060e1e",
          card:      "#0b1a32",
          "card-alt":"#0f2040",
          cyan:      "#00bcd4",
          blue:      "#1457d6",
          "deep-blue":"#1457d6",
          violet:    "#8b5cf6",
          text:      "#e2eaf6",
          muted:     "#7a92b4",
          dim:       "#4a627e",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-display)", "sans-serif"],
        sora:     ["var(--font-sans)",     "sans-serif"],
        exo2:     ["var(--font-sans)",     "sans-serif"],
        sans:     ["var(--font-sans)",     "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "exyra-grad":
          "linear-gradient(90deg,#00bcd4 0%,#1457d6 35%,#1457d6 70%,#8b5cf6 100%)",
        "exyra-diag":
          "linear-gradient(135deg,#00bcd4 0%,#1457d6 40%,#1457d6 75%,#8b5cf6 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%,rgba(0,209,255,0.12),transparent)",
        "card-radial":
          "radial-gradient(ellipse at top left,rgba(0,209,255,0.06),transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(0,209,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,209,255,0.04) 1px,transparent 1px)",
      },
      boxShadow: {
        "neon-cyan":   "0 0 20px rgba(0,209,255,0.5), 0 0 40px rgba(0,209,255,0.2)",
        "neon-blue":   "0 0 20px rgba(0,123,255,0.5), 0 0 40px rgba(0,123,255,0.2)",
        "neon-violet": "0 0 20px rgba(91,0,255,0.5),  0 0 40px rgba(91,0,255,0.2)",
        "card":        "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,209,255,0.08)",
        "card-hover":  "0 16px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(0,209,255,0.15)",
      },
      animation: {
        "float":         "float 6s ease-in-out infinite",
        "pulse-glow":    "pulse-glow 3s ease-in-out infinite",
        "rotate-slow":   "rotate-slow 20s linear infinite",
        "marquee":       "marquee 30s linear infinite",
        "shimmer":       "shimmer 3s linear infinite",
        "border-flow":   "border-flow 4s ease infinite",
        "spin-slow":     "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,209,255,0.3)" },
          "50%":     { boxShadow: "0 0 50px rgba(0,209,255,0.8), 0 0 80px rgba(91,0,255,0.3)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "border-flow": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
