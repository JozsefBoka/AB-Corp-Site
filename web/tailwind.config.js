const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-360': {
      transform: 'rotateY(360deg)',
    },
    '.rotate-y-5': {
      transform: `rotate(5deg)`
    },
    '.-rotate-y-5': {
      transform: `rotate(-5deg)`
    }
  })
})

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1544px',
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1900px'
      },
      colors: {
        'dusty-gray' : '#9A9A9A'
      },
      fontFamily: {
        krona: ['KronaOne', 'sans-serif'],
        montserrat: ['Montserrat', 'serif'],
      }
    },
  },
  plugins: [rotateX],
}
