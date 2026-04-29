/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          dark: '#1a2e1a',
          medium: '#2d4a2d',
          light: '#4caf50',
          accent: '#8bc34a',
          bg: '#0f1710'
        }
      }
    },
  },
  plugins: [],
}
