/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'palevioletred': '#a63e60',
      'white': '#fff',
      'maroon': '#4a1521',
      'black': '#000000',
      'green': '#149C48',
      'red': '#EB1C26',
      'lightgray': '#F0F0F0',
    },
    spacing:{},
    fontFamily:{
      "montserrat": "Montserrat",
      "josefin-sans": "'Josefin Sans'"
    },
    fontSize:{
      "inherit": "inherit"
    }
  },
  corePlugins:{
    preflight: false
  },
  plugins: [],
};
