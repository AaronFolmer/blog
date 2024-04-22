import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        100: "#141414",
        200: "rgb(245 237 204 / 0.5)",
      },
      primary: "#ec41b5",
      secondary: "#35182c",
      transparent: "transparent",
      title: {
        100: "#FFFFFF",
        200: "#000000",
      },
      subtitle: "#A9A9A9",
      inactive: "#282828",
    },
  },
  plugins: [],
};
export default config;
