module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "calc(100vh / 2)",
      }),
    },
    backgroundImage: {
      'loading': "url('../public/loading.svg')",
    },
  },
  plugins: [],
}