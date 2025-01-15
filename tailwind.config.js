/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#121212",
        accent: "#1a8917",
        grayLight: "#e7e7e7",
        grayDark: "#4f4f4f",
      },
    },
  },
  plugins: [],
};
