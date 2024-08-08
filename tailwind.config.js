/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cinza-back' : '#CACACA',
        'cinza_fonte' : '#CACACA',
        'fundo_nav' : '#1E1E1E',
        'fundo_texto' : '#D9D9D9',
        'linha' : '#D9D9D9'
      },
    },
  },
  plugins: [],


}