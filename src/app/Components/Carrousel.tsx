"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      bgColor: "bg-black",
    },
    {
      id: 2,
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      bgColor: "bg-green-500",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      className="w-full h-96 relative"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className="slider w-full h-full overflow-hidden">
        <div className="slides w-full h-full flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide w-full relative ${
                currentSlide === index ? "" : "hidden"
              }`}
            >
              <div className={`slide-img ${slide.bgColor} w-full h-full`}></div>
              <div className="fade absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-400 to-black opacity-50"></div>
            </div>
          ))}
        </div>

        {showButtons && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={prevSlide}
            >
              Anterior
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={nextSlide}
            >
              Próximo
            </button>
          </>
        )}
      </div>

      <div className="manual-navigation gap-4 absolute w-full flex justify-center bottom-10">
        {slides.map((slide, index) => (
          <input
            key={slide.id}
            type="radio"
            name="radio-btn"
            id={`radio${slide.id}`}
            value={index}
            className="hidden"
            checked={currentSlide === index}
            onChange={() => setCurrentSlide(index)}
          />
        ))}
        {slides.map((slide, index) => (
          <label
            key={slide.id}
            htmlFor={`radio${slide.id}`}
            className={`manual-btn w-4 h-4 rounded-full border border-pink cursor-pointer transition duration-500 hover:bg-pink ${
              currentSlide === index ? "bg-pink" : ""
            }`}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
