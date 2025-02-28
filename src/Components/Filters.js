import React, { useState } from "react";

const Filters = ({ onFilterChange = () => {}, filters, setFilters  }) => {
  const [distance, setDistance] = useState(50); // Default 50 miles
  const [price, setPrice] = useState(500000); // Default $500,000

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
    onFilterChange({ distance: e.target.value, price });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilterChange({ distance, price: e.target.value });
  };

  return (
    <div className="w-full flex flex-wrap justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search by Address, City, or Neighborhood"
        className="w-full p-2 border rounded-md"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <select className="w-1/3 p-2 border rounded">
        <option>Select property type</option>
      </select>
      <select className="w-1/3 p-2 border rounded">
        <option>Bathrooms</option>
      </select>
      <select className="w-1/3 p-2 border rounded">
        <option>Bedrooms</option>
      </select>
      <div className="w-2/5 mt-4 flex flex-col">
        <label className="text-sm">Distance: {distance} miles</label>
        <input
          type="range"
          min="0"
          max="100"
          value={distance}
          onChange={handleDistanceChange}
          className="w-full mt-1 cursor-pointer accent-black"
        />
      </div>
      <div className="w-2/5 mt-4 flex flex-col">
        <label className="text-sm">Max Price: ${price.toLocaleString()}</label>
        <input
          type="range"
          min="50000"
          max="5000000"
          step="50000"
          value={price}
          onChange={handlePriceChange}
          className="w-full mt-1 cursor-pointer accent-black"
        />
      </div>
    </div>
  );
};

export default Filters;
