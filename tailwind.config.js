module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "calc(100vh / 2)",
      }),
    },
  },
  plugins: [],
}