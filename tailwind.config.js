/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['serif'],
      },
      colors: {
        green: { DEFAULT: '#00B17D' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
