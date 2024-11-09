/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FEC423",
        customLightgray: "#EAEAEA",
        customDarkRed: {
          DEFAULT: "#6F0203",
          light: "#af0b09",
        },
        customDarkGray: "#4b4a4a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
