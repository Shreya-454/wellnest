import React from 'react'
import meetImg from '../assets/images/webp/meet/meetImg.webp'
import { CommonHeading, CommonPara } from './common/Headings'
import qrImage from '../assets/images/webp/meet/qrScaner.webp'
import meetEllipse from '../assets/images/webp/meet/meetEllipse.webp'
const Meet = () => {
  return (
    <div className=' relative' id='about'>
        <img src={meetEllipse} alt="ellipse" className='absolute top-0  object-cover w-full z-[-1]' />
      <div className='max-w-[1440px] mx-auto xl:pt-[405px] lg:pt-28 sm:pt-[140px] pt-24'>
        <div className="container max-w-[1322px] px-4 xl:-translate-x-[4%]">
      <div className="flex flex-row flex-wrap -mx-3">
      <div className="lg:w-1/2 w-full flex justify-center px-3">
      <div className='h-auto max-lg:mb-7 max-sm:mb-5'>
        <div className=' after:inset-0 after:absolute relative after:border-[12px] after:border-purple after:z-[-1] after:rounded-3xl rounded-3xl object-cover'><img src={meetImg} alt="meetImg" className='lg:max-w-[569.58px] max-w-[380px] sm:-translate-y-10 sm:-translate-x-10 w-full shadow-keyImgShadow rounded-3xl ' width={569.58} height={673.14}/></div>
      </div>
      </div>
      <div className="lg:w-1/2 w-full px-3 flex justify-center lg:justify-end -mt-7">
      <div className='lg:max-w-[558px] w-full'>
        <CommonHeading heading="Meet " purpleHeading=" Mariam" className=" after:absolute relative after:w-[55px] after:h-[3px] after:bg-purple after:left-0 after:-bottom-2.5 mb-5 md:mb-7 max-lg:max-w-[324px] max-md:max-w-[243px] max-sm:max-w-[203px] mx-auto max-lg:text-center "/>
        <p className='font-medium font-poppins sm:text-xl text-base leading-120 text-black text-opacity-70 md:mb-4 sm:mb-3 mb-2 max-lg:text-center'>Hello There, I’m Mariam, Your New Health Coach!</p>
        <CommonPara text="After 2 degrees, 16+ years in corporate, and a decade of working through my own health issues, I embarked on a journey to heal, chuck the societal script and find a purpose that both motivated me everyday and allowed me to make a difference in the world." className="sm:mb-4 mb-2 max-lg:text-center"/>
        <CommonPara text="Through my own journey, I discovered the power of coaching and sought the guidance of a mentor who empowered me to overcome obstacles and reclaim control of my life. Now, as a Certified Health Coach, I am committed to paying forward this transformative support to others." className="md:mb-10 sm:mb-7 mb-5 max-lg:text-center"/>
        <div className="flex flex-row flex-wrap w-full md:mb-9 sm:mb-7 mb-5">
        <div className="w-1/3 after:w-[1px] after:h-[88px] after:absolute relative after:bg-orange after:right-0 after:top-1 max-sm:pr-1">
        <CommonHeading heading="02" className="mb-2 max-lg:text-center"/>
        <CommonPara text="Books Published" className="mb-2 max-lg:text-center"/>
        </div>
        <div className="w-1/3 after:w-[1px] after:h-[88px] after:absolute max-sm:px-1 relative after:bg-orange after:right-0 after:top-1 lg:pl-9">
        <CommonHeading heading="4.5" className="mb-2 max-lg:text-center"/>
        <CommonPara text="User Reviews" className="mb-2 max-lg:text-center"/>
        </div>
        <div className="w-1/3 lg:pl-9">
        <CommonHeading heading="04" className="mb-2 max-lg:text-center"/>
        <CommonPara text="Best Seller Awards" className="mb-2 max-lg:text-center"/>
        </div>
         </div>
         <div className=' flex max-lg:justify-center max-sm:mt-24'>
       <div className="w-full max-w-[558px] py-[13px] px-[18px] rounded-3xl bg-purple border-r-4 border-b-4 border-black max-sm:flex-col flex items-center gap-5 sm:gap-[37px] box-border">
        <img src={qrImage} alt="QRImg" className='max-w-[130px] max-sm:-translate-y-20' height={130} width={130} />
        <div className='max-sm:-mt-20'>
        <h3 className='font-poppins text-xl sm:text-2xl font-medium !leading-120 text-white mb-[7px] max-sm:text-center'>Coach Mariam.</h3>
        <a href='mailto:coachmariam@gmail.com' className='font-inter text-base sm:text-custom_lg tracking-[0.01em] text-white text-opacity-90 leading-180 max-sm:text-center'>Mail : coachmariam@gmail.com</a>
        <a href='tel:(+1) 987 643 4000' className='font-inter text-base sm:text-custom_lg tracking-[0.01em] text-white text-opacity-90 leading-180 max-sm:text-center'>Phone : (+1) 987 643 4000</a>
      </div>
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
