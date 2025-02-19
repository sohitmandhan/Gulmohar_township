// LeftSection.js
import React from 'react';
import { WORK_WITH_TEXT, GULMOHAR_TOWNSHIP_TEXT, DESCRIPTION_TEXT, LETS_GET_STARTED } from '../Constants/newsConstants';
import Buttons from '../Buttons';

const LeftSection = () => {
  return (
    <div className="p-16 text-center bg-white text-3xl font-mono w-1/2 my-10">
      <h1>{WORK_WITH_TEXT}</h1>
      <h1>{GULMOHAR_TOWNSHIP_TEXT}</h1>
      <p className="text-balance text-sm p-4 italic">{DESCRIPTION_TEXT}</p>
      <Buttons color="white" text={LETS_GET_STARTED} className="text-sm p-4 m-4 w-64" />
    </div>
  );
};

export default LeftSection;
