/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        santa: {
          red: '#D42F2F',
          green: '#2F5A33',
          gold: '#FFD700'
        }
      }
    },
  },
  plugins: [],
}
