/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#e8e8e8",
        'light-white':'rgba(255,255,255,0.69)',
        "amber":"#03989e",
        
      },
      width:{
        '20':'7rem'
      },
      padding: {
        '5': '2.5rem',
        '8': '2rem',
      },
      borderRadius: {
        'right': '0 0.95rem 0 0' // Border-radius for right corners
      },
      
    },
  },
  plugins: [],
}