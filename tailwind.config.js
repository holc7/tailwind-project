module.exports = {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("rippleui")],
};
