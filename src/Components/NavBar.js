import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_IMAGE } from "./Constants/IntroConstants";

const NavBar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src={LOGO_IMAGE} alt="Logo" className="h-16 cursor-pointer" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex gap-6 text-white uppercase">
        {location.pathname !== "/" && <Link to="/">Home</Link>}
        {location.pathname !== "/about" && <Link to="/about">About</Link>}
        {location.pathname !== "/homeforsale" && <Link to="/homeforsale">Properties</Link>}
        {location.pathname !== "/testimonials" && <Link to="/testimonials">Testimonials</Link>}
        {location.pathname !== "/communities" && <Link to="/communities">Communities</Link>}
        <Link to="/menu">Menu</Link>
      </div>
    </div>
  );
};

export default NavBar;
