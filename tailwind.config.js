
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-red': '#e63946',
        'theme-white': '#f1faee',
        'theme-lightblue': '#a8dadc',
        'theme-midblue': '#457b9d',
        'theme-darkblue': '#1d3557',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

