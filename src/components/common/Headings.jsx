export const CommonHeading = ({ purpleHeading, heading, className }) => {
  return (
    <h2
      className={`font-poppins text-black font-semibold !leading-120 md:text-5xl sm:text-4xl text-3xl ${className}`}
    >
      {heading}
      <span className="text-purple">{purpleHeading}</span>
    </h2>
  );
};

export const CommonPara = ({ text, className }) => {
  return (
    <p
      className={`font-poppins sm:text-base text-sm font-normal leading-150 text-black opacity-70 ${className}`}
    >
      {text}
    </p>
  );
};
