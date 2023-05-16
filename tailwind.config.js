/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#F8F4EB",
        "gray-50":"#EFE6E6",
        "gray-100":"#5E0000",
        "primary-100":"#FFE1E0",
        "primary-300":"#FFA6A3",
        "primary-500":"#FF6BB6",
        "secondary-400":"#FFCD58",
        "secondary-500":"#FFC132",
      }
    },
  },
  plugins: [],
}

