module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-t":
          "linear-gradient(0deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0) 95%)",
      },
    },
  },
  plugins: [],
}
