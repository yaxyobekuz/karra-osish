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

          <svg
            width="56"
            height="56"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            ref={animate({ scale: 0.5, y: 50, delay: 0.2 })}
            className="absolute size-12 bottom-20 -left-2 sm:left-5 sm:-bottom-28 md:left-16 md:bottom-28 lg:left-24 lg:size-14 lg:bottom-20"
          >
            <rect
              x="0.75"
              y="0.75"
              rx="23.25"
              width="46.5"
              height="46.5"
              strokeWidth="1.5"
              stroke="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              d="M23.002 16.001V15.999C23.0135 15.7418 23.1238 15.4989 23.3099 15.321C23.496 15.143 23.7435 15.0437 24.001 15.0437C24.2585 15.0437 24.506 15.143 24.6921 15.321C24.8782 15.4989 24.9885 15.7418 25 15.999V16.002C25.0005 17.8502 25.7319 19.6232 27.0347 20.9343C28.3374 22.2453 30.1058 22.9878 31.954 23L32.001 22.999C32.2663 22.999 32.5208 23.1044 32.7085 23.292C32.8961 23.4797 33.0015 23.7341 33.0015 23.9995C33.0015 24.2648 32.8961 24.5193 32.7085 24.707C32.5208 24.8946 32.2663 25 32.001 25H31.998C31.079 24.9999 30.169 25.1808 29.32 25.5326C28.471 25.8843 27.6996 26.4 27.05 27.05C26.4 27.6996 25.8843 28.471 25.5326 29.32C25.1808 30.169 24.9999 31.079 25 31.998V31.999C25.0001 32.1303 24.9744 32.2604 24.9243 32.3818C24.8741 32.5031 24.8006 32.6134 24.7078 32.7064C24.615 32.7993 24.5049 32.8731 24.3836 32.9235C24.2623 32.9739 24.1323 32.9999 24.001 33C23.8694 33.0001 23.7391 32.9743 23.6175 32.924C23.496 32.8736 23.3855 32.7998 23.2925 32.7067C23.1995 32.6137 23.1258 32.5031 23.0756 32.3815C23.0254 32.2599 22.9997 32.1296 23 31.998C23.0001 31.079 22.8191 30.169 22.4674 29.32C22.1156 28.471 21.6 27.6996 20.95 27.05C20.3004 26.4 19.529 25.8843 18.68 25.5326C17.831 25.1808 16.921 24.9999 16.002 25C15.7368 24.9938 15.4839 24.8824 15.3008 24.6905C15.1176 24.4985 15.0183 24.2417 15.0245 23.9765C15.0307 23.7113 15.1421 23.4594 15.334 23.2763C15.5259 23.0931 15.7828 22.9938 16.048 23C17.888 22.988 19.6492 22.2515 20.95 20.95C21.6 20.3004 22.1156 19.529 22.4674 18.68C22.8191 17.831 23.0001 16.921 23 16.002L23.002 16.001ZM19.002 31.944V32C19.002 32.2652 18.8966 32.5196 18.7091 32.7071C18.5216 32.8946 18.2672 33 18.002 33C17.7368 33 17.4824 32.8946 17.2949 32.7071C17.1074 32.5196 17.002 32.2652 17.002 32C17.002 31.8685 16.9761 31.7383 16.9257 31.6168C16.8753 31.4954 16.8015 31.3851 16.7084 31.2922C16.6153 31.1993 16.5048 31.1257 16.3833 31.0755C16.2617 31.0254 16.1315 30.9997 16 31H15.998C15.7328 30.9997 15.4785 30.8941 15.2912 30.7064C15.1038 30.5187 14.9987 30.2642 14.999 29.999C14.9993 29.7338 15.1049 29.4795 15.2926 29.2922C15.4803 29.1048 15.7348 28.9997 16 29C16.1315 29.0003 16.2617 28.9746 16.3833 28.9244C16.5048 28.8743 16.6153 28.8007 16.7084 28.7078C16.8015 28.6149 16.8753 28.5046 16.9257 28.3831C16.9761 28.2617 17.002 28.1315 17.002 28C17.002 27.7348 17.1074 27.4804 17.2949 27.2929C17.4824 27.1054 17.7368 27 18.002 27C18.2672 27 18.5216 27.1054 18.7091 27.2929C18.8966 27.4804 19.002 27.7348 19.002 28V28.056C19.031 28.582 19.468 29 20.002 29C20.2672 28.9997 20.5217 29.1048 20.7094 29.2922C20.8971 29.4795 21.0027 29.7338 21.003 29.999C21.0033 30.2642 20.8982 30.5187 20.7108 30.7064C20.5235 30.8941 20.2692 30.9997 20.004 31H20.002C19.468 31 19.031 31.418 19.002 31.944ZM24 20.123C24.4258 20.9504 24.9774 21.7067 25.635 22.365C26.2933 23.0226 27.0496 23.5742 27.877 24C27.0496 24.4258 26.2933 24.9774 25.635 25.635C24.9774 26.2933 24.4258 27.0496 24 27.877C23.5742 27.0496 23.0226 26.2933 22.365 25.635C21.7067 24.9774 20.9504 24.4258 20.123 24C20.9504 23.5742 21.7067 23.0226 22.365 22.365C23.0226 21.7067 23.5742 20.9504 24 20.123ZM30.999 19.943L31 19.999C31 20.2642 30.8946 20.5186 30.7071 20.7061C30.5196 20.8936 30.2652 20.999 30 20.999C29.7348 20.999 29.4804 20.8936 29.2929 20.7061C29.1053 20.5186 29 20.2642 29 19.999C29 19.8675 28.9741 19.7373 28.9237 19.6158C28.8733 19.4944 28.7995 19.3841 28.7064 19.2912C28.6133 19.1983 28.5028 19.1247 28.3813 19.0745C28.2597 19.0244 28.1295 18.9987 27.998 18.999H27.996C27.7308 18.9987 27.4765 18.8931 27.2892 18.7054C27.1018 18.5177 26.9967 18.2632 26.997 17.998C26.9973 17.7328 27.1029 17.4785 27.2906 17.2912C27.4783 17.1038 27.7328 16.9987 27.998 16.999C28.551 16.999 29 16.551 29 15.999C29 15.7338 29.1053 15.4794 29.2929 15.2919C29.4804 15.1043 29.7348 14.999 30 14.999C30.2652 14.999 30.5196 15.1043 30.7071 15.2919C30.8946 15.4794 31 15.7338 31 15.999L30.999 16.054C31.028 16.581 31.466 16.999 32 16.999C32.2652 16.9987 32.5197 17.1038 32.7074 17.2912C32.8951 17.4785 33.0007 17.7328 33.001 17.998C33.0013 18.2632 32.8962 18.5177 32.7088 18.7054C32.5215 18.8931 32.2672 18.9987 32.002 18.999H32C31.466 18.999 31.028 19.416 30.999 19.943Z"
            />
          </svg>

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
              <div className="flex flex-col items-center justify-center gap-1.5 w-full h-full bg-dark rounded-3xl dark:bg-white/5 xs:gap-5 md:h-72">
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
                className="w-full h-44 bg-white space-y-3.5 p-6 rounded-3xl text-dark xs:p-8 xs:h-52"
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
              className="flex items-end w-full h-40 order-5 text-dark xs:h-52 md:h-96"
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
