/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "main-color": "#FAFFAF",
        "sec-color": "#96C9F4",
        "thi-color": "#3FA2F6",
        "for-color": "#0F67B1",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
