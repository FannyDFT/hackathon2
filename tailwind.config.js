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
        grayColor: "#D9D9D9",
        blackColor: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
