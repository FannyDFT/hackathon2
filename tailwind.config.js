/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        blueColor: "#26498D",
        blackColor: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
