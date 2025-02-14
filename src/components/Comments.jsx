// Swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
import comments from "../data/comments";

const Comments = () => {
  return (
    <div className="container">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
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
