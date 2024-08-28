/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A92C4',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        backgroundSection: '#4C7DBC',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
