import visionImg from "../assets/images/webp/vision/visionImg.webp"
import { Button } from "./common/Button";
import { CommonHeading, CommonPara } from "./common/Headings";

const Vision = () => {
  return (
    <div className=" xl:mt-36 lg:mt-28 md:mt-20 sm:mt-16 mt-12 xl:pt-1.5">
      <img
        src={visionImg}
        alt="vision"
        className="max-w-[1920px] max-sm:object-cover max-sm:h-[260px] w-full mx-auto"
      />
      <CommonHeading
        heading="My Vision For "
        purpleHeading="Tomorrow"
        className="lg:mt-10 md:mt-8 mt-3 text-center px-4"
      />
      <p className="md:max-w-[886px] font-poppins font-normal text-center sm:text-base max-lg:px-4 text-sm md:pt-4 pt-2 mx-auto leading-150 text-black text-opacity-70">
        To support our society in realizing a better self, a better{" "}
        <span className="lg:block"></span> community and better world. At the
        heart of our mission lies a deep commitment to fostering positive change
        within individuals, communities, and the world at large. We believe that
        by empowering each person to realize their full potential, we can
        collectively build a more compassionate, connected, and sustainable
        future.
      </p>
      <div className="flex lg:mt-10 md:mt-8 mt-3 justify-center">
        <Button btnName="Book A Free Consultation Now" />
      </div>
    </div>
  );
}

export default Vision
