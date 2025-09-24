/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // React project ke liye
    ],
    theme: {
      extend: {
        colors: {
          primary: '#8A2BE2',
          secondary: '#FF6EC7',
          bg: '#FFF5E1',
          dark: '#2E2E2E',
          accent: '#1ABC9C',
        },
      },
    },
    plugins: [],
  }
  