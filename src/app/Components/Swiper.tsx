"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="mt-10 pt-10 h-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full h-72 swiper"
        >
          <SwiperSlide className="swiper-slide bg-black">Slide 1</SwiperSlide>
          <SwiperSlide className="swiper-slide bg-red-500">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide bg-blue-500">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide bg-green-500">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide bg-pink-500">Slide 5</SwiperSlide>
          <SwiperSlide className="swiper-slide bg-orange-500">Slide 6</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
