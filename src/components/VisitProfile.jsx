import React from "react";
import vector from "../assets/images/svg/visitprofile/profileVector.svg";
import wellnestlogo from "../assets/images/svg/visitprofile/wellnestProfileLogo.svg";
import { LinkdinVisitProfile } from "./common/Icon";
import ellipsvector from "../assets/images/svg/visitprofile/profileEllipsVector.svg";

const VisitProfile = () => {
  return (
    <div className="pt-[71px] lg:px-0 px-4">
      <div className="container xl:max-w-[1164px] px-4 mx-auto bg-orange lg:py-[116px] sm:py-24 py-20 rounded-3xl border-solid border-r-8 border-b-8 border-black relative overflow-hidden">
        <img
          src={vector}
          alt="vector"
          className="absolute w-full top-[-7%] left-0 xl:max-w-[545px] max-w-[500px] h-[651px] lg:block hidden"
        />
        <img
          src={ellipsvector}
          alt="ellipsvector"
          className="absolute w-full max-w-[91px] bottom-0 right-0"
        />
        <div className="flex flex-row flex-wrap justify-between">
          <div className="lg:w-5/12 w-full flex justify-center">
            <img
              src={wellnestlogo}
              alt="wellnestlogo"
              className="lg:w-[372px] lg:h-[237px] sm:w-[350px] w-[220px] sm:h-[180px] h-[110px]"
            />
          </div>
          <div className="lg:w-6/12 w-full flex flex-col lg:items-start items-center lg:pt-0 md:pt-11 sm:pt-9 pt-6">
            <h3 className="lg:text-4xl md:text-3xl text-xl lg:text-start text-center text-black font-semibold capitalize !leading-120 lg:max-w-[513px] lg:px-0 sm:px-5 px-0 font-poppins lg:mb-10 sm:mb-8 mb-6">
              For more details on my academic and professional achievements,
              please visit my LinkedIn profile.
            </h3>
            <a
              rel="noopener noreferrer"
              className="bg-white capitalize font-poppins font-semibold text-base leading-normal border-solid border-r border-b border-black py-[14px] px-6 rounded shadow-buttonShadow !text-black flex gap-[6px] max-w-[252px]"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              Visit My Profile
              <span>
                <LinkdinVisitProfile />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitProfile;
