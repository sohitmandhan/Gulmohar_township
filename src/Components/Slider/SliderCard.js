import React from "react";
import Buttons from "../Buttons";


const SliderCard = ({ card }) => {
  return (
    <div className="w-1/3 px-4">
      <div className="bg-white shadow-md overflow-hidden">
        <img src={card.src} alt={card.heading} className="w-full h-64 object-fill" />
        <div className="p-4 text-center">
          <h1 className="text-xl font-semibold p-4">{card.heading}</h1>
          <p className="text-sm text-gray-600 p-4">{card.detail}</p>
          <Buttons
            text="Read More"
            className="mt-4 bg-black text-white px-4 py-2 hover:bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
