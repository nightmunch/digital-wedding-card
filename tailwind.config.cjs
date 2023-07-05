/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        shahrin: {
          primary: "#22577a",
          secondary: "#bde0fe",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#FFFFFF",
          info: "#8DCBC1",
          success: "#9DB786",
          warning: "#FFD261",
          error: "#FD9782",
        },
        aimi: {
          primary: "#9c994a",
          secondary: "#d0cdba",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#f1f1eb",
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
