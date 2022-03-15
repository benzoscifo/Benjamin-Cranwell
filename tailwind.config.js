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
      gold: "#FFD700",
      black: "#000000",
      darkGray: "#212121",
      pastelBlue: "#AFCBFF",
      blueViolets: "#4377D1",
      pastelGreen: "#ADDDCE",
      pastelPink: "#F3D1DC",
      darkPastelGreen: "#70AE98",
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
        gold: "#FFD700",
        black: "#000000",
        darkGray: "#212121",
        pastelBlue: "#AFCBFF",
        blueViolets: "#9DABDD",
        pastelGreen: "#70AE98",
        pastelPink: "#F3D1DC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
