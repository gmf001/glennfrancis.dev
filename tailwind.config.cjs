/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["vt323", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#000212",
        "dark-accent": "#090b20",
        primary: "#5558a4",
        "primary-accent": "#aab1e7",
        secondary: "#a057e0",
        "secondary-accent": "#bc89e9",
        "gradient-purple": "#a15ae0",
        "gradient-blue": "#8e97df",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
