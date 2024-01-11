import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  theme: {
    extend: {
      maxWidth: {
        xxl: "1300px",
      },

      screens: {
        // max-width responsive design
        // "max-xs": { max: "530px" },

        // min-width responsive design
        xxs: "375px",
        xs: "530px",
        md: "768px",
        lg: "940px",
        xl: "1024px",
        xxl: "1300px",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
