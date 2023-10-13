/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4285F4',
        'custom-button-blue': '#3E84F8',
        'custom-green-1': '#7FCD93',
        'custom-yellow-1': 'rgba(222, 191, 133, 1)',
        'custom-pink-1': 'rgba(236, 164, 164, 1)',
        'custom-purple-1': 'rgba(169, 176, 229, 1)',
        'shadow-color' : 'rgba(98, 98, 98, 0.15)'
      }
    },
  },
  plugins: [],
}