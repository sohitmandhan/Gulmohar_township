import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">GULMOHAR TOWNSHIP</h1>
          <p className="text-sm text-gray-300 mt-2">Luxury Real Estate Agent</p>
          <p className="text-sm text-gray-300">in CHANDIGARH</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">LOCATION</h1>
          <div className="h-32 bg-gray-200 w-full mx-auto mt-4 rounded-md"></div>
          <p className="text-sm text-gray-300 mt-2 cursor-pointer hover:underline">
            Get Directions
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">CONTACT US</h1>
          <p className="text-sm text-gray-300 mt-2">Phone: 123-456-7890</p>
          <p className="text-sm text-gray-300">Office: Gulmohar Towers</p>
          <p className="text-sm text-gray-300">123 Main Street, Chandigarh</p>
          <p className="text-sm text-gray-300">Email: info@gulmohartownship.com</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <h1 className="text-3xl md:text-4xl font-bold">COMPASS</h1>
        <p className="max-w-3xl mx-auto text-sm text-gray-400 mt-6 leading-relaxed">
          Gulmohar is a real estate license affiliated with Compass Tennessee,
          LLC. Compass Tennessee, LLC, is a licensed real estate broker and
          abides by equal housing opportunity laws. All material presented
          herein is intended for informational purposes only. Information is
          compiled from sources deemed reliable but is subject to errors,
          omissions, changes in price, condition, sale, or withdrawal without
          notice. No statement is made as to the accuracy of any description.
          All measurements and square footages are approximate. This is not
          intended to solicit property already listed. Nothing herein shall be
          construed as legal, accounting, or other professional advice outside
          the realm of real estate brokerage.
        </p>
      </div>
      <div className="mt-12 text-center border-t border-gray-600 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Gulmohar Township. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
