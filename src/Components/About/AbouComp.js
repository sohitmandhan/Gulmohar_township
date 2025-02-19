import React from "react";
import AboutTextSection from "./AboutTextSection";
import AboutImageSection from "./AboutImageSection";

const AbouComp = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-10 py-16 gap-12">
      <AboutTextSection />
      <AboutImageSection />
    </div>
  );
};

export default AbouComp;
