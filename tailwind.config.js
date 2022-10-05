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
        ['neutral-1']: '#FFFFFF',
        ['neutral-2']: '#FAFAFA',
        ['neutral-3']: '#F1F1F1',
        ['neutral-4']: '#E3E3E3',
        ['neutral-5']: '#B4B4B4',
        ['neutral-6']: '#8C8C8C',
        ['neutral-7']: '#5F5F5F',
        ['neutral-8']: '#232323',
        ['carbuyer-primary']: '#EE1B24',
        ['secondary-main']: '#0F5EDD',
        ['secondary-light']: '#E5EEFB',
        ['primary-dark-1']: '#2F465F',
        ['primary-dark-3']: '#1F7B4D',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')
  ],
}
