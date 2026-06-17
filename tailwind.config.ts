import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#71717a",
        tertiary: "#f4f4f5",
        "black-100": "#f8f8f8",
        "black-200": "#efefef",
        "white-100": "#18181b",
      },
      boxShadow: {
        card: "0px 2px 16px rgba(0,0,0,0.05)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
