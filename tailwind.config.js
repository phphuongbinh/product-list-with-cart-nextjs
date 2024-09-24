/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcf8f5",
        textColor: "#270f06",
        redColor: "#c83b0e",
        crimsonColor: "#952c0c",
        textLighter: "#8a7c7b",
      },
    },
  },
  plugins: [],
};
