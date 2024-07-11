import React from "react";
import { Button } from "./common/Button";

const ServiceCards = (props) => {
  return (
    <div
      className={`w-full relative rounded-[30px] pt-4 xl:pt-6 px-4 sm:px-6 pb-5 xl:h-[453px] xl:pb-9 hover:border-transparent duration-300 flex flex-col justify-between items-start border-r-4 border-b-4 border-black overflow-hidden ${props.color}`}
    >
      <div>
        <div className={`sm:w-20 w-16 sm:h-20 h-16 rounded-full flex bg-white justify-center items-center xl:mb-6 sm:mb-4 mb-3`}>
          <img src={props.icon} alt="icons" width={40} height={40} className=" pointer-events-none cursor-none select-none"/>
        </div>
        <h3 className={`md:text-2xl sm:text-xl text-lg font-medium font-poppins !leading-120 text-lightBlack mb-2`}>
          {props.title}
        </h3>
          <p
            className={`md:text-base text-sm leading-150 font-inter text-lightBlack font-normal text-opacity-70 max-xl:mb-6 max-lg:mb-3  ${props.space}`}
          >
            {props.discription}
          </p>
      </div>
        <Button btnName={props.name} />
      <div className={`bg-offWhite select-auto absolute top-0 left-0 right-0 z-[1] bottom-0 backdrop-blur-md flex justify-center items-center ${props.className}`}>
        <div className=" flex flex-col items-center">
          <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full flex bg-white justify-center items-center mb-5">
            <img src={props.icon} alt="icons"  width={40} height={40}/>
          </div>
          <h3 className="font-poppins text-center font-medium !leading-120 sm:text-custom_3xl text-2xl cursor-not-allowed text-lightBlack mb-5">Wellness Store</h3>
          <Button btnName="Coming Soon" className="!py-3 cursor-none"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
 