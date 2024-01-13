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
        xxl: "1240px",
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

        "card-xs": "390px",
        // only for card light hover effect
      },

      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "75%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },

      animation: {
        heartbeat: "heartbeat 4s ease-in-out infinite", // Corrected animation name
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
