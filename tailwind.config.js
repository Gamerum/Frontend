/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1.25rem',
          xs: '1.25rem',
          sm: '2rem',
          '3xs': '1.25rem',
          '2xs': '1.25rem',
        },
        center: true,
        screens: {
          DEFAULT: '100%',
          lg: '1440px',
          '2xl': '2560px',
        },
      },
      colors: {
        main: {
          100: '#ffffff',
          200: '#bac6d9',
          250: '#cbd4e3',
          300: '#dbe2ec',
          350: '#eef1f6',
          400: '#6951eb',
          450: '#7d62f2',
          500: '#b4ff3c',
          550: '#c8ff6d',
          600: '#d9ff9c',
          650: '#ecffcf',
          700: '#d9fc4c',
          750: '#121212',
          800: '#141414',
          850: '#181818',
          900: '#000000',
        },
        secondary: {
          100: '#303030',
          150: '#222222',
          200: '#212121',
          250: '#272727',
          300: '#414141',
          350: '#3B3B3B',
        },
      },
    },
  },
  plugins: [],
};
