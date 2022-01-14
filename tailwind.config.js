module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      hero: "75vh",
    },
    backgroundColor: theme => ({
      argos: "#FF0000",
    }),
    extend: {
      backgroundImage: {
        fireworksBackground: "url('../images/fireworks.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
