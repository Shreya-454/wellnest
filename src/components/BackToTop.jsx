import React, { useState } from "react";
import { UpArrow } from "./common/Icon";
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="group animate-bounce hover:border-2  flex justify-center w-[45px] bottom-transparent hover:border-black  h-[45px] bg-purple group rounded-full items-center p-2  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300   hover:shadow-[1px_1px_1px_1px_purple-600] "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
        <div className="group-hover:scale-110 duration-300">
            <UpArrow />
        </div>
      </button>
    </div>
  );
};

export default BackToTop;
