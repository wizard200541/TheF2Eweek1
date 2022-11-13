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
      yellow: '#FFC612',
    },
    fontSize: {
      h1: ['72px', '108px'],
      h2: ['56px', '84px'],
      h3: ['42px', '63px'],
      h4: ['36px', '54px'],
      h5: ['30px', '45px'],
      h6: ['24px', '36px'],
      h7: ['16px', '24px'],
      h8: ['14px', '21px'],
      h9: ['12px', '18px'],
    },
    extend: {
      boxShadow: {
        'normal': '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        'floating': '0px 10px 20px 2px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        type: 'type 3s ease-out .8s infinite alternate both',
        typing: 'typing 3.7s steps(10, start) infinite both',
        blink: 'blink .75s step-end infinite',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
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
