import React from "react";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";

const AboutTextSection = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
      <p className="text-gray-600 leading-relaxed mb-6">{data.description}</p>

      {data.showButtons && (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Buttons color="black" text="Learn More" clicked={() => navigate('/about')} />
          <Buttons color="white" text="Inquire Now" />
        </div>
      )}
    </div>
  );
};

export default AboutTextSection;
