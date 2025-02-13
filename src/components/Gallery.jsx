// Data
import gallery from "../data/gallery";

// Animation
import useGsap from "../hooks/useGsap";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  const animate = useGsap();

  return (
    <div ref={animate({ y: 50, scale: 0.9 })}>
      <Swiper
        loop={true}
        spaceBetween={12}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[Navigation]}
        breakpoints={{ 425: { spaceBetween: 20 } }}
        navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
        className="gallery-swiper w-full h-48 xs:h-64 sm:h-80 md:h-[400px]"
      >
        {gallery.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{ background: `url(${url})` }}
            className="!w-5/6 !h-auto !aspect-square bg-white !bg-center !bg-cover !bg-no-repeat rounded-xl sm:rounded-2xl lg:!w-[820px]"
          />
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
