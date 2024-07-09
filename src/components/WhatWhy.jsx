import whatImg from "../assets/images/webp/whatDo/doImg.webp"
import { Button } from "./common/Button";
import { CommonHeading, CommonPara } from "./common/Headings";

const WhatWhy = () => {
  return (
    <div className="mt-3 max-md:px-4 bg-lightOrange">
      <div className="max-w-[1920px] mx-auto px-3  container">
        <div className="flex items-center bg-lightOrange md:flex-row flex-col -mx-3">
          <img
            src={whatImg}
            alt="whatImg"
            className="xl:w-[732px] lg:w-[500px] md:w-[360px] max-h-[632px]"
          />
          <div className="xl:pl-12 lg:ps-6 ps-3 max-md:mt-5 ">
            <CommonHeading
              heading="Why I Do"
              purpleHeading="What I Do?"
              className="md:text-start text-center"
            />
            <CommonPara
              text="To bridge the information and services gap to support our
        community in both corporate and individual wellness."
              className="max-w-[538px] md:text-start text-center md:pt-4 pt-2"
            />
            <div className="flex lg:mt-10 md:justify-start justify-center md:mt-8 mt-3">
              <Button btnName="Book A Free Consultation Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWhy
