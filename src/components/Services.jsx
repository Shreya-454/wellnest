import React from 'react'
import { CommonHeading, } from './common/Headings'
import { ServiceList } from './common/Helper'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div className='pt-[140px]'>
      <div className="container max-w-[1164px] px-3 mx-auto">
<CommonHeading heading="Wellnest" purpleHeading=" Services" className="text-center mb-10"/>
<div className="flex flex-wrap flex-row -mx-3 justify-center">
{ServiceList.map((item,i)=>(
  <div className={`lg:w-1/3 sm:w-1/2 w-full flex justify-center px-3 ${i < 2 ? "max-lg:mb-6":""}`}>
    <ServiceCards icon={item.icon} title={item.title} discription={item.discription} name={item.btnname} color={`${i === 1? "bg-skyBlue":"bg-lightGreen"} ${i === 2? "!bg-darkGreen !pointer-events-none":"bg-lightGreen"}`} space={`${i > 0 ?"mb-6":"mb-[52px]"}`} class={`${i < 2 ? "hidden ":""}`} />
  </div>
))}
</div>
      </div>
    </div>
  )
}

export default Services
