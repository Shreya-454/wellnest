import React from 'react'
import meetImg from '../assets/images/webp/meetImages/meetImg.webp'
import { CommonHeading, CommonPara } from './common/Headings'
import qrImage from '../assets/images/webp/meetImages/qrScaner.webp'
const Meet = () => {
  return (
    <div className='relative max-w-[1440px] mx-auto pt-[365px]'>
      <div className="container max-w-[1314px] px-3 -translate-x-[6%]">
<div className="flex flex-row flex-wrap -mx-3">
<div className="w-1/2 px-3">
<img src={meetImg} alt="meetImg" className='max-w-[611px] w-full'/>
</div>
<div className="w-1/2 px-3 flex justify-end">
<div className='max-w-[558px] w-full'>
  <CommonHeading heading="Meet " purpleHeading=" Mariam" className=" after:absolute relative after:w-[55px] after:h-[3px] after:bg-purple after:left-0 after:-bottom-1 mb-7"/>
  <p className='font-medium font-poppins text-xl leading-120 text-black text-opacity-70 mb-4'>Hello There, I’m Mariam, Your New Health Coach!</p>
  <CommonPara text="After 2 degrees, 16+ years in corporate, and a decade of working through my own health issues, I embarked on a journey to heal, chuck the societal script and find a purpose that both motivated me everyday and allowed me to make a difference in the world." className="mb-4"/>
  <CommonPara text="Through my own journey, I discovered the power of coaching and sought the guidance of a mentor who empowered me to overcome obstacles and reclaim control of my life. Now, as a Certified Health Coach, I am committed to paying forward this transformative support to others." className="mb-10"/>
  <div className="flex flex-row flex-wrap w-full mb-10">
  <div className="w-1/3 border-r border-orange">
  <CommonHeading heading="02" className="mb-2"/>
  <CommonPara text="Books Published" className="mb-2.5"/>
  </div>
  <div className="w-1/3 border-r border-orange pl-9">
  <CommonHeading heading="4.5" className="mb-2"/>
  <CommonPara text="User Reviews" className="mb-2.5"/>
  </div>
  <div className="w-1/3 pl-9">
  <CommonHeading heading="04" className="mb-2"/>
  <CommonPara text="Best Seller Awards" className="mb-2.5"/>
  </div>
   </div>
   <div className="w-full max-w-[558px] py-[15px] px-[18px] rounded-3xl bg-purple border-r-4 border-b-4 border-black flex gap-[37px]">
    <img src={qrImage} alt="QRImg" className='max-w-[130px]' />
    <div>
      <h3 className='font-poppins text-2xl font-medium leading-120 text-white mb-[7px]'>Coach Mariam.</h3>
      <p>Mail : coachmariam@gmail.com</p>
      <p>  Phone : (+1) 987 643 4000</p>
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
