import visionImg from "../assets/images/webp/vision/visionImg.webp"
import { CommonHeading, CommonPara } from "./common/Headings";

const Vision = () => {
  return (
    <div className=" mt-36 pt-1.5">
      <img src={visionImg} alt="vision" />
      <CommonHeading
        heading="My Vision For "
        purpleHeading="Tomorrow"
        className="mt-10 text-center px-4"
      />
      <p className="max-w-[886px] font-poppins font-normal text-center text-base mx-auto leading-150 text-black text-opacity-70">
        To support our society in realizing a better self, a better community
        and better <span className="block"></span> world. At the heart of our
        mission lies a deep commitment to fostering positive change{" "}
        <span className="block"></span> within individuals, communities, and the
        world at large. We believe that by empowering each person to realize
        their full potential, we can collectively build a more compassionate,
        connected, and sustainable future.
      </p>
    </div>
  );
}

export default Vision
