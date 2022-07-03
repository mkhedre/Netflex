/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-to-b':
      //     'linear-gradient(to bottom, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.15) 15% , rgba(20, 20, 20, 0.35) 29% , rgba(20, 20, 20, 0.58) 44%,#141414 100%)',
      // },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbars: ['dark'],
  },
};
