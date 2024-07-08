import React from 'react'
import { Button } from './common/Button'

const ServiceCards = (props) => {
  return (
      <div className={`w-full relative rounded-[30px] pt-6 px-6 pb-9 border-r-4 border-b-4 border-black ${props.color}`}>
<div className="w-20 h-20 rounded-full flex bg-white justify-center items-center mb-6">
    <img src={props.icon} alt="icons" />
</div>
<h3 className='text-2xl font-medium font-poppins leading-120 text-lightBlack mb-2'>{props.title}</h3>
<p className={`text-base leading-150 font-inter text-lightBlack font-normal text-opacity-70  ${props.space}`}>{props.discription}</p>
<Button btnName={props.name} />
<div className="bg-[#FFFFFF33]"></div>
</div>
  )
}

export default ServiceCards
