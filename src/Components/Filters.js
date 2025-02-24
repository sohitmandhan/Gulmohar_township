import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by Address, City, or Neighborhood"
        className="w-full p-2 border rounded-md"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <select
        className="p-2 border-b-2 w-3/12"
        value={filters.propertyType}
        onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
      >
        <option value="">Select Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
      </select>
      <div className="w-1/12"></div>
      <select
        className="p-2 border-b-2 w-3/12"
        value={filters.bedrooms}
        onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
      >
        <option value="">Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
      <div className="w-1/12"></div>
      <select
        className="p-2 border-b-2 w-3/12"
        value={filters.bathrooms}
        onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
      >
        <option value="">Bathrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
    </div>
  );
};

export default Filters;
