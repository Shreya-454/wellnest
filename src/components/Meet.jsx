import React from 'react'
import meetImg from '../assets/images/webp/meetImages/meetImg.webp'
import { CommonHeading, CommonPara } from './common/Headings'
import qrImage from '../assets/images/webp/meetImages/qrScaner.webp'
import meetEllipse from '../assets/images/webp/meetImages/meetEllipse.webp'
const Meet = () => {
  return (
    <div className='relative max-w-[1440px] mx-auto pt-[365px]'>
      <img src={meetEllipse} alt="ellipse" className='absolute top-0 left-0 right-0 w-full z-[-1]' />
      <div className="container max-w-[1314px] px-3 2xl:-translate-x-[6%]">
<div className="flex flex-row flex-wrap -mx-3 items-center">
<div className="lg:w-1/2 w-full flex justify-center px-3">
<img src={meetImg} alt="meetImg" className='max-w-[611px] w-full'/>
</div>
<div className="lg:w-1/2 w-full px-3 flex justify-center lg:justify-end">
<div className='lg:max-w-[558px] w-full'>
  <CommonHeading heading="Meet " purpleHeading=" Mariam" className=" after:absolute relative after:w-[55px] after:h-[3px] after:bg-purple after:left-0 after:-bottom-1 mb-7 max-lg:max-w-[324px] mx-auto max-lg:text-center"/>
  <p className='font-medium font-poppins text-xl leading-120 text-black text-opacity-70 mb-4 max-lg:text-center'>Hello There, I’m Mariam, Your New Health Coach!</p>
  <CommonPara text="After 2 degrees, 16+ years in corporate, and a decade of working through my own health issues, I embarked on a journey to heal, chuck the societal script and find a purpose that both motivated me everyday and allowed me to make a difference in the world." className="mb-4 max-lg:text-center"/>
  <CommonPara text="Through my own journey, I discovered the power of coaching and sought the guidance of a mentor who empowered me to overcome obstacles and reclaim control of my life. Now, as a Certified Health Coach, I am committed to paying forward this transformative support to others." className="mb-10 max-lg:text-center"/>
  <div className="flex flex-row flex-wrap w-full mb-10">
  <div className="w-1/3 border-r border-orange">
  <CommonHeading heading="02" className="mb-2 max-lg:text-center"/>
  <CommonPara text="Books Published" className="mb-2.5 max-lg:text-center"/>
  </div>
  <div className="w-1/3 border-r border-orange lg:pl-9">
  <CommonHeading heading="4.5" className="mb-2 max-lg:text-center"/>
  <CommonPara text="User Reviews" className="mb-2.5 max-lg:text-center"/>
  </div>
  <div className="w-1/3 lg:pl-9">
  <CommonHeading heading="04" className="mb-2 max-lg:text-center"/>
  <CommonPara text="Best Seller Awards" className="mb-2.5 max-lg:text-center"/>
  </div>
   </div>
   <div className=' flex max-lg:justify-center max-sm:mt-24'>
     <div className="w-full max-w-[558px] py-[15px] px-[18px] rounded-3xl bg-purple border-r-4 border-b-4 border-black max-sm:flex-col flex items-center gap-5 sm:gap-[37px]">
      <img src={qrImage} alt="QRImg" className='max-w-[130px] max-sm:-translate-y-20' />
      <div className='max-sm:-mt-20'>
      <h3 className='font-poppins text-2xl font-medium leading-120 text-white mb-[7px] max-sm:text-center'>Coach Mariam.</h3>
      <p className='font-inter text-custom_lg tracking-[0.01em] text-white text-opacity-90 leading-180 max-sm:text-center'>Mail : coachmariam@gmail.com</p>
      <p className='font-inter text-custom_lg tracking-[0.01em] text-white text-opacity-90 leading-180 max-sm:text-center'>Phone : (+1) 987 643 4000</p>
    </div>
   </div>
  </div>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Meet
