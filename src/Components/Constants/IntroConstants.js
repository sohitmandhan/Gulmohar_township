import HOME_IMAGE from "../../Images/homeImage.png";
import ABOUT_IMAGE from "../../Images/Section-4.png";
import COMMUNITIES_IMAGE from "../../Images/Section-1.png";
import TESTIMONIALS_IMAGE from "../../Images/Section-2.png";
import FOR_SALE_IMAGE from "../../Images/Section-3.png";
import LOGO_IMAGE from "../../Images/GulmoharLogo.png"

export {LOGO_IMAGE}
// Dynamic Page Content
export const PAGE_CONTENT = {
  "/": {
    backgroundImage: HOME_IMAGE,
    welcomeText: "WELCOME TO",
    title: "GULMOHAR TOWNSHIP",
    description: "Find your dream home with a trusted global advisor.",
    buttonText: "SEARCH ALL HOMES",
  },
  "/about": {
    backgroundImage: ABOUT_IMAGE,
    title: "DISCOVER GULMOHAR",
    description: "Learn more about our vision, values, and community.",
  },
  "/communities": {
    backgroundImage: COMMUNITIES_IMAGE,
    title: "EXPLORE NEIGHBORHOODS",
    description: "Find the perfect place to call home.",
  },
  "/testimonials": {
    backgroundImage: TESTIMONIALS_IMAGE,
    title: "TESTIMONIALS",
    description: "Hear from happy homeowners.",
  },
  "/homeforsale": {
    backgroundImage: FOR_SALE_IMAGE,
    title: "FIND YOUR DREAM HOME",
    description: "Browse the latest listings in Gulmohar Township.",
  },
};
