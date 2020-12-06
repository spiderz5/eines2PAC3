module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Roboto\\ Slab', 'serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
     
    },
    extend: {
      colors: {
        'bankrobber': '#e40d2e',
        verd: {
          DEFAULT: '#155724',
          light: '#c3e6cb', 
          lighter: '#d4edda',   
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


