import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#71717a",
        tertiary: "#f4f4f5",
        "black-100": "#f8f8f8",
        "black-200": "#efefef",
        "white-100": "#18181b",
      },
      boxShadow: {
        card: "0px 4px 24px rgba(0,0,0,0.06)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
    },
  },
  plugins: [],
};
export default config;
