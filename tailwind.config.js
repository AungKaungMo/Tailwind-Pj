/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#043873',
          300: '#4F9CF9',
        },
        secondary: {
          200: '#FFE492',
          400: '#A7CEFC',
        },
        fontFamily: {
          inter: ['Inter'],
          taiHeri: ['"Tai Heritage Pro"'],
        }
      },
      inset: {
        '-500px': '-500px',
        '-200px': '-200px'
      },
      screens: {
        'my': '900px',
        'my2': '470px',
      },
    },
  },
  plugins: [],
}
