module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'solcius-blue': '#4c9fdc',
        'solcius-yellow': '#f7d900',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
