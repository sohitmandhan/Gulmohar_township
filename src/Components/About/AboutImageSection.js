import React from "react";
import sitting from "../../Images/sitting.png";

const AboutImageSection = () => {
  return (
    <div className="lg:w-1/2 flex justify-center">
      <img
        src={sitting}
        alt="Gulmohar Township"
        className="max-w-full h-auto object-contain shadow-lg"
      />
    </div>
  );
};

export default AboutImageSection;
