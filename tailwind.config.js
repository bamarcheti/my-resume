/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFF',

        stone: {
          900: '#2B2B2B',
          800: '#3B3B3B',
          700: '#474747',
          600: '#696868',
          500: '#767676',
          400: '#858584'
        },

        purple: {
          700: '#6d28d9',
          600: '#674FA3',
          500: '#7659ba',
          400: '#A259FF'
        },

        //
        gray: {
          200: '#C4C4CC',
          300: '#8D8D99'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
