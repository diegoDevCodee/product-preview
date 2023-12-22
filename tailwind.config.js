/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        darkCyan: "hsl(158, 36%, 37%)",
        darkCyanHo: "hsl(158, 36%, 27%)",
        Cream: "hsl(30, 38%, 92%)",
        // Neutral
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        whiteFn: "hsl(0, 0%, 100%)",
      },
      screens: {
        cellphone: "375px"
      }
    },
  },
  plugins: [],
};
