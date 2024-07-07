/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins','sans-serif'],
        'inter':['Inter','sans-serif']
      },
      fontSize:{
        'custom_lg':'19px',
        'custom_5xl':'50px',
        'custom_6xl':'64px',
      },
      lineHeight:{
        120:"120%",
        150:"150%",
        180:"180%",
    },
    colors:{
      purple:"#A18EE8",
      lightBlack:"#1E2031",
      lightGreen:"#C5FCC3",
      skyBlue:"#AEEFF4",
      darkGreen:"#4CDFB2",
      orange:"#FFB685",
      lightOrange:"#FFB6851A",
      offBlack:"#0EDF13",
      darkSkyBlue:"#DA66C2",
      
    },
    boxShadow:{
      buttonShadow:'2px 2px 0px 0px #000000',
      accordianshadow:'0px 4px 23px 0px #0000001F'
  },
  container:{
    center:true,
  centerContent:true,
  }, 
  screens:{
    custom_lg:"1055px",
  }
  
}
},
  plugins: [],
};