/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#240D57",
          purple: {
            light: "#8456EC",
            dark: "#501FC1",
          },
          pink: "#E87BF8",
        },
        secondaryPurples: {
          100: "#F6F2FF",
          200: "#EDE5FF",
          300: "#CCB6FF",
        },
        alert: {
          success: {
            light: "#D3FFE2",
            dark: "#00805E",
          },
          error: {
            light: "#FFD7E0",
            dark: "#E61445",
          },
        },
        neutrals: {
          white: {
            100: "#FBFAFF",
            200: "#F2F2F2",
          },
          gray: {
            100: "#E0E0E0",
            200: "#BDBDBD",
            300: "#828282",
            400: "#4F4F4F",
          },
        },
      },
    },
  },
  plugins: [],
};
