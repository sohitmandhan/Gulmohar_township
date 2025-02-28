import React from "react";
import {
  NEWSLETTER_TITLE,
  NEWSLETTER_DESC,
  PRIVACY_POLICY_TEXT,
  SUBMIT_BUTTON,
} from "../Constants/newsConstants";
import Buttons from "../Buttons";

const RightSection = () => {
  return (
    <div className="border-solid border-0 lg:border-y-2 lg:border-r-2 border-white text-white w-full lg:w-1/2 p-8 md:p-16 text-center">
      <form className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-semibold">{NEWSLETTER_TITLE}</h1>
        <p className="text-sm md:text-base p-4 text-gray-300">{NEWSLETTER_DESC}</p>
        
        <input 
          className="p-3 w-full md:w-3/4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />

        <div className="flex items-start mt-4 text-left w-full md:w-3/4">
          <input type="checkbox" className="mt-1 w-4 h-4" />
          <p className="text-xs md:text-sm p-2 italic text-gray-300">{PRIVACY_POLICY_TEXT}</p>
        </div>

        <Buttons
          color="black"
          className="text-gray-800 bg-white px-6 py-3 mt-4 hover:bg-transparent hover:text-white hover:border-2 transition"
          text={SUBMIT_BUTTON}
        />
      </form>
    </div>
  );
};

export default RightSection;
