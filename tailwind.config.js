/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6',
          dark: '#A855F7'
        }
      },
      fontFamily: {
        'korean': ['Pretendard', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}