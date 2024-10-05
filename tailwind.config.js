/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colers: {
        primary: "#8ABA51",
        secondary: "#758888",
        base: "#0C0C0C",
        gray: "#232323"
      }
    },
    container: {
      center:true,
      screens: {
        "2xl": "1400px"
      }
    }
  },
  plugins: [],
}

