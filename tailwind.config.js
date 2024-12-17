/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#191919',
      darkest: '#0E0E0E',
      light: '#F0EFF4',
      redHighlight: '#BA4741',
      greyHighlight: '#363636'
    },
    extend: {
      fontFamily: {
        garet: ['Garet', 'sans-serif'],
        garetBold: ['GaretHeavy', 'sans-serif'],
        zig: ['Zig', 'sans-serif'],
      },
      boxShadow: {
        "3xl": "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "3xl": "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}

