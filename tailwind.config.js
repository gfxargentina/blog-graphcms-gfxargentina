module.exports = {
  //en content van todas las rutas donde se tiene que aplicar tailwind
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
