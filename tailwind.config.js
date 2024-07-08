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

        butterflyBush: {
          50: '#f1f2fc',
          100: '#e6e6f9',
          200: '#d2d2f3',
          300: '#b8b6eb',
          400: '#a299e0',
          500: '#8f7fd5',
          600: '#7f66c5',
          700: '#674fa3',
          800: '#5a478c',
          900: '#4a3f70',
          950: '#2c2541'
        },

        //
        gray: {
          200: '#C4C4CC',
          300: '#8D8D99'
        },

        mineShaft: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#2b2b2b'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
