import React from "react";
import { useLocation } from "react-router-dom";
import { PAGE_CONTENT } from "./Constants/IntroConstants";
import Buttons from "./Buttons";

const Intro = () => {
  const location = useLocation();
  const { backgroundImage, welcomeText, title, description, buttonText } =
    PAGE_CONTENT[location.pathname] || PAGE_CONTENT["/"]; // Default to Home

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center items-center">
      {/* Dynamic Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover" src={backgroundImage} alt="background" />

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h4>{welcomeText}</h4>
        <h1 className="text-6xl p-6">{title}</h1>
        <p className="text-lg">{description}</p>
        {buttonText && <Buttons text={buttonText} color="white" className="border-white mt-6" />}
      </div>
    </div>
  );
};

export default Intro;
