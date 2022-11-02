/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1440px',
      // => @media (min-width: 1440px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      ...colors,
      primary: '#B82A06',
      secondary: '#3C0C00',
      tertiary: '#FFB3A4',
      lightgrey: '#DCDCDC',
    },
    extend: {
      animation: {
        type: 'type 3s ease-out .8s infinite alternate both',
        typing: 'typing 3.7s steps(10, start) infinite both',
        blink: 'blink .75s step-end infinite',
      },
      keyframes: {
        type: {
          '0%, 5%': { transform: 'translateX(0)' },
          '5%, 10%': { transform: 'translateX(21px)' },
          '15%, 20%': { transform: 'translateX(40px)' },
          '25%, 30%': { transform: 'translateX(58px)' },
          '35%, 40%': { transform: 'translateX(76px)' },
          '45%, 50%': { transform: 'translateX(87px)' },
          '55%, 60%': { transform: 'translateX(106px)' },
          '65%, 70%': { transform: 'translateX(124px)' },
          '75%, 80%': { transform: 'translateX(132px)' },
          '85%, 90%': { transform: 'translateX(143px)' },
          '95%, 100%': { transform: 'translateX(154px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '150px' },
        },
        blink: {
          'from, to': { color: '#FFF'},
          '50%': { color: '#B82A06'},
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-typing': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: '0 auto',
        },
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
}
