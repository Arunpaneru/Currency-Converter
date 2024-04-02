/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main_bg': "URL('src/assets/Nepali_Currency.jpg')"
      },
      colors: {
        'button_bg1':"#70E000",
        'button_bg2':"#9EF01A"
      }
    },
  },
  plugins: [],
}

