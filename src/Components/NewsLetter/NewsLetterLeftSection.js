import React from 'react';
import {
  WORK_WITH_TEXT,
  GULMOHAR_TOWNSHIP_TEXT,
  DESCRIPTION_TEXT,
  LETS_GET_STARTED
} from '../Constants/newsConstants';
import Buttons from '../Buttons';

const LeftSection = () => {
  return (
    <div className="bg-white text-center text-black w-full lg:w-1/2 p-8 md:p-16 shadow-md">
      <h1 className="text-2xl md:text-3xl font-semibold">{WORK_WITH_TEXT}</h1>
      <h1 className="text-xl md:text-2xl font-semibold mt-2">{GULMOHAR_TOWNSHIP_TEXT}</h1>
      <p className="text-sm md:text-base p-4 italic text-gray-600">{DESCRIPTION_TEXT}</p>
      <Buttons 
        color="white" 
        text={LETS_GET_STARTED} 
        className="text-sm md:text-base px-6 py-3 mt-4 bg-black text-white hover:bg-white hover:text-black transition"
      />
    </div>
  );
};

export default LeftSection;
