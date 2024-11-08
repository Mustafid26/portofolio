/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html,jsx}',
      './public/index.html',
  ],
  theme: {
      extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
