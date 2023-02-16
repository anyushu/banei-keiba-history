/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
