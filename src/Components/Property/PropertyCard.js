import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={property.image} alt={property.address} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.price}</h2>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-gray-500 text-sm">
          {property.beds} Beds • {property.baths} Baths • {property.sqft} SQFT
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
