import whatImg from "../assets/images/webp/whatDo/manDo.webp";
import { Button } from "./common/Button";
import { CommonHeading, CommonPara } from "./common/Headings";
import orangeEllipse from "../assets/images/svg/whatWhy/orangeEllipse.svg";

const WhatWhy = () => {
  return (
    <section
      id="benefits"
      className="max-md:py-6 sm:-mt-6 -mt-3 relative z-[1] bg-lightOrange overflow-x-clip"
    >
      <img
        src={orangeEllipse}
        alt="orange"
        width={162}
        height={234}
        className="absolute top-0 max-lg:max-w-[66px] right-0 z-[-1]"
      />
      <div className="max-w-[1920px] mx-auto px-4 lg:px-0 container">
        <div className="flex items-center max-md:px-4 md:flex-row flex-col -mx-3">
          <div className="2xl:w-1/2">
            <img
              src={whatImg}
              alt="whatImg"
              width={732}
              height={632}
              className="xl:w-[732px] 2xl:w-full lg:w-[500px] md:w-[360px] max-h-[632px] object-cover"
            />
          </div>
          <div className="xl:pl-12 lg:py-0 md:py-5 2xl:w-1/2 lg:ps-6 ps-3 max-md:mt-4 ">
            <CommonHeading
              heading="Why I Do"
              purpleHeading=" What I Do?"
              className="md:text-start text-center"
            />
            <CommonPara
              text="To bridge the information and services gap to support our
        community in both corporate and individual wellness."
              className="max-w-[538px] md:text-start text-center  pt-2"
            />
            <div className="flex xl:mt-10 md:justify-start justify-center mt-4">
              <Button btnTitle="Book A Free Consultation Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWhy;
