module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        '100': '30rem',
      }),
    },

    flexGrow: {
      '0': 0,
       DEFAULT: 2,
       '1': 1,
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
