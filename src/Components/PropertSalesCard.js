import React from "react";
import propertySalesCardArray from "./Arrays/PropertySaleCardArray";
import { HOME_PAGE_HEADING, HOME_PAGE_SUB_HEADING, HOME_PAGE_TITLE } from "./Constants/homeConstants";
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";

const PropertySalesCard = ({ visibilityFactor }) => {
  
  const navigate = useNavigate()

  const visibleCards = propertySalesCardArray.filter(
    (card) => card.visibilityFactor === visibilityFactor
  );

  return (
    <div className="flex flex-col">
      {visibilityFactor === "x" ? (
        <div>
          <h1>{HOME_PAGE_HEADING}</h1>
          <p>{HOME_PAGE_SUB_HEADING}</p>
        </div>
      ) : (
        <div>
          <h1>{HOME_PAGE_TITLE}</h1>
        </div>
      )}
      <div className="flex">
        {visibleCards.map((card) => (
          <div className="p-6 w-80 relative">
            <div className="relative">
              <img
                src={card.src}
                alt="Property"
                className={`w-full h-full object-cover ${
                  card.visibilityFactor === "y" ? "shadow-lg" : ""
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
                <h3 className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold bg-black bg-opacity-50 pb-6">
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
        <div>
          <Buttons text="SEARCH ALL HOMES" color="white" clicked={() => navigate('/homeforsale')}/>
        </div>
      )}
    </div>
  );
};

export default PropertySalesCard;
