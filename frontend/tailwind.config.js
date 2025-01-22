/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        'redhat': ['Red Hat Display', 'serif']
      },
      colors: {
        // Background colors
        page: {
          light: '#f9fafb',  // light gray for light mode
          dark: '#1f2937',   // dark gray for dark mode
        },
        sidebar: {
          light: '#ffffff',  // white for light mode
          dark: '#111827',   // darker gray for dark mode
        },
        card: {
          light: '#ffffff',  // white for light mode
          dark: '#374151',   // medium gray for dark mode
        },
      },
    },
  },
  plugins: [],
}