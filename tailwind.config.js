/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFCF7',
        'bg-secondary': '#F7F4EE',
        'text-primary': '#605F5E',
        'text-secondary': '#8B8773',
        'text-light': 'white',
        'text-strong': '#FE6330'
      },

    },
  },
  plugins: [],
}

