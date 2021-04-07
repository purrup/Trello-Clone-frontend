module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0079BF',
        secondary: {
          100: '#52A4D5',
          200: '#66A4C8',
          300: '#1967A3'
        },
        navbar: {
          icon: '#7fb3d1',
          iconHover: '#3688B9',
          light: '#4e95bf',
          blue: '#0067A3'
        },
        list: {
          gray: '#EBECF0'
        },
        textColor: {
          primary: '#172B4D'
        },
        boardCard: {
          hover: '#005B8F'
        }
      }
    }
  },
  variants: {
    extends: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
