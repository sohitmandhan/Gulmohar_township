import React from "react";
import { SUCCESS_HEADING } from "./Constants/SuccessStoriesConstants"; // Ensure constant name is correct
import storiesData from "./Arrays/StoriesData"; // Ensure storiesData is correctly imported
import Buttons from "./Buttons";

const SuccessStories = () => {
  return (
    <div className="text-center bg-white p-10">
      <h1 className="text-3xl">{SUCCESS_HEADING}</h1>
      <div className="flex flex-wrap justify-center p-12 text-center">
        {storiesData.map((story, index) => (
          <div key={index} className="bg-white w-96 p-6 m-4">
            <p className="p-4 text-xs">{story.words}</p>
            <h2 className="text-xl ">{story.writer}</h2>
          </div>
        ))}
      </div>
      <Buttons color="white"  text="VIEW TESTIMONIALS"/>
    </div>
  );
};

export default SuccessStories;
