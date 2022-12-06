/** @type { import('tailwindcss').Config } */
module.exports = {
  content: [
    "./pages/*.{tsx,js}",
    "./pages/**/*.{tsx,js}",
    "./components/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        "eliptico-green": "#3FFF7C",
        "eliptico-greener": "#00E749",
      },
    },
  },
  plugins: [],
}
