import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'island-moments': ['island-moments', 'sans-serif'],
      },
    },
    colors:{
      //theme
      themeWhite: '#ffffff',

      //text
      textPrimary: '#060710',
      textSecondary: '#96969F',

      //input
      inputPrimary: '#060710',
      inputSecondary: '#A4A5AA'
    },
  },
  plugins: [],
};
export default config;
