import React from 'react'
import { CommonHeading, } from './common/Headings'
import { ServiceList } from './common/Helper'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div className='xl:pt-[140px] lg:pt-28 md:pt-20 sm:pt-16 pt-12 xl:mb-3'>
      <div className="container max-w-[1172px] px-4 mx-auto">
<CommonHeading heading="Wellnest" purpleHeading=" Services" className="text-center md:mb-10 sm:mb-7 mb-5"/>
<div className="flex flex-wrap flex-row -mx-3 justify-center">
{ServiceList.map((item,i)=>(
  <div className={`lg:w-1/3 sm:w-1/2 w-full flex justify-center px-3 ${i < 2 ? "max-lg:mb-6 max-sm:mb-4":""}`}>
    <ServiceCards icon={item.icon} title={item.title} discription={item.discription} name={item.btnname} color={`${i === 1? "bg-skyBlue":"bg-lightGreen"} ${i === 2? "!bg-darkGreen !pointer-events-none":"bg-lightGreen"}`} space={`${i > 0 ?"md:mb-6 mb-3":"md:mb-[52px] mb-3"}`} class={`${i < 2 ? "hidden ":""}`} />
  </div>
))}
</div>
      </div>
    </div>
  )
}

export default Services
