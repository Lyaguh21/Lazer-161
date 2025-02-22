import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fontMain: "#273043",
        fontGray: "#27304380",

        white: "#FFFFFF",
        gray: "#F2F2F2",
      },
      fontFamily: {
        Mono: "Montserrat",
      },
      screens: {
        bigPhone: "425px",
        tablet: "768px",
        laptop: "1024px",
        hd: "1280px",
        bigLaptop: "1440px",
        fullHd: "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
