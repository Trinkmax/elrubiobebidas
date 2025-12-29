/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E6007E', // Brand Magenta
          dark: '#BE0068', // Darker Magenta
          light: '#FF3399', // Lighter Magenta
        },
      },
    },
  },
  plugins: [],
}

