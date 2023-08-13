/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-green":"#069C46",
        "color-another-green":"#E1FFF3",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:'50px'
      }
    }
  },
  
  plugins: [],
}

