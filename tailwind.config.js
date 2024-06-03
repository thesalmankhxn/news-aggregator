/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "auto-min-max": "repeat(auto-fit, minmax(290px, 1fr))",
      },
      screens: {
        "4xl": { min: "1481px" },
        xxxl: { max: "1480px" },
        xxl: { max: "1280px" },
        xl: { max: "1200px" },
        lg: { max: "1080px" },
        md: { max: "980px" },
        xmd: { max: "920px" },
        xxmd: { max: "780px" },
        sm: { max: "640px" },
        xsm: { max: "540px" },
        xxsm: { max: "480px" },
        "min-sm": { min: "640px" },
        "min-xxmd": { min: "780px" },
        "min-md": { min: "980px" },
        "min-lg": { min: "1080px" },
        "min-xl": { min: "1200px" },
        "min-xxl": { min: "1280px" },
        "min-xxxl": { min: "1480px" },
        tall: { raw: "(min-height: 730px)" },
        "tall-md": { raw: "(min-height: 800px)" },
      },
      colors: {
        black: {
          1: "#141517",
          2: "#20201f",
        },
        gray: {
          1: "#d3d7e2",
          2: "#f5f7fc",
          3: "#eff0f6",
        },
        blue: {
          1: "#5167f6",
          cta: "#4054fa",
          hover: "#2c41f0",
          2: "#4a4fcb",
          3: "#5d9cf4",
          4: "#76818b",
        },
        pink: {
          1: "#d8578a",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
