/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cinzel':['Cinzel', 'serif'], 
      },
      backgroundImage: {
        'featured-bg': "linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70)), url('./src/assets/home/featured.jpg')", 
       
      } 
    },
  },
  plugins: [require("daisyui"), require("tw-elements-react/dist/plugin.cjs")],
};


