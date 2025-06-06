/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      border: '#e5e7eb',
      background: '#f8fafc',
       foreground: '#1f2937',  // or whatever color you want
       // or any other hex
    },
  },
},
  plugins: [],
}
