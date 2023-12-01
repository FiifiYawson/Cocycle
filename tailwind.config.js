/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "primary-opacity": "var(--primary-opacity)",
        "text-grey": "var(--text-grey)",
        "text-light-grey": "var(--text-light-grey)",
        "grey": "var(--grey)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        "grey-opacity": "var(--grey-opacity)"
      },
      borderRadius: {
        "regular": "var(--border-radius)",
      },
      padding: {
        "screen": "var(--screen-padding)"
      }
    },
  },
  plugins: [],
}