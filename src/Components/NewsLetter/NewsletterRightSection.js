// RightSection.js
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
    <div className="border-l-0 border-white border-solid text-white font-mono p-16 text-center w-1/2">
      <form>
        <h1 className="text-3xl m-2">{NEWSLETTER_TITLE}</h1>
        <p className="p-4 text-sm">{NEWSLETTER_DESC}</p>
        <input className="p-3 w-3/4 font-arapey text-black" />
        <div className="flex align-top">
          <input type="checkbox" />
          <p className="text-xs p-4 text-justify italic">
            {PRIVACY_POLICY_TEXT}
          </p>
        </div>
        <Buttons
          color="black"
          className="bg-white text-gray-950 w-40"
          text={SUBMIT_BUTTON}
        />
      </form>
    </div>
  );
};

export default RightSection;
