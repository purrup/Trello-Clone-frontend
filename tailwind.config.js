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
        },
        navbar: {
          icon: '#7fb3d1',
          iconHover: '#3688B9',
          light: '#4e95bf',
          DEFAULT: '#0067A3'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
