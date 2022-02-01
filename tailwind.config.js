module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      hero: "75vh",
    },
    backgroundColor: theme => ({
      argos: "#FF0000",
      argosLite: "#00ACD7",
      orange: "#FFA500",
      green: "#10B981",
      blue: "#42A0F9",
      charcoal: "#333333",
      orange: "#FFA500",
    }),
    extend: {
      backgroundImage: {
        fireworksBackground: "url('../images/fireworks.jpg')",
      },
      colors: {
        white: "#FFFFFF",
        argosLite: "#00ACD7",
        blue: "#42A0F9",
        argos: "#FF0000",
        orange: "#FFA500",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
