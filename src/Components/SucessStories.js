import React from "react";
import { SUCCESS_HEADING } from "./Constants/SuccessStoriesConstants"; 
import storiesData from "./Arrays/StoriesData"; 
import Buttons from "./Buttons";

const SuccessStories = () => {
  return (
    <div className="text-center bg-white px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-widest uppercase mb-12">
        {SUCCESS_HEADING}
      </h1>
      <div className="flex flex-wrap justify-center gap-12 relative">
        {storiesData.map((story, index) => (
          <div 
            key={index} 
            className="relative bg-white w-full sm:w-80 lg:w-96 px-6 py-8 text-center"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-6xl font-bold">DH</span>
            </div>
            <p className="relative italic text-gray-700 text-sm leading-relaxed">
              "{story.words}"
            </p>
            <h2 className="relative text-md font-medium mt-4 uppercase text-gray-800">
              - {story.writer}
            </h2>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Buttons 
          text="VIEW TESTIMONIALS" 
          color="white" 
          className="border border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all"
        />
      </div>
    </div>
  );
};

export default SuccessStories;
