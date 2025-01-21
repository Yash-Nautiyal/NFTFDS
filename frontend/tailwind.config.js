/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        'redhat': ['Red Hat Display', 'serif']
      },
    },
  },
  plugins: [],
}