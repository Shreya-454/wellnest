import React, { useState, useRef } from "react";
import { CommonHeading } from "./common/Headings";
import { accordionData } from "./common/Helper";
import { FaqArrow } from "./common/Icon";
import linevector from "../assets/images/svg/faq/faqLineVector.svg";
import ellipsvector from "../assets/images/svg/faq/faqEllipsVector.svg";
import greenlinevector from "../assets/images/svg/faq/faqGreenLineVector.svg";
import greenellipsevector from "../assets/images/svg/faq/faqGreenEllipsVector.svg";

const Frequently = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const refs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };

  return (
    <div id="faq" className="xl:pt-[140px] lg:pt-24 md:pt-20 sm:pt-16 pt-12 relative overflow-x-clip">
      <img
        src={linevector}
        alt="linevector" width={184} height={51}
        className="w-full lg:max-w-[184px] max-w-[120px] absolute left-0 pointer-events-none max-xl:opacity-50 lg:block hidden"
      />
      <img
        src={ellipsvector}
        alt="ellipsvector" width={150} height={252}
        className="absolute right-0 top-0 pointer-events-none w-full max-w-[150px] h-[252px] max-xl:opacity-50 lg:block hidden"
      />
      <img
        src={greenlinevector}
        alt="greenlinevector" width={184} height={50}
        className="w-full lg:max-w-[184px] max-w-[120px] absolute xl:right-0 -right-[7%] bottom-[6%] max-xl:opacity-50 lg:block hidden -z-[1]"
      />
      <img
        src={greenellipsevector}
        alt="greenellipsevector"  width={120} height={249}
        className="absolute w-full max-w-[120px] left-0 h-[249px] bottom-0 max-xl:opacity-50 lg:block hidden pointer-events-none"
      />
      <div className="container xl:max-w-[1164px] mx-auto px-4 relative z-10">
        <CommonHeading
          className="capitalize text-center mb-10"
          heading="Frequently Asked "
          purpleHeading="Questions"
        />
        <div className="flex flex-col sm:gap-5 gap-[18px] xl:max-w-[768px] md:w-10/12 w-full mx-auto">
          {accordionData.map((item, index) => (
            <div
              className={`${
                openAccordion === index
                  ? "md:pl-[70.5px] sm:pl-[40px] pl-6 pt-6 pb-[23px]"
                  : ""
              } accordion-item py-[18.5px] border-solid border-r-[2px] border-b-[2px] border-black rounded-xl transition-all duration-300 ease-in-out md:px-6 px-5 shadow-accordianshadow`}
              key={index}
            >
              <div
                className="accordion-title flex justify-between sm:items-center items-start cursor-pointer max-sm:gap-[0.2px]"
                onClick={() => toggleAccordion(index)}
              >
                <p
                  className={`${
                    openAccordion === index ? "pb-[14px]" : ""
                  } font-poppins font-semibold md:text-base text-sm leading-12 text-offBlack flex gap-1 max-w-[555px]`}
                >
                  {item.titleno} <span>{item.title}</span>
                </p>
                <div className="sm:pt-0 pt-2">
                  <div
                    className={`${
                      openAccordion === index ? "rotate-180" : ""
                    } transition-transform duration-300 ease-linear`}
                  >
                    <FaqArrow className="w-4 h-[9px]" />
                  </div>
                </div>
              </div>
              <div
                className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  height:
                    openAccordion === index
                      ? refs.current[index]?.scrollHeight
                      : "0px",
                  opacity: openAccordion === index ? 1 : 0,
                }}
                ref={(el) => (refs.current[index] = el)}
              >
                {item.content && (
                  <ul className="list-disc pl-5">
                    {item.content.map((value, idx) => (
                      <li
                        className="font-poppins text-offBlack font-medium md:text-base text-sm leading-normal opacity-70 max-w-[627px]"
                        key={idx}
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
