/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-gray": "#F6F7FB",
        "blue-advantages": "#E8F1FB",
        "blue-testimonials": "#272D38",
        "blue-text-testimonials": "#67BFF9",
        "blue-how-do-it": "#5956E9",
        "blue-sky": "#64BEFA",
      },
    },
  },
  plugins: [],
};
