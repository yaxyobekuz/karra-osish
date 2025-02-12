import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import gallery from "../data/gallery";
import comments from "../data/comments";

// Images

const Comments = () => {
  return (
    <div className="container">
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation]}
        className="comments-swiper h-[400px] mb-5 rounded-2xl"
        navigation={{
          prevEl: ".comments-swiper-btn-prev",
          nextEl: ".comments-swiper-btn-next",
        }}
      >
        {comments.map((url, index) => (
          <SwiperSlide key={index} className="h-full bg-white rounded-2xl">
            <iframe
              src={url}
              allowFullScreen
              title="YouTube video player"
              className="size-full rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
