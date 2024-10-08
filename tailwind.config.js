/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple800: '#7d3665',
        customWhiteOcean: '#F0F0F0',
        customPurple300: '#ff6c8a',
        customOrange: '#FAA32F',
        customYellow: '#FFD700',
        customOscure:  '#1D2027',
        customGradient: {
          start: '#FFD700',
          end: '#FAA32F',
        },
      },
      screens: {
        '3xl': '1600px', // Define el breakpoint 3xl si aún no lo has hecho
      },
      padding: {
        '0': '0',
      },
    },
  },
  variants: [],
  plugins: [],
}

