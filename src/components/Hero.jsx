import React from 'react'
import { CommonPara } from './common/Headings'
import { Button } from './common/Button'
import { HeroImageList } from './common/Helper'
const Hero = () => {
  return (
    <div className='min-h-[810px] bg-[url(./assets/images/webp/headerImages/heroBgImg.webp)] bg-cover bg-center bg-no-repeat bg-lightOrange'>
      <div className="container mx-auto px-3 max-w-[1320px] pt-20">
        <h1 className='text-custom_6xl font-poppins font-bold text-black text-center leading-120 mb-4'>Welcome To <span className='text-purple leading-120'>Wellnest</span></h1>
        <CommonPara text="Supporting Individuals And Companies In Achieving Their Highest Potential For The Betterment Of Themselves And Our Community." className="text-center max-w-[642px] mx-auto mb-10"/>
<div className='flex justify-center mb-12'><Button btnName="Book A Free Consultation"/></div>
<div className="flex flex-row flex-wrap -mx-3">
    { HeroImageList.map((item,i)=>(
            <div key={i} className={`2xl:w-1/4 flex w-1/2 px-3 ${i === 0 ? " 2xl:translate-y-[83px] justify-end mb-6": ""} ${i=== 2 ? "2xl:translate-y-[70.48px] justify-end":""} ${i === 1 ?"mb-6":""}`}>
                <img src={item.img} alt="heroImg" className={`max-w-[303.54px] `} />
            </div>
        ))
    }
</div>
      </div> 
    </div>
  )
}

export default Hero
