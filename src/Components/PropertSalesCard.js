import React from "react";
import propertySalesCardArray from "./Arrays/PropertySaleCardArray";
import {
  HOME_PAGE_HEADING,
  HOME_PAGE_SUB_HEADING,
  HOME_PAGE_TITLE,
} from "./Constants/homeConstants";
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";

const PropertySalesCard = ({ visibilityFactor }) => {
  const navigate = useNavigate();

  const visibleCards = propertySalesCardArray.filter(
    (card) => card.visibilityFactor === visibilityFactor
  );

  return (
    <div className="flex flex-col items-center py-10">
      {visibilityFactor === "x" ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">{HOME_PAGE_HEADING}</h1>
          <p className="text-lg text-gray-600 mt-2">{HOME_PAGE_SUB_HEADING}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">{HOME_PAGE_TITLE}</h1>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {visibleCards.map((card) => (
          <div key={card.id} className="relative w-full max-w-sm">
            <div className="relative overflow-hidden group shadow-lg">
              <img
                src={card.src}
                alt="Property"
                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                  card.visibilityFactor === "x" ? "shadow-lg" : ""
                }`}
              />
              {visibilityFactor === "x" ? (
                <>
                  <div className="absolute top-2 left-12 bg-black bg-opacity-60 text-white px-3 py-2 rounded-md">
                    <h3 className="text-sm font-semibold">{card.saleTag}</h3>
                  </div>
                  <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-3 py-2 rounded-md">
                    <h3 className="text-sm font-semibold">{card.id}</h3>
                  </div>
                </>
              ) : (
                <h3 className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold pb-6 bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-black group-hover:bg-opacity-50 group-hover:items-center">
                  {card.saleTag}
                </h3>
              )}
            </div>
            {visibilityFactor === "x" && (
              <div className="bg-white p-4 shadow-md text-left">
                <h1 className="text-lg font-bold">{card.amount}</h1>
                <p className="text-sm text-gray-600">{card.address}</p>
                <h5 className="text-xs text-gray-500 mt-2">{card.specs}</h5>
              </div>
            )}
          </div>
        ))}
      </div>
      {visibilityFactor === "x" && (
        <div className="">
          <Buttons
            text="SEARCH ALL HOMES"
            color="white"
            clicked={() => navigate("/homeforsale")}
            className="border border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all"
          />
        </div>
      )}
    </div>
  );
};

export default PropertySalesCard;
