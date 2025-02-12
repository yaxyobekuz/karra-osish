import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import gallery from "../data/gallery";

// Images

const Gallery = () => {
  return (
    <div className="">
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={-60}
        centeredSlides={true}
        modules={[Navigation]}
        className="gallery-swiper h-[400px] mb-5"
        navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
      >
        {gallery.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{ background: `url(${url})` }}
            className="h-full bg-white !bg-center !bg-cover !bg-no-repeat"
          />
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
