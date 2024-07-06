export const CommonHeading = ({ purpleHeading, heading, className }) => {
  return (
    <h2
      className={`font-poppins text-black font-semibold leading-120 text-5xl ${className}`}
    >
      {heading}
      <span className="text-purple">{purpleHeading}</span>
    </h2>
  );
};

export const CommonPara = (text) => {
  return (
    <p
      className={`font-poppins text-base font-normal leading-150 text-black opacity-70 ${className}`}
    >
      {text}
    </p>
  );
};
