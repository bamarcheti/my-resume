/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#2B2B2B',
        secondary: '#A259FF',
        textB: '#767676',

        white: '#FFFF',
        whitePrimary: '#674FA3',

        dark: '#3B3B3B',
        darkPrimary: '#858584'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
