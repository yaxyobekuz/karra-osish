import React from "react";
import { Outlet } from "react-router-dom";

// Animation
import useGsap from "../hooks/useGsap";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Images
import docIcon from "../assets/images/icons/doc.svg";
import starIcon from "../assets/images/icons/star.svg";
import flowIcon from "../assets/images/icons/flow.svg";
import statsIcon from "../assets/images/icons/stats.svg";
import magicIcon from "../assets/images/icons/magic.svg";
import rocketIcon from "../assets/images/icons/rocket.svg";
import layoutIcon from "../assets/images/icons/layout.svg";
import statsBg from "../assets/images/backgrounds/stats.jpg";
import topRightArrowIcon from "../assets/images/icons/top-right-arrow.svg";

const MainLayout = () => {
  const animate = useGsap();

  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <Header />

      {/* Hero */}
      <div className="pt-20 pb-5 bg-red-5">
        <div className="container relative">
          {/* Title */}
          <h1
            ref={animate({ y: 50, scale: 0.9 })}
            className="mb-5 text-center font-extrabold text-2xl px-5 sm:px-0 sm:text-3xl md:text-4xl lg:leading-relaxed lg:text-[44px]"
          >
            Tadbirkorlar uchun biznesni kengaytirish <br /> va
            <span className="text-primary"> daromadni oshirish </span>
            dasturi
          </h1>

          {/* Description */}
          <p
            ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
            className="relative z-10 mb-8 text-center sm:text-[17px]"
          >
            Biznesni yuksaltirish uchun kerakli dastur.{" "}
            <br className="md:hidden" /> Biz bilan biznesingizni rivojlantiring.
          </p>

          {/* Buttons */}
          <div
            ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}
            className="flex flex-col items-center justify-center gap-5 w-full sm:flex-row"
          >
            <a
              href="#develop"
              ref={animate({ x: -50 })}
              className="btn-primary w-40"
            >
              Qabulga yozilish
            </a>

            <a ref={animate({ x: 50 })} href="#" className="btn-secondary w-40">
              Video lavha
            </a>
          </div>

          {/* Left Icons */}
          <img
            width={48}
            height={48}
            src={topRightArrowIcon}
            alt="Top right arrow icon"
            ref={animate({ scale: 0.5, y: 50, delay: 0.1 })}
            className="absolute -top-14 size-12 sm:left-5 sm:top-auto sm:bottom-5"
          />

          <img
            width={56}
            height={56}
            src={magicIcon}
            alt="Magic icon"
            ref={animate({ scale: 0.5, y: 50, delay: 0.2 })}
            className="absolute size-12 bottom-20 -left-2 sm:left-5 sm:-bottom-28 md:left-16 md:bottom-28 lg:left-24 lg:size-14 lg:bottom-20"
          />

          <img
            width={40}
            height={40}
            src={docIcon}
            alt="Doc icon"
            ref={animate({ scale: 0.5, y: 50, delay: 0.3 })}
            className="absolute left-16 -bottom-14 size-10 sm:left-24 md:-bottom-10"
          />

          {/* Right Icons */}
          <img
            width={48}
            height={48}
            src={statsIcon}
            alt="Statistics icon"
            ref={animate({ scale: 0.5, y: 50, delay: 0.6 })}
            className="absolute right-0 bottom-12 size-12 sm:right-8"
          />

          <img
            width={48}
            height={48}
            src={flowIcon}
            alt="Flow icon"
            ref={animate({ scale: 0.5, y: 50, delay: 0.4 })}
            className="absolute right-28 -bottom-20 size-12 md:-bottom-10"
          />
        </div>
      </div>
      <div className="pt-24 pb-20 md:pt-12">
        <div className="container relative">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
            {/* 1 */}
            <div
              ref={animate({ scale: 0.9, y: 50, delay: 0.1 })}
              className="w-full h-72 rounded-3xl overflow-hidden order-1 xs:h-80 sm:h-96"
            >
              <img
                width={226}
                height={384}
                src={statsBg}
                alt="Statistics background image"
                className="size-full object-cover bg-white"
              />
            </div>

            {/* 2 */}
            <div
              ref={animate({ scale: 0.9, y: 50, delay: 0.2 })}
              className="flex items-end w-full h-40 order-3 xs:h-52 sm:h-96 md:order-2"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 w-full h-full bg-dark rounded-3xl xs:gap-5 md:h-72">
                <b className="text-2xl text-white font-semibold sm:text-3xl md:text-4xl">
                  50+
                </b>

                <p className="max-w-36 text-center text-white text-lg md:text-xl">
                  Hurmatli mijoz va hamkorlar bilan ishlaymiz
                </p>
              </div>
            </div>

            {/* 3 */}
            <div
              ref={animate({ scale: 0.9, y: 50, delay: 0.3 })}
              className="flex flex-col justify-between w-full order-2 h-72 xs:h-80 sm:h-96 md:hidden md:order-3 lg:flex"
            >
              {/* Rating */}
              <div className="flex flex-col gap-3.5 items-center justify-center">
                <div className="flex items-center justify-center gap-3.5">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        width={20}
                        key={index}
                        height={20}
                        src={starIcon}
                        alt="Star icon"
                        className="size-4 xs:size-5"
                        ref={animate({ x: -50, delay: 0.1 * (index + 1) })}
                      />
                    ))}
                  </div>
                  <span
                    ref={animate({ x: -50, delay: 0.6 })}
                    className="text-[17px] font-medium"
                  >
                    4.9
                  </span>
                </div>

                <a
                  href="#comments"
                  className="font-medium underline underline-offset-2"
                >
                  Mijozlar fikri
                </a>
              </div>

              {/* Bottom */}
              <div
                ref={animate({ y: -50 })}
                className="w-full h-44 bg-white space-y-3.5 p-6 rounded-3xl xs:p-8 xs:h-52"
              >
                <span className="inline-block bg-primary/20 p-1.5 rounded-lg">
                  <img
                    width={24}
                    height={24}
                    src={layoutIcon}
                    alt="Layout icon"
                    className="size-6"
                  />
                </span>

                {/* Item title */}
                <b className="block font-medium">Jami loyihalar</b>

                {/* Item count */}
                <span className="block text-2xl font-semibold sm:text-3xl md:text-4xl">
                  235+
                </span>
              </div>
            </div>

            {/* 4 */}
            <div
              ref={animate({ scale: 0.9, y: 50, delay: 0.4 })}
              className="flex items-end w-full h-40 order-5 xs:h-52 md:h-96"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 w-full h-full bg-[#E2FFC8] rounded-3xl xs:gap-5 md:h-72">
                <b className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                  30+
                </b>

                <p className="max-w-36 text-center text-lg md:text-xl">
                  Yillik tajribaga ega bo'lgan mutaxasislar
                </p>
              </div>
            </div>

            {/* 5 */}
            <div
              ref={animate({ scale: 0.9, y: 50, delay: 0.5 })}
              className="flex flex-col items-start justify-end gap-3 w-full h-40 col-span-2 bg-primary p-6 rounded-3xl order-5 xs:gap-5 xs:p-8 xs:h-52 md:col-span-1 md:h-96"
            >
              <img
                width={48}
                height={48}
                src={rocketIcon}
                alt="Rocket icon"
                className="size-9 sm:size-10 md:size-12"
              />

              <p className="w-full text-white text-lg xs:max-w-36 md:text-xl">
                Biznesingizni biz <br /> bilan rivojlantiring
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
