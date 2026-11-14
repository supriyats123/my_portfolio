/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // Colors read the RGB-channel variables from app/globals.css, so opacity
      // utilities (bg-bg/85, border-fg/10, text-fg-muted/80) work in both themes.
      colors: {
        brgray: "rgb(var(--rgb-btn-light-bg) / <alpha-value>)",
        brblue: "rgb(var(--rgb-accent) / <alpha-value>)",
        bg: "rgb(var(--rgb-bg) / <alpha-value>)",
        "bg-alt": "rgb(var(--rgb-bg-alt) / <alpha-value>)",
        fg: "rgb(var(--rgb-text) / <alpha-value>)",
        "fg-muted": "rgb(var(--rgb-text-muted) / <alpha-value>)",
        "fg-subtle": "rgb(var(--rgb-text-subtle) / <alpha-value>)",
        accent: "rgb(var(--rgb-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--rgb-accent-soft) / <alpha-value>)",
        "theme-border": "rgb(var(--rgb-border) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", "sans-serif"],
      Inter: ["var(--font-inter)", "Inter", "sans-serif"],
      Aeonik: ["var(--font-inter)", "Inter", "sans-serif"],
      AeonikBold: ["var(--font-inter)", "Inter", "sans-serif"],
      AeonikMedium: ["var(--font-inter)", "Inter", "sans-serif"],
    },
  },
  plugins: [],
};
