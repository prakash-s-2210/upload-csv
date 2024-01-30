/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading1-bold": [
          "36px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "heading2-bold": [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "heading2-semibold": [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        "heading3-semibold": [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        "base-bold": [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "base-semibold": [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        "base-regular": [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "small-semibold": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "small-regular": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "subtle-regular": [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "tiny-regular": [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        "tiny-semibold": [
          "10px",
          {
            lineHeight: "16px",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        light: "#fff",
        dark: "#000",
        text: "#030229",
        primary: "#605BFF",
        "secondary-text": "#858585",
        link: "#346BD4",
        trunks: "#999CA0",
        bulma: "#231F20"
      },
      boxShadow: {
      },
      maxWidth: {
        "10xl": '1440px'
      },
      fontFamily: {
        monteserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      borderRadius: {
        10: "10px"
      }
    },
  },
  plugins: [],
};