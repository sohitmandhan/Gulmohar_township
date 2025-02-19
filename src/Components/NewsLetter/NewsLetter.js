import React from 'react';
import LeftSection from './NewsLetterLeftSection';
import RightSection from './NewsletterRightSection';
import { SECTION_IMAGE } from '../Constants/newsConstants';

const NewsLetter = () => {
  return (
    <div className="relative w-full">
      <img src={SECTION_IMAGE} alt="section background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      <div className="relative p-8 lg:p-28 z-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
