import React from "react";
import communitiesArray from "./Arrays/CommunitiesArray";
import Buttons from "./Buttons"; // Import the reusable button component

const Communities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {communitiesArray.map((item, index) => (
        <div key={index} className="relative">
          {/* Conditional Rendering */}
          {item.src ? (
            // If image exists, display image & text overlay
            <>
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-2xl font-semibold">{item.text}</h1>
              </div>
            </>
          ) : (
            // If no image, show a button
            <div className="flex flex-col justify-center items-center h-60 bg-gray-200 rounded-lg">
                <h1>COMMUNITIES</h1>
              <Buttons text="Upload Image" color="black" clicked={() => alert("Upload Function Here")} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Communities;
