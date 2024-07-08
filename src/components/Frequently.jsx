import React, { useEffect, useState, useRef } from "react";
import { CommonHeading } from "./common/Headings";
import { accordionData } from "./common/Helper";
import { FaqArrow } from "./common/Icon";

const Frequently = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const refs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="pt-[140px]">
      <div className="container xl:max-w-[1164px]">
        <CommonHeading
          className="capitalize text-center mb-10"
          heading="Frequently Asked"
          purpleHeading="Questions"
        />
        <div className="flex flex-col gap-5 xl:max-w-[768px] md:w-10/12 w-full mx-auto">
          {accordionData.map((item, index) => (
            <div
              className={`${
                openAccordion === index ? "pl-[70.5px]" : ""
              } accordion-item py-5 border-solid border-r-[2px] border-b-[2px] border-black rounded-xl transition-all duration-300 ease-in-out px-6 shadow-accordianshadow`}
              key={index}
            >
              <div
                className="accordion-title flex justify-between sm:items-center items-start cursor-pointer max-sm:gap-[0.2px]"
                onClick={() => toggleAccordion(index)}
              >
                <p
                  className={`${
                    openAccordion === index ? "pb-[14px]" : ""
                  } font-poppins font-semibold text-base leading-120 text-black flex gap-1 max-w-[555px]`}
                >
                  {item.titleno} <span>{item.title}</span>
                </p>
                <div className="sm:pt-0 pt-2">
                  <div
                    className={`${
                      openAccordion === index ? "rotate-180" : ""
                    } transition-transform duration-300 ease-linear`}
                  >
                    <FaqArrow className="sm:w-[19px] sm:h-3 w-[17px] h-[10px]" />
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
                        className="font-poppins font-medium text-base leading-normal opacity-70 max-w-[627px]"
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
