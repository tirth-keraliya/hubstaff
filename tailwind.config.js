/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      8: "8px",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
    },
    extend: {
      lineHeight: {
        18: "18px",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      silver: "#727378",
      grayborder: "#e4e4e5",
      blue: "#2e69ce",
      bluehov: "#2656a7",
      gray: "#777777",
      finput:
        "rgb(175, 205, 255) 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 1px 1px 2px 0px",
    },
  },
  plugins: [],
};
