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
        muted: "#7c7c7c7c",
        space: "#06060c",
        blue: "#11283f",
        dark: "#212529",
        gray: "#e9e6e6",
        red: "#e94545",
        yellow: "#efff5c",
        green: "#00af5a",
        cyan: "#00cdff",
        purple: "#aa00be",
      },
    },
  },
  plugins: [],
};
