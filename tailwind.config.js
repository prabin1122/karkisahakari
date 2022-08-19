/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 50px rgba(2, 10, 4, 0.3)',
        '4xl': '2px 2px 22px rgba(2, 10, 4, 0.5)',
    },
  },
  plugins: [],
}
}

