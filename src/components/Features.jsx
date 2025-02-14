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
import forEntrepreneurs from "../data/forEntrepreneurs";

const Features = () => {
  const [activeComment, setActiveComment] = useState(null);

  return (
    <div className="container">
      <Swiper
        loop={true}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="comments-swiper h-64 mb-5 rounded-2xl xs:h-56 md:h-64 lg:h-72"
        navigation={{
          prevEl: ".features-swiper-btn-prev",
          nextEl: ".features-swiper-btn-next",
        }}
      >
        {forEntrepreneurs.map(({ title, description, icon }, index) => {
          return (
            <SwiperSlide
              key={index}
            className="!flex flex-col justify-between gap-4 !h-full bg-[#027FCC] p-5 rounded-2xl sm:gap-5 max-sm:!w-9/12 sm:rounded-3xl sm:p-6 md:p-8"
            >
              {/* Icon */}
              <img
                width={40}
                alt="Icon"
                src={icon}
                height={40}
                className="size-8 sm:size-9 lg:size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-white sm:text-[17px] lg:text-lg">
                  {title}
                </h3>

                {/* Item description */}
                <p className="text-white text-sm md:text-base">{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Features;
