import React, { useState } from "react";
import navlogo from "../assets/images/svg/header/wellnestLogo.svg";

export const Nav = () => {
  const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
    return (
      <div className="container px-3 max-w-[1140px]">
        <div className="py-6 flex items-center justify-between">
          <a href="#">
            <img src={navlogo} alt="logo" className="max-sm:w-[140px]" />
          </a>
          <ul
            className={`flex gap-8 items-center mobileView  ${
              show ? "right-[-100%]" : "right-0"
            }`}
          >
            <li>
              <a href="" className="navLink">
                About Wellnest
              </a>
            </li>
            <li>
              <a href="" className="navLink">
                Our Services
              </a>
            </li>
            <li>
              <a href="" className="navLink">
                Benefits
              </a>
            </li>
            <li>
              <a href="" className="navLink">
                FAQs
              </a>
            </li>
            <li>
              <a href="" className="navLink">
                Upcoming Workshops
              </a>
            </li>
            <li>
              {" "}
              <button className="capitalize block sm:hidden text-white font-poppins font-semibold text-base bg-purple leading-normal border-solid border-r border-b border-black py-[14px] px-6 rounded shadow-buttonShadow">
                Get Started
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="capitalize sm:block hidden text-white font-poppins font-semibold text-base bg-purple leading-normal border-solid border-r border-b border-black py-[14px] px-6 rounded shadow-buttonShadow">
              Get Started
            </button>
            <label className=" lg:hidden" onClick={nav}>
              {show ? (
                <div className="z-20 relative">
                  <span className="flex bg-purple h-1 rounded-3xl duration-300 w-7"></span>
                  <span className="flex bg-purple h-1 rounded-3xl duration-300 w-7 mt-1"></span>
                  <span className="flex bg-purple h-1 rounded-3xl duration-300 w-7 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative">
                  <span className="flex bg-purple absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-1 w-7"></span>
                  <span className="flex bg-purple absolute rounded-3xl -left-7 duration-300 -rotate-45 h-1 w-7 mt-1"></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    );
};

export default Nav;
