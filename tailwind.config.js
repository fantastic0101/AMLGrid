/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1764FF',
          light: '#141B34',
          dark: '#001133',
          heavy: '#001133',
          light2: '#B7CFFF',
          light3: '#E8F0FF',
          blur: '#11182780'
        },
        secondary: {
          DEFAULT: "#7A7A7A",
          dark: "#505660",
          light: "#D1D1D1",
          light2: "#6B7280"
        },
        back: {
          DEFAULT: "#E8F0FF",
          dark: "#DCE8FF"
        },
        dark: {
          DEFAULT: "#FFFFFF14"
        },
        brown: {
          DEFAULT: "#FFF4C6",
          dark: "#653804",
          heavy: "#A73E03"
        }
      },
      lineHeight: {
        'extra-tight': '3.5rem !important',
      },
      translate: {
        '200': '-200%', // Add a custom translation value
      },
      borderWidth: {
        '1': '0.5px'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFFFFF00, #ABABAB0F)',
      },
      boxShadow: {
        'custom-light-1': '0 28px 20px 0px #AAAAAA1A',
        'custom-light-2': '0 111px 50px 0px #AAAAAA17',
      }
    },
  },
  plugins: [],
}

