/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
        fontFamily: {
      sans: ["Sora", 'Outfit']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
