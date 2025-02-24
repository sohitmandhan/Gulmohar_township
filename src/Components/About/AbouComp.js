import React from "react";
import { useLocation } from "react-router-dom";
import AboutTextSection from "./AboutTextSection";
import AboutImageSection from "./AboutImageSection";
import { ABOUT_TEXT } from "../Constants/AboutConstants";

const AboutComp = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="flex flex-col items-center justify-center px-10 py-16 gap-12">
      {/* Show only one section on '/' */}
      {!isAboutPage ? (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <AboutTextSection data={ABOUT_TEXT.section1} />
          <AboutImageSection image={ABOUT_TEXT.section1.image} />
        </div>
      ) : (
        // Show two sections in reverse order on '/about'
        <>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <AboutTextSection data={ABOUT_TEXT.section3} />
            <AboutImageSection image={ABOUT_TEXT.section3.image} />
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
            <AboutTextSection data={ABOUT_TEXT.section2} />
            <AboutImageSection image={ABOUT_TEXT.section2.image} />
          </div>
        </>
      )}
    </div>
  );
};

export default AboutComp;
