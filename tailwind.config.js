/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#2B2B2B',
        secondary: '#A259FF',
        tertiary: '#6d28d9',
        textB: '#767676',

        white: '#FFFF',
        whitePrimary: '#674FA3',
        whiteSecondary: '#7659ba',

        dark: '#3B3B3B',
        darkPrimary: '#858584',
        darkSecondary: '#474747',
        darkTertiary: '#696868'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
