import React from "react";
import purplevector from "../assets/images/svg/footer/footerVector.svg";
import footerlogo from "../assets/images/svg/footer/footerLogo.svg";
import { footerLinkList, footerSocialIcon } from "./common/Helper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="xl:mt-[140px] lg:mt-24 md:mt-20 sm:mt-16 mt-12 bg-footerBg md:pt-[107px] sm:pt-20 pt-12 pb-4 relative">
      <img
        src={purplevector}
        alt="purplevector"
        className="absolute max-w-[184.8px] w-full top-6 pointer-events-none md:block hidden"
      />
      <img
        src={purplevector}
        alt="purplevector"
        className="absolute bottom-[90.37px] right-0 w-full max-w-[184.8px] pointer-events-none md:block hidden"
      />
      <div className="container xl:max-w-[1164px] px-4 mx-auto md:pb-[55px] sm:pb-12 pb-10">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="lg:w-5/12 w-full">
            <Link aria-label="footer logo" to="/" rel="noopener noreferrer">
              <img
                src={footerlogo}
                alt="footerlogo"
                className="w-full md:max-w-[187.25px] sm:max-w-[150px] max-w-[120px] mb-[10px]"
              />
            </Link>
            <p className="lg:max-w-[473px] md:max-w-[548px] font-poppins sm:text-base text-sm font-normal leading-normal text-black opacity-80 md:mb-[21px] mb-4">
              At WellNest, we are dedicated to fostering personal and
              professional growth through holistic coaching and consultancy
              services.
            </p>
            <div className="flex gap-4">
              {footerSocialIcon.map((obj, id) => (
                <Link
                  key={id}
                  to={obj.url}
                  aria-label="social link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {obj.icons}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-5/12 w-full flex lg:justify-center lg:pt-0 pt-9">
            <div className="flex md:gap-[66px] gap-[50px]">
              {footerLinkList.map((obj, id) => (
                <ul key={id} className="flex flex-col">
                  <li className="font-poppins md:text-base text-sm font-medium text-black mb-3 sm:mb-[14px]">
                    {obj.title}
                  </li>
                  {obj.links.map((data, index) => (
                    <li key={index} className="mb-[10px] sm:mb-3">
                      <Link
                        to={data.path}
                        className="font-poppins font-normal md:text-base text-sm text-black opacity-70 hover:opacity-100 transition-opacity ease-linear duration-300 text-nowrap"
                      >
                        {data.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.5px] border-solid w-full border-black opacity-10"></div>
      <div className="max-w-[1164px] mx-auto py-[15px] flex justify-between px-4">
        <p className="font-normal capitalize leading-normal md:text-base sm:text-sm text-xs text-black opacity-80 font-poppins">
          The Wellnest {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="capitalize font-poppins font-normal md:text-base sm:text-sm text-xs text-black opacity-70">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
