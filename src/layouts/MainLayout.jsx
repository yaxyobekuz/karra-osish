import React from "react";

// Router
import { Outlet } from "react-router-dom";

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
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <Header />

      {/* Hero */}
      <>
        {/* Top */}
        <div className="pt-20 pb-5 bg-red-5">
          <div className="container relative">
            {/* Title */}
            <h1 className="mb-5 text-center font-extrabold leading-relaxed text-[44px]">
              Tadbirkorlar uchun biznesni kengaytirish <br /> va
              <span className="text-primary"> daromadni oshirish </span>
              dasturi
            </h1>

            {/* Description */}
            <p className="mb-8 text-[17px] text-center">
              Biznesni yuksaltirish uchun kerakli dastur. Biz bilan
              biznesingizni rivojlantiring.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-5 w-full">
              <a href="#" className="btn-primary w-40">
                Qabulga yozilish
              </a>

              <a href="#" className="btn-secondary w-40">
                Video lavha
              </a>
            </div>

            {/* Left Icons */}
            <img
              width={48}
              height={48}
              src={topRightArrowIcon}
              alt="Top right arrow icon"
              className="absolute left-0 bottom-5 size-12"
            />

            <img
              width={56}
              height={56}
              src={magicIcon}
              alt="Magic icon"
              className="absolute left-20 bottom-20 size-14"
            />

            <img
              width={40}
              height={40}
              src={docIcon}
              alt="Doc icon"
              className="absolute left-24 -bottom-10 size-10"
            />

            {/* Right Icons */}
            <img
              width={48}
              height={48}
              src={statsIcon}
              alt="Statistics icon"
              className="absolute right-8 bottom-12 size-12"
            />

            <img
              width={48}
              height={48}
              src={flowIcon}
              alt="Flow icon"
              className="absolute right-28 -bottom-10 size-12"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 pb-20">
          <div className="container relative">
            <div className="flex items-end justify-between gap-5">
              {/* 1 */}
              <div className="max-w-[226px] w-full h-96 rounded-3xl overflow-hidden">
                <img
                  width={226}
                  height={384}
                  src={statsBg}
                  alt="Statistics background image"
                  className="size-full object-cover bg-white"
                />
              </div>

              {/* 2 */}
              <div className="flex flex-col items-center justify-center gap-5 w-full h-72 bg-dark rounded-3xl">
                <b className="text-4xl text-white font-semibold">50+</b>

                <p className="max-w-36 text-xl text-center text-white">
                  Hurmatli mijoz va hamkorlar bilan ishlaymiz
                </p>
              </div>

              {/* 3 */}
              <div className="flex flex-col justify-between shrink-0 w-64 h-96">
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
                          className="size-5"
                        />
                      ))}
                    </div>
                    <span className="text-[17px] font-medium">4.9</span>
                  </div>

                  <a
                    href="#comments"
                    className="font-medium underline underline-offset-2"
                  >
                    Mijozlar fikri
                  </a>
                </div>

                {/* Bottom */}
                <div className="w-full h-52 bg-white space-y-3.5 p-8 rounded-3xl">
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
                  <span className="block text-4xl font-semibold">235+</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex flex-col items-center justify-center gap-5 w-full h-72 bg-[#E2FFC8] rounded-3xl">
                <b className="text-4xl font-semibold">30+</b>

                <p className="max-w-36 text-xl text-center">
                  Yillik tajribaga ega bo'lgan mutaxasislar
                </p>
              </div>

              {/* 5 */}
              <div className="flex flex-col items-start justify-end gap-5 max-w-[226px] w-full h-96 bg-primary p-8 rounded-3xl">
                <img
                  width={48}
                  height={48}
                  src={rocketIcon}
                  alt="Rocket icon"
                  className="size-12"
                />

                <p className="max-w-36 text-xl text-white">
                  Biznesingizni biz bilan rivojlantiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

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
