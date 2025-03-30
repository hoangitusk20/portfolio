/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
      },
      container: {
        screens: {
          "2xl": "95rem",
        },
      },
    },
  },
  plugins: [],
};
