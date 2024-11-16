/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset:{
        8: '20px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red:"#991B1B",
        brick:"#A64732",
        lightbrown:"#BF9169",
        background:"#FFEEDA",
      }
    },
  },
  plugins: [],
};
