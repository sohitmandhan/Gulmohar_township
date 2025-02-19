import React from "react";
import Intro from "../Intro";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import propertySalesCardArray from "../Arrays/PropertySaleCardArray";
import AbouComp from "../About/AbouComp";
import PropertySalesCard from "../PropertSalesCard";
import SucessStories from "../SucessStories";
import MarketingConnection from "../MarketingConnection";
import Slider from "../Slider";
import Communities from "../Communities";

const Home = () => {
  return (
    <div>
      <Intro />
      {/* Render Cards */}
      <div className="flex flex-row space-x-8 bg-white justify-center text-center p-24">
      <PropertySalesCard visibilityFactor="y" />
      </div>
      <AbouComp />
      <MarketingConnection />
      <Slider visibilityFactor='x' />
        <div className="text-center flex justify-evenly p-16">
          <PropertySalesCard visibilityFactor="x" /> 
        </div>
        <SucessStories />
        <Communities />
        <div className="p-14 m-14 text-center">
        <Slider visibilityFactor='y' />
        </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
