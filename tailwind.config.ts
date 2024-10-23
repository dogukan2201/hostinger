import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      primary: "var(--font-marcellus)",
      secondary: "var(--font-urbanist)",
    },
    backgroundImage: {
      hero: 'url("/assets/hero/bg.jpg")', //EFEKAN FOTO
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#434343",
          hover: "#F7C873",
        },
        secondary: {
          DEFAULT: "#FAEBCD",
        },
        accent: {
          DEFAULT: "#434343",
          hover: "#F7C873",
        },
        tertiary: {
          DEFAULT: "#faf5ef",
        },
        grey: {
          DEFAULT: "#a09faf",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
