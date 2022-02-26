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
      bloodhound: "#CD2D09",
      white: "#FFFFFF",
      gray: "#F2F1F0",
    }),
    extend: {
      backgroundImage: {
        oceanBackground: "url('../images/ocean.jpeg')",
      },
      colors: {
        white: "#FFFFFF",
        argosLite: "#00ACD7",
        blue: "#42A0F9",
        argos: "#FF0000",
        orange: "#FFA500",
        bloodhound: "#CD2D09",
        green: "#10B981",
        beige: "#E8DED1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
