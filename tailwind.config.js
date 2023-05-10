const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".section": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
          "@screen sm": {
            padding: "0 30px",
          },
        },
        ".container": {
          maxWidth: theme("maxWidth.default"),
        },
      });
    }),
  ],
};
