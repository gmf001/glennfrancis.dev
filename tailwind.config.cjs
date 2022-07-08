/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif']
      },
      colors: {
        dark: '#1e2028',
        darkSecondary: '#242731'
      }
    }
  },
  plugins: []
};
