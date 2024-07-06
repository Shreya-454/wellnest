import React from 'react'
import { CommonPara } from './common/Headings'
import { Button } from './common/Button'
const Hero = () => {
  return (
    <div className='min-h-[810px] bg-[url(./assets/images/webp/headerImages/heroBgImg.webp)] bg-cover bg-center bg-no-repeat bg-lightOrange'>
      <div className="container mx-auto px-3 max-w-[1164px] pt-20">
        <h1 className='text-custom_6xl font-poppins font-bold text-black text-center leading-120 mb-4'>Welcome To <span className='text-purple leading-120'>Wellnest</span></h1>
        <CommonPara text="Supporting Individuals And Companies In Achieving Their Highest Potential For The Betterment Of Themselves And Our Community." className="text-center max-w-[642px] mx-auto mb-10"/>
<div className='flex justify-center'><Button btnName="Book A Free Consultation"/></div>
      </div> 
    </div>
  )
}

export default Hero
