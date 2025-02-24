import React from "react";
import AbouComp from "../About/AbouComp";
import NewsLetter from "../NewsLetter/NewsLetter";
import SuccessStories from "../SucessStories";
import Footer from "../Footer";
import MarketingConnection from "../MarketingConnection";
import Intro from "../Intro";

const AboutPage = () => {
  return (
    <div>
      <Intro />
      <AbouComp />
      <MarketingConnection />
      <SuccessStories />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AboutPage;
