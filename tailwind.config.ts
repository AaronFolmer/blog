import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        100: "#141414",
        200: "#0d0c0c",
      },
      primary: "#ec41b5",
      secondary: "#35182c",
      transparent: "transparent",
      title: "#FFFFFF",
      subtitle: "#A9A9A9",
      inactive: "#282828",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
