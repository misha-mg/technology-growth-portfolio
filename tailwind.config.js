/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      display: ["Optima", "var(--font-inter)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        border: "#e5e5e5",
        ring: "#a1a1a1",
        background: "#ffffff",
        foreground: "#0a0a0a",
        primary: {
          DEFAULT: "#071c35",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#0a0a0a",
        },
        destructive: {
          DEFAULT: "#e40014",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        gray: {
          50: "#f9fafb",
          200: "#e5e7eb",
          300: "#d1d5dc",
          400: "#99a1af",
          500: "#6a7282",
          600: "#4a5565",
          700: "#364153",
          800: "#1e2939",
          900: "#101828",
        },
        chart: {
          1: "#f05100",
          2: "#009588",
          3: "#104e64",
          4: "#fcbb00",
          5: "#f99c00",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        container: "1294px",
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.625rem",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-to-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--marquee-duration, 28s) linear infinite",
        "slide-in-from-left":
          "slide-in-from-left 0.4s cubic-bezier(0.32, 0.72, 0, 1) both",
        "slide-out-to-left":
          "slide-out-to-left 0.35s cubic-bezier(0.32, 0.72, 0, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};

