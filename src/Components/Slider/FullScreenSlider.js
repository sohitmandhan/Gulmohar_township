import React, { useState } from "react";
import FullScreenSliderData from "../Arrays/ImageSliderArray";
import useAutoSlider from "../Hooks/SliderHook";
import arrowIcon from "../../Images/back.png";
import Buttons from "../Buttons";

const FullScreenSlider = () => {
  const { currentIndex, goNext, goPrev } = useAutoSlider(
    FullScreenSliderData.length
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {FullScreenSliderData.map((item, index) => (
          <div
            key={item.id}
            className="relative w-screen h-screen flex-shrink-0"
          >
            <img
              src={item.src}
              alt={item.address}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Before Hover: Old Design | After Hover: New Design */}
            <div
              className={`absolute w-4/6 bottom-8 left-8 p-6 lg:p-8 transition-all duration-1000 ease-in-out 
              ${
                hoveredIndex === index
                  ? "w-[40%] max-w-full bg-transprent text-white shadow-lg opacity-100 translate-y-0"
                  : "w-auto bg-transparent text-white opacity-100 translate-y-0"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Before Hover: Simple Text Overlay */}
              {hoveredIndex !== index ? (
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold">{item.address}</h1>
                  <div className="flex gap-4">
                    <p className="text-lg">{item.price}</p>
                    <p className="text-lg">{item.beds}</p>
                    <p className="text-lg">{item.baths}</p>
                    <p className="text-lg">{item.area}</p>
                  </div>
                </div>
              ) : (
                /* After Hover: Detailed Box with Data */
                <div className="flex">
                  <p className="text-lg italic text-gray-700 w-3/5 p-4 bg-white">
                    {item.description}
                  </p>
                  <div className="w-2/5 bg-black opacity-70">
                    <div className="mt-2 text-lg text-white p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-semibold">{item.price}</span>
                        <span className="text-right italic">Price</span>
                      </div>
                      <hr className="w-[90%] mx-auto border-gray-300 my-1" />

                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-semibold">{item.beds}</span>
                        <span className="text-right italic">Beds</span>
                      </div>
                      <hr className="w-[90%] mx-auto border-gray-300 my-1" />

                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-semibold">{item.baths}</span>
                        <span className="text-right italic">Baths</span>
                      </div>
                      <hr className="w-[90%] mx-auto border-gray-300 my-1" />

                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-semibold">{item.area}</span>
                        <span className="text-right italic">Sq.Ft.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Buttons
              text="LEARN MORE"
              color="black"
              className="absolute bottom-7 right-0 bg-transparent border-solid border-2 "
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Unchanged) */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition h-14 w-14"
      >
        <img src={arrowIcon} alt="Previous" className="h-10 w-10" />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition rotate-180 h-14 w-14"
      >
        <img src={arrowIcon} alt="Next" className="h-10 w-10" />
      </button>
    </div>
  );
};

export default FullScreenSlider;
