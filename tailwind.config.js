/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura PT", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        muted: "rgba(124, 124, 124, 0.486)",
        space: "rgb(6,6,12)",
        blue: "#11283f",
        dark: "#212529",
        gray: "#e9e6e6",
        red: "#e94545",
        yellow: "rgb(239, 255, 92)",
        green: "rgb(0, 175, 90)",
        cyan: "rgb(0, 205, 255)",
        purple: "rgb(170, 0, 190)",
      },
    },
  },
  plugins: [],
};
