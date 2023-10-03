/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "bp-sm": "600px",
        "bp-lg": "1200px",
      },
    },
  },
  plugins: [],
};
