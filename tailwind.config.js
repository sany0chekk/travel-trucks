/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
    extend: {
      screens: {
        desktop: "1440px",
      },
      colors: {
        main: "#101828",
        white: "#ffffff",
        text: "#475467",
        inputs: "#f7f7f7",
        badges: "#f2f4f7",
        gray: "#6c717b",
        grayLight: "#dadde1",
        button: "#e44848",
        buttonHover: "#d84343",
        rating: "#ffc531",
      },
    },
  },
  plugins: [],
};
