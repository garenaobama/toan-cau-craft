import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0.7455357142857143) 0%, rgba(255,255,255,0.1516981792717087) 100%)",
      },
      fontFamily: {
        "island-moments": ["island-moments", "sans-serif"],
      },
    },
    colors: {
      //transparent
      blurEffect: "#0000007a",

      //theme
      themeWhite: "#ffffff",
      themeDark: "#060710",

      //text
      textPrimary: "#060710",
      textSecondary: "#96969F",
      textTertiary: "#D6D6E4",

      //input
      inputPrimary: "#060710",
      inputSecondary: "#A4A5AA",

      //decor
      backgroundDecor500: "#A4A5AA",
      backgroundDecor200: "#EAECF4",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
