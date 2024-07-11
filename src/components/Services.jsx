import React from 'react'
import { CommonHeading, } from './common/Headings'
import { ServiceList } from './common/Helper'
import greenVector from '../assets/images/svg/services/servicegreenvector.svg'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div id='services' className='xl:pt-[140px] lg:pt-24 md:pt-20 sm:pt-16 pt-12 xl:pb-3 max-lg:pb-9 relative'>
      <div className="container max-w-[1172px] px-4 mx-auto">
<CommonHeading heading="Wellnest" purpleHeading=" Services" className="text-center md:mb-10 sm:mb-7 mb-5"/>
<div className="flex flex-wrap flex-row xl:-mx-3 -mx-2 justify-center">
{ServiceList.map((item,i)=>(
  <div key={i} className={`lg:w-1/3 sm:w-1/2 w-full flex justify-center px-2 xl:px-3 ${i < 2 ? "max-lg:mb-4":""}`}>
    <ServiceCards icon={item.icon} title={item.title} discription={item.discription} name={item.btnname} color={`${i === 1? "bg-skyBlue":"bg-lightGreen"} ${i === 2 ? "!bg-darkGreen !pointer-events-none !cursor-none select-none z-[-1]":"bg-lightGreen "}`} space={`${i > 0 ?"xl:mb-6 mb-3":"xl:mb-[52px] mb-3"} ${i === 1 ?"pr-3":"" }`} className={`${i < 2 ? "hidden ":""}`} />
  </div>
))}
</div>
      </div>
      <img src={greenVector} alt="greenVector" className='absolute sm:top-[10%] top-[2%] right-0 max-md:max-w-[120px] max-sm:w-20' />
    </div>
  )
}

export default Services
