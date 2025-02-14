import { useState } from "react";

// Data
import comments from "../data/comments";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import playIcon from "../assets/images/icons/play.svg";

const Comments = () => {
  const [activeComment, setActiveComment] = useState(null);

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
        {comments.map((url, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative h-full bg-white/5 rounded-2xl"
            >
              {activeComment !== index ? (
                <button
                  onClick={() => setActiveComment(index)}
                  className="flex items-center justify-center absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 size-12 bg-primary rounded-full"
                >
                  <img
                    width={20}
                    height={20}
                    src={playIcon}
                    alt="Play icon"
                    className="size-5 translate-x-0.5"
                  />
                </button>
              ) : (
                <iframe
                  src={url}
                  allowFullScreen
                  title="YouTube video player"
                  className="size-full rounded-2xl"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comments;
