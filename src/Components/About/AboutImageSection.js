import React from "react";

const AboutImageSection = ({ image }) => {
  return (
    <div className="lg:w-1/2 flex justify-center">
      <img
        src={image}
        alt="About Section"
        className="max-w-full h-auto object-contain shadow-lg"
      />
    </div>
  );
};

export default AboutImageSection;
