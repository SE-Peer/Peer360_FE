/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown1: '#D5B493',
        brown2: '#B28F6F',
        brown3: '#93796A',
        brown4: '#6B5D54',
        red: '#F00001',
        green: '#578E2C',
        gray: '#B9B9B9',
      },
    },
  },
};
