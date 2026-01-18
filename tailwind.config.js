/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#E8EEF7',
          100: '#D1DDEF',
          200: '#A3BBDF',
          300: '#7599CF',
          400: '#5481C0',
          500: '#3D68B1',
          600: '#3D68B1',
          700: '#2F5189',
          800: '#223A61',
          900: '#162339',
        },
      },
    },
  },
  plugins: [],
};
