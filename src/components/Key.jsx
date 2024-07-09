import keyImg from "../assets/images/webp/key/keyImg.webp"
import bottomQuotes from "../assets/images/svg/key/bottomQuotes.svg"
import topQuotes from "../assets/images/svg/key/topQuotes.svg"
import keyDotsEllipse from "../assets/images/svg/key/dotsEllipse.svg"
import pinkVector from "../assets/images/svg/key/pinkVector.svg"
import pupleWave from "../assets/images/svg/key/purpleWave.svg"

const Key = () => {
  return (
    <section className="xl:mt-32 lg:mt-28 md:mt-20 mt-16 lg:h-[404px] max-lg:pb-6 bg-lightOrange z-[2] relative">
      <img
        src={pupleWave}
        alt="wave"
        width={184.8} height={48.63}
        className="absolute lg:bottom-[-20%] max-md:max-w-[100px] bottom-[-6%] left-0"
      />

      <img
        src={pinkVector}
        alt="pinkVector" width={80} height={177}
        className="absolute top-0 left-0 pointer-events-none z-0"
      />
      <img
        src={keyDotsEllipse}
        alt="ellipse2" width={192} height={192}
        className="absolute bottom-0 left-[-4%] pointer-events-none z-0"
      />
      <div className="container max-w-[1140px] relative px-3">
        <img
          src={topQuotes}
          alt="top"
          class="absolute top-[18%] lg:block hidden left-[-6%] pointer-events-none z-0"
        />
        <img
          src={bottomQuotes} width={74} height={60.48}
          alt="bottom"
          className="bottom-[38%] lg:block hidden left-[24%] absolute pointer-events-none"
        />
        <div className="flex flex-wrap flex-col-reverse justify-between lg:flex-row -mx-3 items-center">
          <div className="lg:w-7/12 w-full px-3 max-lg:mt-4">
            <h3 className="font-poppins lg:text-start text-center lg:mb-6 sm:mb-4 mb-2 font-semibold !leading-120 sm:text-2xl text-xl text-black lg:max-w-[618px]">
              “The key to change is honesty! It’s time we slow down and really
              look at the different parts of our lives that are feeding us and
              propelling us forward - and parts that are only holding us back.”
            </h3>
            <p className="font-poppins sm:text-xl text-lg lg:text-start text-center text-darkOrange pb-1 font-medium leading-150 ">
              Coach Mariyam
            </p>
            <p className="font-poppins font-normal lg:text-start text-center sm:text-base text-sm leading-150 text-darkOrange">
              CEO
            </p>
          </div>
          <div className="lg:w-5/12 w-full flex lg:justify-end max-sm:px-6 justify-center px-3">
            <div className="relative z-[2] ">
              <img
                src={keyDotsEllipse}
                alt="dotEllipse" width={192} height={192}
                className="absolute pointer-events-none bottom-0 left-[-36%]"
              />
              <img
                src={keyImg}
                alt="key" width={362.11} height={427.94}
                className="max-w-[362px] z-1 shadow-keyImgShadow rounded-[24px] relative top-[-6%] right-2  custom_sm:right-[26px] h-full sm:max-h-[427px] w-full"
              />
              <div className="border-[12px] z-[-1] max-custom_xs:hidden block  border-solid border-purple custom_sm:w-[362px] w-[320px] max-custom_sm:ml-6 max-custom_sm:h-[386px] max-sm:h-[425px] absolute top-0 bottom-0 lg:right-0 sm:h-[428px] h-[380px] rounded-[24px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Key
