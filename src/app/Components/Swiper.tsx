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
      <div className="mt-16 pt-10 h-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="w-2/3 h-96 swiper"
        >
          <SwiperSlide className="flex items-center swiper-slide object-scale-down bg-black">
            <Image
              src={banner1}
              alt="banner1"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide object-fill w-full bg-red-500">
            <Image src={banner2} alt="banner2" layout="fill" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex object-cover bg-blue-500">
            <Image src={banner3} alt="banner3" layout="fill" objectFit="fill" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
