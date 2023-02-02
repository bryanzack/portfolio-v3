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
                backdrop: '#fff1f3',
                dark: '#E84057',
                item: '#FFBAC3',
                line: '#FFD8D9',
                d: '#D31A45',
                multikill: 'rgb(232, 64, 87)',
            },
            cblue: {
                backdrop: '#ecf2ff',
                dark: '#5383E8',
                item: '#B3CDFF',
                line: '#D5E3FF',
            },
            cgrey: {
                text: '#758592',
                level: 'rgb(32, 45, 55)',
                kd: '#202D37',
                slash: '#9AA4AF',
            }
        }
    },
  },
  plugins: [],
}
