
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rajdhani": "Rajdhani, sans-serif",
        "sofia": "Sofia, cursive;"
      },
      colors: {
        "color1": "#3498db",
        "color-2": "#dde1e7",
        "color3" : "#ababab"
      }
    },
  },
  plugins: [],
}

