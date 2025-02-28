import React from "react";
import {
  MARKETING_STATS,
  MARKETING_FORM_HEADING,
  MARKETING_FORM_PARA,
  MARKETING_CHECKBOX,
  MARKETING_HEADING,
  MARKETING_PARA,
  MARKETING_VIDEO_IMAGE,
} from "./Constants/MarketingConnectionConstants";
import Buttons from "./Buttons";
import { FaPlay } from "react-icons/fa";

const MarketingConnection = () => {
  return (
    <div className="text-center py-16 px-4 md:px-10 bg-white">
      {/* Marketing Heading & Description */}
      <div className="space-y-3 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase">
          {MARKETING_HEADING}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">{MARKETING_PARA}</p>
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center items-center my-10 w-full">
        {/* Start Divider */}
        <div className="hidden md:block h-24 w-px bg-gray-400"></div>

        <div className="flex w-3/4 justify-between items-center">
          {MARKETING_STATS.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-full">
                <h2 className="text-xl md:text-2xl font-bold">{stat.value}</h2>
                <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
              </div>
              {/* Divider after each statistic, except the last one */}
              {index < MARKETING_STATS.length - 1 && (
                <div className="hidden md:block h-24 w-px bg-gray-400"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* End Divider */}
        <div className="hidden md:block h-24 w-px bg-gray-400"></div>
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center p-8">
        <img
          src={MARKETING_VIDEO_IMAGE}
          alt="Marketing Video"
          className="w-full md:w-4/4 max-auto object-cover shadow-md"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white p-4 rounded-full shadow-lg">
            <FaPlay className="text-black text-lg md:text-xl" />
          </button>
        </div>
      </div>

      {/* Subscription Form */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          {MARKETING_FORM_HEADING}
        </h1>
        <p className="text-gray-600 mt-2 text-xs md:text-sm">
          {MARKETING_FORM_PARA}
        </p>
        <form className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 h-12 w-full md:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 h-12 w-full md:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Buttons
              text="SUBMIT"
              color="white"
              className="h-12 px-6 w-full md:w-auto border border-black"
            />
          </div>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-xs text-gray-600">{MARKETING_CHECKBOX}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketingConnection;
