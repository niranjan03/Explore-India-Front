/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        surface: '#F4F3EF',
        charcoal: '#1F2421',
        terracotta: {
          DEFAULT: '#C85A32',
          dark: '#A94725',
        },
        peacock: '#1B4965',
        marigold: '#E09F3E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
