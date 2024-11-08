/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#00005A',
        'header-blue': '#001876',
        'shiny-blue': '#0024AD',
        'mid-blue': '#080ca5'
      }
    },
  },
  plugins: [],
}