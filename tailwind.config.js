/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

      fontFamily: {
        'Questrial': ['Questrial-Regular' , 'sans-serif'],
        'Roboto-Flex': ['Roboto-Flex' , 'sans serif']
      },
    },
  },
  plugins: [],
}