import React from 'react';
import LeftSection from './NewsLetterLeftSection';
import RightSection from './NewsletterRightSection';
import { SECTION_IMAGE } from '../Constants/newsConstants';

const NewsLetter = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img 
        src={SECTION_IMAGE} 
        alt="section background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative p-6 md:p-12 lg:p-28 z-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
