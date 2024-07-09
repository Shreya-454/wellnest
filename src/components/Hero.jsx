import React from 'react'
import { CommonPara } from './common/Headings'
import { Button } from './common/Button'
import { HeroImageList } from './common/Helper'
import greenEllipse from '../assets/images/svg/header/greenEllipse.svg'
import orangeEllipse from '../assets/images/svg/header/orangeEllipse.svg'
import Nav from './Nav'
const Hero = () => {
  return (
    <div className='lg:h-[810px] relative bg-[url(./assets/images/webp/headerImages/heroBgImg.webp)] bg-cover bg-center bg-no-repeat bg-lightOrange'>
      <Nav/>
      <div className="container mx-auto px-4 xl:max-w-[1320px] max-w-[1164px] pt-20">
        <h1 className='md:text-custom_6xl sm:text-5xl text-4xl font-poppins font-bold text-black text-center leading-120 mb-4'>Welcome To <span className='text-purple leading-120'>Wellnest</span></h1>
        <CommonPara text="Supporting Individuals And Companies In Achieving Their Highest Potential For The Betterment Of Themselves And Our Community." className="text-center max-w-[642px] mx-auto mb-10"/>
<div className='flex justify-center mb-12'><Button btnName="Book A Free Consultation"/></div>
<div className="flex flex-row flex-wrap -mx-3">
    { HeroImageList.map((item,i)=>(
            <div key={i} className={`md:w-1/4 sm:w
            -1/2 w-full flex max-sm:justify-center w px-3 ${i === 0 ? " lg:translate-y-[83px] md:translate-y-8 mb-6 justify-end": ""} ${i=== 2 ? "lg:translate-y-[70.48px] md:translate-y-8 justify-end max-sm:mb-6":""} ${i === 1 ?"mb-6":""}`}>
                <img src={item.img} alt="heroImg" className={`max-w-[303.54px] w-full max-h-[427.45px] rounded-3xl max-xl:object-cover`} />
            </div>
        ))
    }
</div>
      </div> 
      <img src={greenEllipse} alt="ellipse" className='absolute left-0 top-[20%]' />
      <img src={orangeEllipse} alt="orangeEllipse"  className='absolute right-0 top-[39%] z-[-1]'/>
    </div>
  )
}

export default Hero
