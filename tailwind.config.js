/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      xs: "400px",
      "xs-sm": "500px",
      "sm-md": "700px",
      "md-lg": "900px",
    },
    fontFamily: {
      "tags-font": ["La Belle Aurore, cursive"],
      poppins: ["Poppins", "sans-serif"],
      heading: "Coolvetica",
      sans: "sans-serif",
    },
    boxShadow: {
      imgShadow: "0 0 26px #fff",
      imgShadowHover: "0 0 16px #ff4500",
      buttonShadow: "0 0 12px #00ff7f",
      linkShadow: "-10px 10px 10px 10px #1e1e1e",
    },
    animation: {
      shadow: "pulse 2s infinite",
      shadowHover: "pulseHover 2s infinite",
    },
    keyframes: {
      pulse: {
        "0%": {
          boxShadow: "0 0 16px #fff",
        },
        "50%": {
          boxShadow: "0 0 26px #fff",
        },
        "100%": {
          boxShadow: "0 0 16px #fff",
        },
      },
      pulseHover: {
        "0%": {
          boxShadow: "0 0 16px #ff4500",
        },
        "50%": {
          boxShadow: "0 0 26px #ff4500",
        },
        "100%": {
          boxShadow: "0 0 16px #ff4500",
        },
      },
    },
  },
  plugins: [],
};
