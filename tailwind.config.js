module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#16a34a',
        },
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
