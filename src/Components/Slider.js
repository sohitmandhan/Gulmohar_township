import React from "react";
import Buttons from "./Buttons";
import ImageSliderArray from "./Arrays/ImageSliderArray";
import useAutoSlider from "./Hooks/SliderHook";
import arrowIcon from "../Images/back.png";

const Slider = ({ visibilityFactor }) => {
  const itemsPerSlide = visibilityFactor === "y" ? 3 : 1;
  const { currentIndex, goNext, goPrev } = useAutoSlider(
    ImageSliderArray.length / itemsPerSlide
  );

  const variableCards = ImageSliderArray.filter(
    (card) => card.visibilityFactor === visibilityFactor
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {visibilityFactor === "x" ? null : (
        <h1 className="text-3xl pb-14">IN THE SPOTLIGHT</h1>
      )}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${(variableCards.length / itemsPerSlide) * 100}%`,
        }}
      >
        {variableCards.map((card, index) => (
          <div
            key={index}
            className={`${
              visibilityFactor === "x"
                ? "w-screen flex-shrink-0 relative h-screen"
                : "flex items-center justify-center w-full flex-shrink-0 relative h-screen"
            }`}
          >
            <img
              src={card.src}
              alt={card.address}
              className="absolute w-full h-full object-cover"
            />
            {visibilityFactor === "x" ? (
              <>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 text-white z-20 flex justify-between">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold">{card.address}</h1>
                    <p className="text-lg">{card.specs}</p>
                  </div>
                  <div className="mt-4">
                    <Buttons
                      text="LEARN MORE"
                      color="white"
                      className="border-white"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition h-14 w-14"
      >
        <img src={arrowIcon} alt="hjk" className="h-10 w-10" />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition rotate-180 h-14 w-14"
      >
        <img src={arrowIcon} alt="hjk" className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Slider;
