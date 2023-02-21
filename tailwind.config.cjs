/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary': "#001233",
        'secondary': "#002855",
        'checkout':"#001845",
        "input": "#5c677d",
        'input2':"#979dac",
        "1": "#0466c8",
        "2": "#0353a4",
        "3":"#023e7d"
      },
      fontFamily:{
        'spacemono':['SpaceMono', 'monospace'],
        'spacebold':['SpaceMono-bold'],
        'spaceitalic':['SpaceMono-itl'],

      },
    },
  },
  plugins: [],
}
