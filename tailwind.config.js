module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/20140301_Trade-151_0124-copy.jpeg')"
      })
    },
    backgroundColor: theme => ({
      // ...theme('colors'),
      'primary': '#e0e0db'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
