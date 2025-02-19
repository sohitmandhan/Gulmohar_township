import React from "react";
import { ABOUT_TEXT, BUTTONS } from "../Constants/AboutConstants";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";

const AboutTextSection = () => {

  const navigate = useNavigate();

  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{ABOUT_TEXT.title}</h1>
      <h5 className="text-lg text-gray-700 font-semibold mb-6">{ABOUT_TEXT.subtitle}</h5>
      <p className="text-gray-600 leading-relaxed mb-6">{ABOUT_TEXT.description1}</p>
      <p className="text-gray-600 leading-relaxed mb-6">{ABOUT_TEXT.description2}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Buttons color="black" text="Learn More" clicked={() => navigate('/about')} />
        <Buttons color="white" text="Inquire Now"/>
      </div>
    </div>
  );
};

export default AboutTextSection;
