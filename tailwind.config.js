/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "var(--primary-1)",
          2: "var(--primary-2)",
          button: {
            main: "var(--primary-button-main)",
            stroke: "var(--primary-button-stroke)",
          },
        },
        secondary: {
          button: {
            main: "var(--secondary-button-main)",
            stroke: "var(--secondary-button-stroke)",
          },
        },
        text: {
          main: "var(--text-main)",
          secondary: "var(--text-secondary)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
