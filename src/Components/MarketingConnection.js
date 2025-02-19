import React from "react";
import {
  MARKETING_CHECKBOX,
  MARKETING_FORM_HEADING,
  MARKETING_FORM_PARA,
  MARKETING_HEADING,
  MARKETING_PARA,
  MARKETING_IMAGE,
} from "./Constants/MarketingConnectionConstants";
import Buttons from "./Buttons";

const MarketingConnection = () => {
  return (
    <div className="text-center p-20 bg-white">
      <div className="text-center space-y-4">
        <h1 className="max-w-5xl text-3xl font-bold">{MARKETING_HEADING}</h1>
        <p className="max-w-4xl text-gray-600 mt-2">{MARKETING_PARA}</p>
      </div>
      <div className="flex justify-center mb-10 p-28">
        <img src={MARKETING_IMAGE} alt="Marketing" className="w-auto h-auto object-cover shadow-md" />
      </div>
      <div className=" w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">{MARKETING_FORM_HEADING}</h1>
        <p className="text-gray-600 mt-2 text-xs">{MARKETING_FORM_PARA}</p>
        <form className="mt-6">
          <div className="flex flex-row space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 w-auto h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 w-auto h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="mt-4">
              <Buttons color="white" text="SUBMIT" />
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-xs text-gray-600">{MARKETING_CHECKBOX}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketingConnection;
