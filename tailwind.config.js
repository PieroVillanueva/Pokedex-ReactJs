/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 500px)' },
        // => @media (min-height: 500px) { ... }
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "berlin": ["Berlin Sans FB Demi Bold", 'sans-serif'],
      },
      backgroundImage: {
        "trama": "url('../src/img/trama.png')"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

