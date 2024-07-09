import React from 'react'
import { CommonHeading, CommonPara } from './common/Headings'
import { UnlockData } from './common/Helper';
import greenEllipse from "../assets/images/svg/unlock/greenEllipse.svg";

const Unlock = () => {
  return (
    <section id='workshops' className="xl:py-32 lg:py-28 md:py-20 z-[1] relative sm:py-16 py-12 xl:my-3">
      <img
        src={greenEllipse}
        alt="green"
        className="absolute bottom-[18%] pointer-events-none left-0 z-[-1] max-md:max-w-[66px]"
      />
      <div className="container max-w-[1164px] px-4 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between">
          <CommonHeading
            heading="Unlock Your Potential With  "
            purpleHeading="Inspiring Events"
            className="lg:max-w-[388px] max-w-[664px] max-lg:mx-auto lg:text-start text-center"
          />
          <div>
            {UnlockData.map((obj, i) => (
              <div
                key={i}
                className="max-w-[594px] max-lg:mx-auto mb-6 border-b border-lightBlack2 shadow-borderShadow "
              >
                <div className="flex sm:flex-row pt-6 flex-col md:gap-6 gap-3">
                  <div className="mb-0">
                    <p className="lg:text-custom_5xl sm:text-start text-center md:text-4xl sm:text-3xl text-2xl text-black font-semibold !leading-78 font-poppins">
                      {obj.dates}
                    </p>
                    <CommonPara
                      text="August 2023"
                      className="pt-2 !leading-100 sm:text-start text-center text-nowrap"
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium md:text-2xl sm:text-start text-center sm:text-xl text-lg md:mb-4 mb-2 !leading-107 text-black">
                      {obj.tittle}
                    </h3>
                    <CommonPara
                      text="Duration: 4 weekly sessions"
                      className="!leading-78 sm:text-start text-center"
                    />
                    <div className="flex items-center sm:justify-start justify-center md:my-6 my-2 gap-3.5">
                      <p className="font-bold sm:text-base text-sm text-black leading-150">
                        Cost: $100
                      </p>
                      <a
                        href=""
                        className="font-bold sm:text-base text-sm text-purple !leading-150"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unlock
