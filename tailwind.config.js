/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#232323',
        ['neutral-4']: '#E3E3E3',
        ['carbuyer-primary']: '#EE1B24',
      }
    },
  },
  plugins: [],
}
