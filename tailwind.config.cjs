const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.tsx'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      fontFamily: {
        mono: ['SF Mono', 'monospace'],
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
}
