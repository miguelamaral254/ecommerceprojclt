"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "@/../public/assets/images/Banner1.jpeg";
import banner2 from "@/../public/assets/images/Banner2.jpg";
import banner3 from "@/../public/assets/images/banner3.jpg";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

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
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="w-full h-72 swiper"
        >
          <SwiperSlide className=" flex items-center swiper-slide bg-black">
            <div>
              <Image src={banner1} alt="banner1" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex h-cover  bg-red-500">
            <Image src={banner2} alt="banner2" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex object-fill  bg-blue-500">
            <Image src={banner3} alt="banner3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
