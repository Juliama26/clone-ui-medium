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
        grayLight: "#b3b3b3",
        grayDark: "#757575",
      },
    },
  },
  plugins: [],
};
