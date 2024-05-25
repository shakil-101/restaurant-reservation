import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      colors: {
        deepGolden: "#C5A34F",
        lightGolden: "#E2C479",

        lightGray: "#DCDCDC",
        mediumGray: "#969696",
        deepGray: "#3C4A4E",

        deepDark: "#121617",
        mediumDark: "#202627",
        mediumDark2: "#242829",
      },
    },
  },
  plugins: [],
};
export default config;
