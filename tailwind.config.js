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
          primary: '#172B4D',
          hover: '#172B4D'
        },
        boardCard: {
          hover: '#005B8F'
        }
      },
      width: {
        '30%': '30%'
      },
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-out-right': {
          'from': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateX(-50px)'
          }
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
