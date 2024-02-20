/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'paragraph': '14px',
      },
      colors: {
        'primary': '#C5F82A',
        'neutral-grey': '#333333',
        'neutral-dark': '#1F1F1F',
        'neutral-off': '#141414'
      }
    },    
  },
  plugins: [],
}
