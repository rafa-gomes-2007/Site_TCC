/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cinza_fonte' : '#CACACA',
        'fundo_nav' : '#1E1E1E'
      },
    },
  },
  plugins: [],


}