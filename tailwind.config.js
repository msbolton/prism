/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/projects/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light, dark"]
  }
}

