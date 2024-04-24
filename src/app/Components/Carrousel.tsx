"use client";
import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para controlar o slide atual

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const totalSlides = 3; // Número total de slides (substitua pelo número correto)

  return (
    <div className="relative w-full pt-20">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Cada slide é renderizado dentro de um contêiner separado */}
          <div className="flex items-center justify-center w-full h-64 bg-red-300">Template Slide 1</div>
          <div className="flex items-center justify-center w-full h-64 bg-green-300">Template Slide 2</div>
          <div className="flex items-center justify-center w-full h-64 bg-blue-300">Template Slide 3</div>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg transition-opacity duration-300 opacity-0 hover:opacity-100"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg transition-opacity duration-300 opacity-0 hover:opacity-100"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
