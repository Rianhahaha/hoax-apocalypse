/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueMain': '#222A41',
        'yellowMain': '#EEBD01',
        'yellowMain2': '#FF9D00',
      },
      fontFamily: {
        'Bagus': ['Bagus', 'sans-serif']
      }

    },
  },
  plugins: [],
}