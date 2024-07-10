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
        'custom_3xl':'32px',
        'custom_5xl':'50px',
        'custom_6xl':'64px',
      },
      lineHeight: {
        78: "78%",
        100: "100%",
        107:"107%",
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
      offBlack:"#0E0F13",
      darkSkyBlue:"#DA66C2",
      footerBg:"#2222221A",
      offWhite:"#FFFFFF33",
      footerBg: "#2222221A",
      lightBlack2: "0000001A",
      darkOrange:"#E2803E",
    },
    boxShadow:{
      buttonShadow:'2px 2px 0px 0px #000000',
      accordianshadow: '0px 4px 23px 0px #0000001F',
      borderShadow:'0px 1px 23px 0px #A18EE814',
      keyImgShadow:' 0px 36.25px 25.89px 0px #040B1426'


      },
  container:{
    center:true,
  centerContent:true,
  }, 
  screens:{
    custom_lg: "1055px",
    'custom_sm': '400px',
    custom_xs:'370px'
  }
  
}
},
  plugins: [],
};