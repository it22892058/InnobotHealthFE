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
        "amber":"#03989e"
      }
    },
  },
  plugins: [],
}