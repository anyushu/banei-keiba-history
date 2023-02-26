/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const config = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Yu Gothic',
          '游ゴシック',
          'YuGothic',
          '游ゴシック体',
          'ヒラギノ角ゴ Pro W3',
          'メイリオ',
          'Noto Sans JP',
          'sans-serif',
        ],
        serif: ['serif'],
      },
      colors: {
        green: { DEFAULT: '#00B17D' },
      },
      backgroundSize: {
        'size-90%': '90% 90%',
        'size-110%': '110% 110%',
      },
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-out': 'fade-out 1s ease both',
        'banba-action': 'banba-action 3s ease 0s infinite both',
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
        'banba-action': {
          '0%': {
            background:
              'url("/images/banba_front_anime_uma_1.png") bottom left/auto 100% no-repeat',
          },
          '50%': {
            background:
              'url("/images/banba_front_anime_uma_2.png") bottom left/auto 100% no-repeat',
          },
          '100%': {
            background:
              'url("/images/banba_front_anime_uma_1.png") bottom left/auto 100% no-repeat',
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
