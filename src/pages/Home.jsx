import React from "react";

// Animation
import useGsap from "../hooks/useGsap";

// Data
import forEntrepreneurs from "../data/forEntrepreneurs";

// Components
import Gallery from "../components/Gallery";
import Comments from "../components/Comments";
import Purposes from "../components/Purposes";
import ModulesList from "../components/ModuleList";
import Information from "../components/Information";
import FormInputWrapper from "../components/FormInputWrapper";

// Images
import telIcon from "../assets/images/icons/tel.svg";
import mailIcon from "../assets/images/icons/mail.svg";
import bullImg from "../assets/images/others/bull.png";
import dateIcon from "../assets/images/icons/date.svg";
import moneyImg from "../assets/images/others/money.png";
import booksImg from "../assets/images/others/books.png";
import locationIcon from "../assets/images/icons/location.svg";
import handshakeImg from "../assets/images/others/handshake.png";
import megaphoneImg from "../assets/images/others/megaphone.png";
import arrowRightImg from "../assets/images/icons/arrow-right.svg";
import sherzodTursunovImg from "../assets/images/others/sherzod-tursunov.png";
import bekzodKomilovaBg from "../assets/images/backgrounds/bekzod-komilov.jpg";
import shirinKomilovaBg from "../assets/images/backgrounds/shirin-komilova.jpg";
import barnoTursunovaBg from "../assets/images/backgrounds/barno-tursunova.jpg";
import sherzodTursunovBg from "../assets/images/backgrounds/sherzod-tursunov.jpg";

const Home = () => {
  const animate = useGsap();

  return (
    <>
      {/* Features */}
      <section className="bg-primary py-20">
        <div className="container">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2
                className="text-white"
                ref={animate({ y: 50, scale: 0.9, delay: 0.1 })}
              >
                Dastur kimlar uchun?
              </h2>

              {/* Section description */}
              <p
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
                className="text-lg text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Cards */}
          <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {forEntrepreneurs.map(({ title, description, icon }, index) => (
              <li
                key={index}
                ref={animate({ y: 50, scale: 0.9, delay: 0.1 * (index + 1) })}
                className="flex flex-col justify-between gap-5 min-h-52 bg-[#027FCC] p-5 rounded-3xl sm:p-6 sm:min-h-64 md:p-8"
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
                  <p className="text-white text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Owners */}
      <section className="pt-20 pb-10">
        <div className="container !max-w-6xl">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 ref={animate({ y: 50, scale: 0.9, delay: 0.1 })}>
                Asoschilar
              </h2>

              {/* Section description */}
              <p
                className="max-w-xl text-lg"
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
              >
                Karra o'sish asosiy asoschilari
              </p>
            </div>
          </div>

          {/* Main contents */}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {/* 1 */}
            <li
              ref={animate({ x: -50, scale: 0.9, delay: 0.1 })}
              style={{ background: `url(${sherzodTursunovBg})` }}
              className="flex items-end relative overflow-hidden h-72 !bg-cover !bg-no-repeat rounded-3xl p-4 col-span-2 xs:h-auto xs:col-span-1 xs:p-5 sm:p-6 md:col-span-2 md:row-span-2 lg:p-8"
            >
              <h3 className="z-10 font-medium text-white text-xl md:text-2xl lg:text-3xl">
                <span>Sherzod</span>
                <br />
                <span>Tursunov</span>
              </h3>

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/70" />
            </li>

            {/* 2 */}
            <li
              style={{ background: `url(${barnoTursunovaBg})` }}
              ref={animate({ y: -50, x: 50, scale: 0.9, delay: 0.2 })}
              className="flex items-end h-40 relative overflow-hidden !bg-right !bg-cover !bg-no-repeat p-4 rounded-3xl col-span-2 xs:!bg-[-200px] xs:h-56 xs:col-span-1 xs:p-5 sm:!bg-right sm:p-6 md:col-span-2"
            >
              <h3 className="z-10 text-lg font-medium sm:text-xl mg:text-2xl">
                <span>Barno</span>
                <br />
                <span>Tursunova</span>
              </h3>

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white/70" />
            </li>

            {/* 3 */}
            <li
              ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}
              style={{ background: `url(${bekzodKomilovaBg})` }}
              className="flex items-end h-40 relative overflow-hidden !bg-cover !bg-no-repeat p-4 rounded-3xl xs:h-56 xs:p-5 sm:p-6"
            >
              <h3 className="z-10 text-lg font-medium text-white sm:text-xl">
                <span>Bekzod</span>
                <br />
                <span>Komilov</span>
              </h3>

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/70" />
            </li>

            {/* 4 */}
            <li
              ref={animate({ y: 50, x: 50, scale: 0.9, delay: 0.5 })}
              style={{ background: `url(${shirinKomilovaBg})` }}
              className="flex items-end h-40 relative overflow-hidden !bg-cover !bg-no-repeat p-4 rounded-3xl xs:h-56 xs:p-5 sm:p-6"
            >
              <h3 className="z-10 text-lg font-medium text-white sm:text-xl">
                <span>Shirin</span>
                <br />
                <span>Komilova</span>
              </h3>

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/70" />
            </li>
          </ul>
        </div>
      </section>

      {/* About format of course */}
      <section id="about" className="py-10">
        <div className="container">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 ref={animate({ y: 50, scale: 0.9, delay: 0.1 })}>
                Kurs formati haqida
              </h2>

              {/* Section description */}
              <p
                className="max-w-xl text-lg"
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
              >
                Toshkent filialimizda 1 hafta davomida 1 marotaba jonli
                uchrashuv tashkil qilinadi. Uchrashuv davomida quyidagi
                muammolarga yechim topamiz.
              </p>
            </div>
          </div>

          {/* Main contents */}
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {/* 1 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.1 })}
              className="flex flex-col items-center justify-center gap-3.5 w-32 sm:w-40 md:w-52"
            >
              <img
                width={208}
                height={208}
                src={booksImg}
                alt="Books image"
                className="size-32 sm:size-40 md:size-52"
              />

              {/* Item title */}
              <h3 className="h-12 font-medium text-center md:h-14 md:text-[17px] ">
                Fikrlash va psixologiya
              </h3>
            </li>

            {/* 2 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
              className="flex flex-col items-center justify-center gap-3.5 w-32 sm:w-40 md:w-52"
            >
              <img
                width={208}
                height={208}
                src={bullImg}
                alt="Bull image"
                className="size-32 sm:size-40 md:size-52"
              />

              {/* Item title */}
              <h3 className="h-12 font-medium text-center md:h-14 md:text-[17px] ">
                Biznes modellar <br /> va bozor
              </h3>
            </li>

            {/* 3 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.3 })}
              className="flex flex-col items-center justify-center gap-3.5 w-32 sm:w-40 md:w-52"
            >
              <img
                width={208}
                height={208}
                src={handshakeImg}
                alt="Handshake image"
                className="size-32 sm:size-40 md:size-52"
              />

              {/* Item title */}
              <h3 className="h-12 font-medium text-center md:h-14 md:text-[17px] ">
                Hamkorlik va jamoa
              </h3>
            </li>

            {/* 4 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.4 })}
              className="flex flex-col items-center justify-center gap-3.5 w-32 sm:w-40 md:w-52"
            >
              <img
                width={208}
                height={208}
                src={megaphoneImg}
                alt="Megaphone image"
                className="size-32 sm:size-40 md:size-52"
              />

              {/* Item title */}
              <h3 className="h-12 font-medium text-center md:h-14 md:text-[17px] ">
                Marketing va reklama
              </h3>
            </li>

            {/* 5 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.5 })}
              className="flex flex-col items-center justify-center gap-3.5 w-32 sm:w-40 md:w-52"
            >
              <img
                width={208}
                height={208}
                src={moneyImg}
                alt="Money image"
                className="size-32 sm:size-40 md:size-52"
              />

              {/* Item title */}
              <h3 className="h-12 font-medium text-center md:h-14 md:text-[17px] ">
                Sotuv va daromad
              </h3>
            </li>
          </ul>
        </div>
      </section>

      {/* Information */}
      <section className="py-10">
        <div className="container">
          {/* Title */}
          <h2
            className="text-center mb-12"
            ref={animate({ y: 50, scale: 0.9 })}
          >
            Kurs davomida quyidagi ma'lumotlarga ega bo'lasiz
          </h2>

          <Information />
        </div>
      </section>

      {/* Purposes */}
      <section className="bg-white py-20">
        <div className="container !max-w-6xl">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 ref={animate({ y: 50, scale: 0.9 })}>Maqsadlar</h2>

              {/* Section description */}
              <p
                className="text-lg"
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Cards */}
          <Purposes />
        </div>
      </section>

      {/* Owner */}
      <section className="pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:gap-5 md:grid-cols-2">
            <img
              alt="Sherzod tursunov"
              src={sherzodTursunovImg}
              className="mx-auto max-w-md w-full md:max-w-max md:mx-0 md:p-5 lg:p-12"
              ref={animate({ y: 50, scale: 0.9, delay: 0.1 })}
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* 1 */}
              <div
                ref={animate({ y: -50, scale: 0.9 })}
                className="max-w-lg space-y-3 text-center w-full bg-primary text-white py-8 px-4 rounded-2xl lg:px-8"
              >
                <h3 className="text-[17px] font-semibold">
                  "Eurodesign" asoschisi
                </h3>

                {/* Description */}
                <p className="opacity-80">
                  270 million AQSh dollaridan ortiq aylanmaga ega bo'lgan
                  kompaniya. Rossiyada o'z sohasida yetakchi uchlikka kiradi.
                </p>
              </div>

              {/* 2 */}
              <div
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
                className="max-w-lg space-y-3 text-center w-full bg-dark text-white py-8 px-4 rounded-2xl lg:px-8"
              >
                <h3 className="text-[17px] font-semibold">
                  "Wilgood" - aqlli avtoservislar tarmog'ini noldan boshlab
                  yaratgan
                </h3>

                {/* Description */}
                <p className="opacity-80">
                  Kompaniyaning yillik aylanmasi 1,8 milliard rublga yetgan.
                  2017-yilda Rossiya "Forbes" jurnalining "Yilning eng yaxshi
                  franshizasi" reytingida kuchli uchlikdan joy olgan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-10">
        <div className="container">
          {/* Title */}
          <h2
            ref={animate({ y: 50, scale: 0.9 })}
            className="text-primary text-center mb-12"
          >
            Asosiy modullar
          </h2>

          <ModulesList />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            {/* Title */}
            <h2 ref={animate({ x: -50, scale: 0.9 })} className="text-center">
              Fotogalareya
            </h2>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-5">
              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.3 })}
                className="btn-prev flex items-center justify-center size-10 rotate-180 border-2 border-dark rounded-full opacity-70 sm:size-11"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-5 sm:size-6"
                />
              </button>

              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
                className="btn-next flex items-center justify-center size-10 border-2 border-dark rounded-full opacity-70 sm:size-11"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-5 sm:size-6"
                />
              </button>
            </div>
          </div>
        </div>

        <Gallery />
      </section>

      {/* Comments */}
      <section id="comments" className="py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            {/* Title */}
            <h2 className="text-center" ref={animate({ x: -50, scale: 0.9 })}>
              Sharxlar
            </h2>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-5">
              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.3 })}
                className="comments-swiper-btn-prev flex items-center justify-center size-10 rotate-180 border-2 border-dark rounded-full opacity-70 sm:size-11"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-5 sm:size-6"
                />
              </button>

              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
                className="comments-swiper-btn-next flex items-center justify-center size-10 border-2 border-dark rounded-full opacity-70 sm:size-11"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-5 sm:size-6"
                />
              </button>
            </div>
          </div>
        </div>

        <Comments />
      </section>

      {/* Form */}
      <section id="develop" className="py-10">
        <div className="container max-xs:!px-0">
          <div className="grid grid-cols-1 gap-5 items-center bg-white p-5 rounded-3xl md:grid-cols-2 lg:p-8">
            <div className="space-y-6 md:space-y-14">
              <h2
                className="text-center md:text-start"
                ref={animate({ x: 50, y: -50, scale: 1.3 })}
              >
                Qabulga yozilish uchun <br /> anketani to'ldiring
              </h2>

              <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-5">
                {/* 1 */}
                <div
                  className="flex items-center gap-3 sm:gap-4 md:gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={mailIcon}
                    alt="Mail icon"
                    className="size-6 sm:size-7 lg:size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium lg:text-lg">E-pochta</h3>
                    <p className="opacity-70 text-sm sm:text-base">
                      info@karraosish.com
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div
                  ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}
                  className="flex items-center gap-3 sm:gap-4 md:gap-5"
                >
                  <img
                    width={32}
                    height={32}
                    src={telIcon}
                    alt="Phone icon"
                    className="size-6 sm:size-7 lg:size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium lg:text-lg">Telefon raqam</h3>
                    <a
                      href="tel:+998998887766"
                      className="opacity-70 text-sm sm:text-base"
                    >
                      +998 (99) 888-77-66
                    </a>
                  </div>
                </div>

                {/* 3 */}
                <div
                  className="flex items-center gap-3 sm:gap-4 md:gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.4 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={locationIcon}
                    alt="Location icon"
                    className="size-6 sm:size-7 lg:size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium lg:text-lg">Manzil</h3>
                    <address className="opacity-70 text-sm sm:text-base not-italic">
                      Toshkent shahar, Chilonzor
                    </address>
                  </div>
                </div>

                {/* 4 */}
                <div
                  ref={animate({ y: 50, scale: 0.9, delay: 0.5 })}
                  className="flex items-center gap-3 sm:gap-4 md:gap-5"
                >
                  <img
                    width={32}
                    height={32}
                    src={dateIcon}
                    alt="Date icon"
                    className="size-6 sm:size-7 lg:size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium lg:text-lg">Ish vaqti</h3>
                    <p className="opacity-70 text-sm sm:text-base">
                      Du-Sha, 9:00 dan 18:00 gacha
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5 p-5 bg-gray-light rounded-2xl lg:p-8">
              <div className="text-xl font-semibold xs:text-2xl">
                So'rov yuborish
              </div>

              {/* First name */}
              <div ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}>
                <FormInputWrapper
                  required
                  label="Ism *"
                  name="firstName"
                  placeholder="Falonchi"
                />
              </div>

              <div ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}>
                {/* Phone number */}
                <FormInputWrapper
                  required
                  type="tel"
                  label="Telefon raqam *"
                  placeholder="+998 (__) ___-__-__"
                />
              </div>

              {/* Select */}
              <div
                className="space-y-3.5"
                ref={animate({ y: 50, scale: 0.9, delay: 0.4 })}
              >
                <label htmlFor="select" className="pl-1.5">
                  Variantlardan birni tanlang *
                </label>

                {/* Select */}
                <select name="variants" id="select" className="h-11 px-3.5">
                  <option value="Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.">
                    Hech qanday ma'lumotim yo'q, to'liqroq bilishni xohlayman.
                  </option>
                  <option value="Dastur haqida bilaman, lekin savollarim bor.">
                    Dastur haqida bilaman, lekin savollarim bor.
                  </option>
                  <option value="Dasturni o'rganib chiqdim, to'lov qilishga tayyorman.">
                    Dasturni o'rganib chiqdim, to'lov qilishga tayyorman.
                  </option>
                </select>
              </div>

              <button
                className="btn-primary w-full"
                ref={animate({ y: 50, scale: 0.9, delay: 0.5 })}
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
