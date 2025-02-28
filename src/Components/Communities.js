import React from "react";
import { useLocation } from "react-router-dom"; 
import Buttons from "./Buttons"; 
import { communitiesData, otherCommunitiesData } from "./Arrays/CommunitiesArray"; 

const Communities = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";
  const selectedCommunities = isHomePage ? communitiesData : otherCommunitiesData;

  return (
    <div className="text-center p-10 bg-white">
      <h2 className="text-2xl font-semibold mb-6">AREAS OF EXPERTISE</h2>

      {/* Responsive Grid Layout */}
      <div className={`grid gap-1${isHomePage ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
        {selectedCommunities.map((item, index) => (
          <div key={index} className="relative w-full group overflow-hidden shadow-md">
            {item.src ? (
              <>
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                  {/* Centered text (moves up on hover) */}
                  <h1 className="text-white text-lg md:text-2xl font-semibold transition-transform duration-300 group-hover:-translate-y-6">
                    {item.text}
                  </h1>
                  {/* Extra content (Appears on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 mt-2">
                    <p className="text-white text-sm md:text-base">Discover more about this area</p>
                    <Buttons text="Read More" color="black" className="bg-transparent" clicked={() => alert(`More about ${item.text}`)} />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center h-[400px] bg-gray-200">
                <h1 className="text-gray-700 text-lg md:text-2xl">COMMUNITIES</h1>
                <Buttons text="Upload Image" color="black" clicked={() => alert("Upload Function Here")} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-medium">SEARCHING FOR YOUR FAMILY'S NEXT HOME?</h3>
        <Buttons text="BROWSE HOMES" color="black" className="mt-4" />
      </div>
    </div>
  );
};

export default Communities;
