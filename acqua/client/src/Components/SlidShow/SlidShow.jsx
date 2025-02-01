import React, { useState, useEffect } from "react";

const images = ["/images/slid1.jpg", "/images/slid2.jpg", "/images/slid3.jpg"];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden pt-1">
      <div
        className="flex transition-transform ease-in-out duration-500 min-w-full h-110"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="min-w-full h-110 object-cover"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800"
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;
