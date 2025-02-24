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
    <div className="text-center py-20 bg-white">
      {/* Marketing Heading & Description */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-wide uppercase">
          {MARKETING_HEADING}
        </h1>
        <p className="text-gray-600">{MARKETING_PARA}</p>
      </div>

      {/* Statistics Section with Vertical Dividers */}
      <div className="flex justify-center items-center space-x-10 my-10">
        {MARKETING_STATS.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center px-6">
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
            {/* Add vertical line except after last item */}
            {index < MARKETING_STATS.length - 1 && (
              <div className="h-12 w-px bg-gray-400"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center my-10">
        <img
          src={MARKETING_VIDEO_IMAGE}
          alt="Marketing Video"
          className="w-3/4 object-cover rounded-lg shadow-md"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white p-4 rounded-full shadow-lg">
            <FaPlay className="text-black text-lg" />
          </button>
        </div>
      </div>

      {/* Subscription Form */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl">{MARKETING_FORM_HEADING}</h1>
        <p className="text-gray-600 mt-2 text-sm">{MARKETING_FORM_PARA}</p>
        <form className="mt-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 h-12 flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 h-12 flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Buttons
              text="SUBMIT"
              color="white"
              className="h-12 px-6 border border-black"
            />
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-xs text-gray-600">{MARKETING_CHECKBOX}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketingConnection;
