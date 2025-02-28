import React from "react";
import CardSliderData from "../Arrays/CardSliderData";
import useAutoSlider from "../Hooks/SliderHook";
import SliderCard from "./SliderCard";
import arrowIcon from "../../Images/back.png";

const CardSlider = () => {
  const itemsPerSlide = 3;
  const { currentIndex, goNext, goPrev } = useAutoSlider(
    Math.ceil(CardSliderData.length / itemsPerSlide)
  );

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <h1 className="text-3xl font-bold pb-10 text-center">IN THE SPOTLIGHT</h1>

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${(CardSliderData.length / itemsPerSlide) * 100}%`,
        }}
      >
        {CardSliderData.map((item) => (
          <SliderCard key={item.id} card={item} />
        ))}
      </div>

      <button onClick={goPrev} className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition h-14 w-14">
        <img src={arrowIcon} alt="Previous" className="h-10 w-10" />
      </button>
      <button onClick={goNext} className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition rotate-180 h-14 w-14">
        <img src={arrowIcon} alt="Next" className="h-10 w-10" />
      </button>
    </div>
  );
};

export default CardSlider;
