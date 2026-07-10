import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        blushSoft: "rgb(var(--color-blush-soft) / <alpha-value>)",
        burgundy: "rgb(var(--color-burgundy) / <alpha-value>)",
        burgundySoft: "rgb(var(--color-burgundy-soft) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)"
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)"
      },
      borderRadius: {
        card: "var(--radius-card)",
        control: "var(--radius-control)"
      }
    }
  },
  plugins: []
};

export default config;
