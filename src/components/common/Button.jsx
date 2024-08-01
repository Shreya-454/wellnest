export const Button = ({ btnTitle, className,}) => {
  return (
    <button aria-label="btn"
      className={`${className} capitalize text-white font-poppins font-semibold sm:text-base text-sm leading-normal border-solid border-r border-b border-black sm:py-3.5 py-3 sm:px-6 px-4 rounded shadow-buttonShadow bg-purple after:bg-black after:absolute relative z-[1] after:top-0 after:bottom-0 after:right-0 after:left-[200%] hover:after:left-0 after:z-[-1] after:duration-500 overflow-hidden transition-colors ease-linear duration-300`}
    >
      {btnTitle}
    </button>
  );
};
