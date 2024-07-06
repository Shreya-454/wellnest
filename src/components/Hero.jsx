import React from 'react'
import { CommonPara } from './common/Headings'
import { Button } from './common/Button'
import { HeroImageList } from './common/Helper'
const Hero = () => {
  return (
    <div className='min-h-[810px] bg-[url(./assets/images/webp/headerImages/heroBgImg.webp)] bg-cover bg-center bg-no-repeat bg-lightOrange'>
      <div className="container mx-auto px-4 2xl:max-w-[1320px] max-w-[1164px] pt-20">
        <h1 className='md:text-custom_6xl sm:text-5xl text-4xl font-poppins font-bold text-black text-center leading-120 mb-4'>Welcome To <span className='text-purple leading-120'>Wellnest</span></h1>
        <CommonPara text="Supporting Individuals And Companies In Achieving Their Highest Potential For The Betterment Of Themselves And Our Community." className="text-center max-w-[642px] mx-auto mb-10"/>
<div className='flex justify-center mb-12'><Button btnName="Book A Free Consultation"/></div>
<div className="flex flex-row flex-wrap -mx-3">
    { HeroImageList.map((item,i)=>(
            <div key={i} className={`md:w-1/4 w-1/2 flex w px-3 ${i === 0 ? " lg:translate-y-[83px] md:translate-y-8 mb-6 justify-end": ""} ${i=== 2 ? "lg:translate-y-[70.48px] md:translate-y-8 justify-end":""} ${i === 1 ?"mb-6":""}`}>
                <img src={item.img} alt="heroImg" className={`2xl:max-w-[303.54px] w-full max-md:max-w-[200px]`} />
            </div>
        ))
    }
</div>
      </div> 
    </div>
  )
}

export default Hero
