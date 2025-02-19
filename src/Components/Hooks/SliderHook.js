import { useState, useEffect } from "react";

const useAutoSlider = (totalSlides, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(goNext, interval);

    return () => clearInterval(slideInterval);
  }, [totalSlides, interval]);
  return { currentIndex, goNext, goPrev };
};

export default useAutoSlider;
