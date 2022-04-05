// const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cream': '#eae7d2',	
        'tan': '#eee2a8',	
        'green-light': '#72bf53',	
        'green-dark': '#679267',	
        'brown-dark': '#483531',
        'golden-yellow': '#FFC000'
      },

    },
  },
  plugins: [],
}
