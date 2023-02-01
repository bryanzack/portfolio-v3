/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./(components)/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-bebas)'],
            bebas: ['Bebas Neue', 'sans-serif'],
            montserrat: ["Montserrat", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
        },
        colors: {
            cwhite: {
                mintcream: '#F5FFFA',
            },
            cred: {
                light: '#fff1f3',
            },
            cblue: {
                light: '#ecf2ff',
            }
        }
    },
  },
  plugins: [],
}
