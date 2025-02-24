import React from "react";
import { useLocation } from "react-router-dom"; // Get the current route
import Buttons from "./Buttons"; 
import { communitiesData, otherCommunitiesData } from "./Arrays/CommunitiesArray"; 

const Communities = () => {
  const location = useLocation(); 

  // Determine the layout based on the route
  const isHomePage = location.pathname === "/";
  const selectedCommunities = isHomePage ? communitiesData : otherCommunitiesData;

  return (
    <div className="text-center p-10 bg-white">
      <h2 className="text-2xl font-semibold mb-6">AREAS OF EXPERTISE</h2>
      <div className={`grid ${isHomePage ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
        {selectedCommunities.map((item, index) => (
          <div key={index} className="relative">
            {item.src ? (
              <>
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-48 object-cover shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h1 className="text-white text-lg font-semibold">{item.text}</h1>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center h-48 bg-gray-200 rounded-lg">
                <h1>COMMUNITIES</h1>
                <Buttons text="Upload Image" color="black" clicked={() => alert("Upload Function Here")} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-medium">SEARCHING FOR YOUR FAMILY'S NEXT HOME?</h3>
        <Buttons text="BROWSE HOMES" color="black" className="mt-4" />
      </div>
    </div>
  );
};

export default Communities;
