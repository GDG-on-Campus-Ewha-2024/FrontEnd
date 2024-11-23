import type {Config} from "tailwindcss";

const config: Config={
  content:[
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
export default config;
