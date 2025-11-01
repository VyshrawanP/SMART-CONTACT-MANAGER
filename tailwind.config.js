/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/main/resources/templates/**/*.html", // Thymeleaf templates
    "./src/main/resources/static/**/*.js",      // If you have custom JS
    "./node_modules/flowbite/**/*.js"           // Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode:"class",
};
