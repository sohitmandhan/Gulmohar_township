import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import Filters from "../Filters";
import Property1 from "../../Images/CardImage_1.png";
import Property2 from "../../Images/CardImage_2.png";
import Property3 from "../../Images/CardImage_3.png"


const properties = [
  {
    id: 1,
    image: Property1,
    price: "$15,200,000",
    address: "825 Beresford Ave, Nashville, TN 37205",
    beds: 2,
    baths: 9.5,
    sqft: "15,485",
  },
  {
    id: 2,
    image: Property2,
    price: "$12,000,000",
    address: "126 Lynwood Blvd, Nashville, TN 37205",
    beds: 5,
    baths: 8.5,
    sqft: "8,745",
  },
  {
    id: 2,
    image: Property3,
    price: "$12,000,000",
    address: "126 Lynwood Blvd, Nashville, TN 37205",
    beds: 1,
    baths: 8.5,
    sqft: "8,745",
  },
  {
    id: 1,
    image: Property1,
    price: "$15,200,000",
    address: "825 Beresford Ave, Nashville, TN 37205",
    beds: 2,
    baths: 9.5,
    sqft: "15,485",
  },
  {
    id: 2,
    image: Property2,
    price: "$12,000,000",
    address: "126 Lynwood Blvd, Nashville, TN 37205",
    beds: 5,
    baths: 8.5,
    sqft: "8,745",
  },
  {
    id: 2,
    image: Property3,
    price: "$12,000,000",
    address: "126 Lynwood Blvd, Nashville, TN 37205",
    beds: 1,
    baths: 8.5,
    sqft: "8,745",
  },
];

const PropertyList = () => {
  const [filters, setFilters] = useState({
    search: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      property.address.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.bedrooms === "" || property.beds >= parseInt(filters.bedrooms)) &&
      (filters.bathrooms === "" || property.baths >= parseInt(filters.bathrooms))
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Nashville Homes For Sale</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
