/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C7DBC',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        backgroundSection: '#004b98',
      },
    },
  },
  plugins: [],
};
