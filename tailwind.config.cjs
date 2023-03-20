/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        aimi: {
          primary: "#7d9929",
          secondary: "#F9D72F",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#F1f1eb",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        shahrin: {
          primary: "#E0A82E",
          secondary: "#F9D72F",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkMode: false,
  },
  plugins: [require("daisyui")],
};
