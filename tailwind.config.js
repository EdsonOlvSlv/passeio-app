/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        caixaPrimary: "#005CA9",
        caixaSecondary: "#FF7900",
        caixaBg: "#F5F7FA",
      },
    },
  },
  plugins: [],
};
