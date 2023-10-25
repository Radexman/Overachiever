/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      brand: ["Dancing Script", "cursive"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "emerald"],
  },
};
