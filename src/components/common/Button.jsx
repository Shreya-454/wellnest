export const Button = ({ btnName, className, socialmedia }) => {
  return (
    <button
      className={`${className} capitalize text-white font-poppins font-semibold text-base leading-normal border-solid border-r border-b border-black py-[14px] px-6 rounded shadow-buttonShadow bg-purple hover:bg-white hover:text-black transition-colors ease-linear duration-300`}
    >
      {btnName}
      <span>{socialmedia}</span>
    </button>
  );
};
