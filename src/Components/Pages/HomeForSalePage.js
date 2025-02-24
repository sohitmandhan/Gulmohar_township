import React from "react";
import Intro from "../Intro";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer";
import MapComponent from "../MapComponent";
import PropertyList from "../Property/PropertyList";

const HomeForSalePage = () => {
  return (
    <div>
      <Intro />
      <PropertyList />
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold mb-6">Nashville Real Estate Map</h1>
        <MapComponent />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomeForSalePage;
