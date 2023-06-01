/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"'],
        Montserrat: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
};
