/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 3s ease-out .8s infinite alternate both',
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
      },
    },
  },
  plugins: [],
}
