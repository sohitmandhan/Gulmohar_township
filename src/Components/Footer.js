import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex py-52 px-36 justify-evenly text-center"> 
        <div className="w-3/12">
          <h1 className="text-2xl">GULMOHAR TOWNSHIP</h1>
          <p className="text-xs">Luxury real state agent</p>
          <p className="text-xs">in CHANDIGARH</p>
        </div>
        <div className="w-3/12">
          <h1 className="text-2xl">LOCATION</h1>
          <div className="h-28 bg-white w-full"></div>
          <p className="text-xs">Get Directions</p>
        </div>
        <div className="w-3/12">
          <h1 className="text-2xl">CONTACT US</h1>
          <p className="text-xs">Phone: 1234567890</p>
          <p className="text-xs">Office: jhbfikerbig3ui</p>
          <p className="text-xs">bwhgrvfuirkbfjn</p>
          <p className="text-xs">hbeujhfbviefne</p>
        </div>
      </div>
      <div className="text-center items-center flex flex-col justify-evenly">
        <h1 className="text-4xl p-20">COMPASS</h1>
        <p className="w-2/3 py-20 text-justify text-sm">
          Gulmohar is a real estate liscence affiliated with compass tennesse,
          LLC. Compass Tennesse, LLC, is a liscenced real estate broker and
          abides by equal housing opportunity laws. All material presented
          herein is intended for informational purposes only. Information is
          compiled from sources deemed reliable but is subject to errors,
          omissions, changes in price, condition, sale, or withdrawal without
          notice. No statement is made as to accuracy of any description. All
          measurements and square footages are approximate. This is not intended
          to solicit property already listed. Nothing herein shall be construed
          as legal, accounting or other professional advice outside the realm of
          real estate brokerage.
        </p>
      </div>
    </div>
  );
};

export default Footer;
