import React from "react";
import { Button } from "./common/Button";

const ServiceCards = (props) => {
  return (
    <div
      className={`w-full relative rounded-[30px] pt-6 px-6 pb-9 border-r-4 border-b-4 border-black overflow-hidden ${props.color}`}
    >
      <div className="w-20 h-20 rounded-full flex bg-white justify-center items-center mb-6">
        <img src={props.icon} alt="icons" />
      </div>
      <h3 className="text-2xl font-medium font-poppins leading-120 text-lightBlack mb-2">
        {props.title}
      </h3>
      <p
        className={`text-base leading-150 font-inter text-lightBlack font-normal text-opacity-70  ${props.space}`}
      >
        {props.discription}
      </p>
      <Button btnName={props.name} />
      <div className={`bg-offWhite absolute pointer-events-none top-0 left-0 right-0 bottom-0 backdrop-blur-md flex justify-center items-center ${props.class}`}>
        <div className=" flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex bg-white justify-center items-center mb-5">
            <img src={props.icon} alt="icons" />
          </div>
          <h3 className="font-poppins text-center font-medium leading-120 text-[32px] cursor-not-allowed text-lightBlack mb-5">Wellness Store</h3>
          <Button btnName="Coming Soon" className="!py-3"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
 