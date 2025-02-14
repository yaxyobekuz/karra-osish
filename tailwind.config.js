/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#028DE3",
        dark: "#292a31",
        gray: {
          light: "#F5F7F9",
        },
      },

      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },

    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
