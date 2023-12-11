import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#D86161',
        customblue: '#1597E4',
        customgray: '#7A7A7A',
        customgrayborder: '#E6E6E6',
        customebg:'#D8D8D8',
        customecard:'#FFFFFF',
      },
    },
  },

  plugins:[],
}

