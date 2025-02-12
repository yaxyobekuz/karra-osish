// Data
import gallery from "../data/gallery";

// Animation
import useGsap from "../hooks/useGsap";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Gallery = () => {
  const animate = useGsap();

  return (
    <div ref={animate({ y: 50, scale: 0.9 })}>
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
