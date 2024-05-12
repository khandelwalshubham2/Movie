/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primaryColor: "#10141f",
        secondaryColor: "#161d2f",
        blueColor: "#877EFF",
      },
    },
  },
  plugins: [],
};
