/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5DC",
        brown: "#6B4226",
        retroGreen: "#3A5A40",
        mustard: "#E3B23C",
      },
      fontFamily: {
        vintage: ["'Playfair Display'", "serif"],
        retro: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
