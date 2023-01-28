/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./(components)/**/*.{js,ts,jsx,tsx}",,
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-bebas)'],
            bebas: ['Bebas Neue', 'sans-serif'],
            montserrat: ["Montserrat", "sans-serif"]
        }
    },
  },
  plugins: [],
}
