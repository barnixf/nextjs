/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steelblue: "#00406c",
        white: "#fff",
        black: "#000",
        primary: "#6731dd",
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(255, 255, 255, 0.01)",
        },
        ghostwhite: "#edeef7",
        crimson: {
          "100": "#fe336e",
          "200": "#e52837",
        },
        goldenrod: {
          "100": "#ffbe3c",
          "200": "#fbb733",
        },
        palegoldenrod: "#e4d396",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
