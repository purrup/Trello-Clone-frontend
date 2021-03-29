module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F79BF',
        secondary: {
          100: '#52A4D5',
          200: '#66A4C8',
          300: '#1967A3'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
