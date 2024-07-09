import React, { useState } from "react";
import navlogo from "../assets/images/svg/header/wellnestLogo.svg";
import { NavLinkList } from "./common/Helper";
import { Link } from "react-router-dom";
import { Button } from "./common/Button";

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
      <div className="container px-4 max-w-[1172px]">
        <div className="py-6 flex items-center justify-between">
          <a href="#">
            <img src={navlogo} alt="logo" className="max-sm:w-[140px]" />
          </a>
          <ul
            className={`flex gap-8 items-center mobileView  ${
              show ? "right-[-100%]" : "right-0"
            }`}
          >
            {NavLinkList.map((data, index) => (
              <li key={index}>
                <Link  onClick={nav} to={data.path} className="navLink">
                  {data.link}
                </Link>
              </li>
            ))}
            <li>
              <Button
                btnName="Get Started"
                className="sm:hidden block !px-[29px]"
              />
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Button
              btnName="Get Started"
              className="sm:block hidden !px-[29px]"
            />
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
