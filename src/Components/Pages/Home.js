import React from "react";
import Intro from "../Intro";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import AbouComp from "../About/AbouComp";
import PropertySalesCard from "../PropertSalesCard";
import SucessStories from "../SucessStories";
import MarketingConnection from "../MarketingConnection";
import Slider from "../Slider/FullScreenSlider";
import Communities from "../Communities";
import CardSlider from "../Slider/CardSlider";
import FullScreenSlider from "../Slider/FullScreenSlider";

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
      <FullScreenSlider />
        <div className="text-center flex justify-evenly p-16">
          <PropertySalesCard visibilityFactor="x" /> 
        </div>
        <SucessStories />
        <Communities />
        <div className="p-14 m-14 text-center">
        <CardSlider />
        </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
