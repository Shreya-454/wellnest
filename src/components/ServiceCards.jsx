import React from "react";
import { Button } from "./common/Button";

const ServiceCards = (props) => {
  return (
    <div
      className={`w-full max-w-[364px] relative rounded-[30px] pt-4 sm:pt-6 px-4 sm:px-6 pb-5 sm:pb-9 hover:scale-[1.03] duration-300 border-r-4 border-b-4 border-black overflow-hidden ${props.color}`}
    >
      <div className="sm:w-20 w-16 sm:h-20 h-16 rounded-full flex bg-white justify-center items-center md:mb-6 sm:mb-4 mb-3">
        <img src={props.icon} alt="icons" />
      </div>
      <h3 className="md:text-2xl sm:text-xl text-lg font-medium font-poppins !leading-120 text-lightBlack mb-2">
        {props.title}
      </h3>
      <p
        className={`md:text-base text-sm leading-150 font-inter text-lightBlack font-normal text-opacity-70  ${props.space}`}
      >
        {props.discription}
      </p>
      <Button btnName={props.name} />
      <div className={`bg-offWhite absolute pointer-events-none top-0 left-0 right-0 bottom-0 backdrop-blur-md flex justify-center items-center ${props.class}`}>
        <div className=" flex flex-col items-center">
          <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full flex bg-white justify-center items-center mb-5">
            <img src={props.icon} alt="icons" />
          </div>
          <h3 className="font-poppins text-center font-medium !leading-120 sm:text-custom_3xl text-2xl cursor-not-allowed text-lightBlack mb-5">Wellness Store</h3>
          <Button btnName="Coming Soon" className="!py-3"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
 