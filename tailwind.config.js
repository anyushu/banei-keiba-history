/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

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
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-out': 'fade-out 1s ease both',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          to: {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-360': {
          transform: 'rotateY(360deg)',
        },
      })
    }),
    require('@tailwindcss/typography'),
  ],
}

module.exports = config
