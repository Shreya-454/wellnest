export const Button = ({ btnName, className, socialmedia }) => {
  return (
    <button aria-label="btn"
      className={`${className} capitalize text-white font-poppins font-semibold sm:text-base text-sm leading-normal border-solid border-r border-b border-black sm:py-3.5 py-3 sm:px-6 px-4 rounded shadow-buttonShadow bg-purple hover:bg-white hover:text-black transition-colors ease-linear duration-300`}
    >
      {btnName}
      <span>{socialmedia}</span>
    </button>
  );
};
