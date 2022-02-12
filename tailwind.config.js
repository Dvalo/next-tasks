module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/types/**/*.{js,ts,jsx,tsx}",
    "./src/config/**/*.{js,ts,jsx,tsx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121218",
        secondary: "#282832",
        secondary_hover: "#1f1f26",
        secondaryl: "#32333e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
