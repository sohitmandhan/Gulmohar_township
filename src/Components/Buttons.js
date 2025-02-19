import React from "react";

const Buttons = ({ text, clicked, color, className }) => {
  return (
    <div>
      <button
        onClick={clicked}
        className={`${
          color === "white" ? "border-2 border-black px-8 py-4 m-8" : ""
        } ${
          color === "black" ? "bg-black text-white px-8 py-4 m-8" : ""
        } ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
