
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#0c0b09',
        'primary-color': '#686071',
        'secondary-color': '#362934'
      }
    },
  },
  plugins: [],
}