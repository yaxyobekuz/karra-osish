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
          <ul className="grid grid-cols-3 gap-5">
            {forEntrepreneurs.map(({ title, description, icon }, index) => (
              <li
                key={index}
                ref={animate({ y: 50, scale: 0.9, delay: 0.1 * (index + 1) })}
                className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl"
              >
                {/* Icon */}
                <img
                  width={40}
                  alt="Icon"
                  src={icon}
                  height={40}
                  className="size-10"
                />

                {/* Details */}
                <div className="space-y-3.5">
                  {/* Item title */}
                  <h3 className="font-semibold text-lg text-white">{title}</h3>

                  {/* Item description */}
                  <p className="text-white">{description}</p>
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
                ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
                className="max-w-xl text-lg"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Main contents */}
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {/* 1 */}
            <li
              ref={animate({ x: -50, scale: 0.9, delay: 0.1 })}
              style={{ background: `url(${sherzodTursunovBg})` }}
              className="flex items-end relative overflow-hidden !bg-cover !bg-no-repeat rounded-3xl p-8 row-span-2 col-span-2"
            >
              <h3 className="z-10 text-3xl font-medium text-white">
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
              className="flex items-end h-56 relative overflow-hidden !bg-cover !bg-no-repeat p-6 rounded-3xl col-span-2"
            >
              <h3 className="z-10 text-2xl font-medium">
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
              className="flex items-end h-56 relative overflow-hidden !bg-cover !bg-no-repeat p-6 rounded-3xl"
            >
              <h3 className="z-10 text-xl font-medium text-white">
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
              className="flex items-end h-56 relative overflow-hidden !bg-cover !bg-no-repeat p-6 rounded-3xl"
            >
              <h3 className="z-10 text-xl font-medium text-white">
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
          <ul className="flex flex-wrap items-center justify-center gap-5">
            {/* 1 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.1 })}
              className="flex flex-col items-center justify-center gap-3.5 max-w-52"
            >
              <img
                width={208}
                height={208}
                src={booksImg}
                alt="Books image"
                className="size-52"
              />

              {/* Item title */}
              <h3 className="h-14 text-[17px] font-medium text-center">
                Fikrlash va psixologiya
              </h3>
            </li>

            {/* 2 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
              className="flex flex-col items-center justify-center gap-3.5 max-w-52"
            >
              <img
                width={208}
                height={208}
                src={bullImg}
                alt="Bull image"
                className="size-52"
              />

              {/* Item title */}
              <h3 className="h-14 text-[17px] font-medium text-center">
                Biznes modellar <br /> va bozor
              </h3>
            </li>

            {/* 3 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.3 })}
              className="flex flex-col items-center justify-center gap-3.5 max-w-52"
            >
              <img
                width={208}
                height={208}
                src={handshakeImg}
                alt="Handshake image"
                className="size-52"
              />

              {/* Item title */}
              <h3 className="h-14 text-[17px] font-medium text-center">
                Hamkorlik va jamoa
              </h3>
            </li>

            {/* 4 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.4 })}
              className="flex flex-col items-center justify-center gap-3.5 max-w-52"
            >
              <img
                width={208}
                height={208}
                src={megaphoneImg}
                alt="Megaphone image"
                className="size-52"
              />

              {/* Item title */}
              <h3 className="h-14 text-[17px] font-medium text-center">
                Marketing va reklama
              </h3>
            </li>

            {/* 5 */}
            <li
              ref={animate({ x: 50, scale: 0.9, delay: 0.5 })}
              className="flex flex-col items-center justify-center gap-3.5 max-w-52"
            >
              <img
                width={208}
                height={208}
                src={moneyImg}
                alt="Money image"
                className="size-52"
              />

              {/* Item title */}
              <h3 className="h-14 text-[17px] font-medium text-center">
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <img
              className="p-12"
              alt="Sherzod tursunov"
              src={sherzodTursunovImg}
              ref={animate({ y: 50, scale: 0.9, delay: 0.1 })}
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* 1 */}
              <div
                ref={animate({ y: -50, scale: 0.9 })}
                className="max-w-lg space-y-3 text-center w-full bg-primary text-white p-8 rounded-2xl"
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
                className="max-w-lg space-y-3 text-center w-full bg-dark text-white p-8 rounded-2xl"
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
                className="btn-prev flex items-center justify-center size-11 rotate-180 border-2 border-dark rounded-full opacity-70"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
                />
              </button>

              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
                className="btn-next flex items-center justify-center size-11 border-2 border-dark rounded-full opacity-70"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
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
                className="comments-swiper-btn-prev flex items-center justify-center size-11 rotate-180 border-2 border-dark rounded-full opacity-70"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
                />
              </button>

              <button
                ref={animate({ x: 50, scale: 0.9, delay: 0.2 })}
                className="comments-swiper-btn-next flex items-center justify-center size-11 border-2 border-dark rounded-full opacity-70"
              >
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
                />
              </button>
            </div>
          </div>
        </div>

        <Comments />
      </section>

      {/* Form */}
      <section id="develop" className="py-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-5 items-center bg-white p-8 rounded-3xl">
            <div className="space-y-14">
              <h2 ref={animate({ x: 50, y: -50, scale: 1.3 })}>
                Qabulga yozilish uchun <br /> anketani to'ldiring
              </h2>

              <div className="grid grid-cols-2 gap-5">
                {/* 1 */}
                <div
                  className="flex items-center gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.2 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={mailIcon}
                    alt="Mail icon"
                    className="size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">E-pochta</h3>
                    <p className="opacity-70">info@karraosish.com</p>
                  </div>
                </div>

                {/* 2 */}
                <div
                  className="flex items-center gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.3 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={telIcon}
                    alt="Phone icon"
                    className="size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Telefon raqam</h3>
                    <a href="tel:+998998887766" className="opacity-70">
                      +998 (99) 888-77-66
                    </a>
                  </div>
                </div>

                {/* 3 */}
                <div
                  className="flex items-center gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.4 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={locationIcon}
                    alt="Location icon"
                    className="size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Manzil</h3>
                    <address className="opacity-70 not-italic">
                      Toshkent shahar, Chilonzor
                    </address>
                  </div>
                </div>

                {/* 4 */}
                <div
                  className="flex items-center gap-5"
                  ref={animate({ y: 50, scale: 0.9, delay: 0.5 })}
                >
                  <img
                    width={32}
                    height={32}
                    src={dateIcon}
                    alt="Date icon"
                    className="size-8"
                  />

                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Ish vaqti</h3>
                    <p className="opacity-70">Du-Sha, 9:00 dan 18:00 gacha</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5 p-8 bg-gray-light rounded-2xl">
              <div className="text-2xl font-semibold">So'rov yuborish</div>

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
