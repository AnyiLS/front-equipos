/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "only-mobile": {
        "max": "600px"
      },
      "max-500": {"max": "500px"},
      "max-1024": {"min": "501px", "max": "1024px"},
      "max-582": {"min": "583px", "max": "900px"},
      "max-1200": {"min": "1201px", "max": "1360px"},
      "max-900": {"min": "582px", "max": "1200px"},
      "max-375": {"min": "0px", "max": "582px"},
      "max-767": {"max": "767px"},
      "max-1366": {"max": "1366px"},
      "sm":{"min": "640px"},
      "md":{"min": "768px"},
      "lg":{"min": "1024px"},
      "xl":{"min": "1280px"},
      "2xl":{"min": "1440px"},
    },
    extend: {
      maxWidth: {
        "screen-lg": "max-width: 1024px",
        "screen-xl": "max-width: 1280px"
      }
    },
  },
  plugins: [],
}

