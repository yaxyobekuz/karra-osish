import React from "react";

// Components
import Gallery from "../components/Gallery";
import Comments from "../components/Comments";
import Purposes from "../components/Purposes";
import ModulesList from "../components/ModuleList";
import Information from "../components/Information";

// Images
import appIcon from "../assets/images/icons/app.svg";
import bullImg from "../assets/images/others/bull.png";
import bullIcon from "../assets/images/icons/bull.svg";
import layerIcon from "../assets/images/icons/layer.svg";
import moneyImg from "../assets/images/others/money.png";
import booksImg from "../assets/images/others/books.png";
import shieldIcon from "../assets/images/icons/shield.svg";
import objectIcon from "../assets/images/icons/object.svg";
import handshakeImg from "../assets/images/others/handshake.png";
import megaphoneImg from "../assets/images/others/megaphone.png";
import expansionIcon from "../assets/images/icons/expansion.svg";
import arrowRightImg from "../assets/images/icons/arrow-right.svg";
import sherzodTursunovImg from "../assets/images/others/sherzod-tursunov.png";

const Home = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 className="text-3xl font-bold text-white">
                Dastur kimlar uchun?
              </h2>

              {/* Section description */}
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Cards */}
          <ul className="grid grid-cols-3 gap-5">
            {/* 1 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={layerIcon}
                alt="Layer icon"
                className="size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>

            {/* 2 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={objectIcon}
                alt="Object icon"
                className="size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>

            {/* 3 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={appIcon}
                alt="Layer icon"
                className="size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>

            {/* 4 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={bullIcon}
                alt="Bull icon"
                className="size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>

            {/* 5 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={shieldIcon}
                alt="Shield icon"
                className="size-10"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>

            {/* 6 */}
            <li className="flex flex-col justify-between gap-5 min-h-64 bg-[#027FCC] p-8 rounded-3xl">
              {/* Icon */}
              <img
                width={40}
                height={40}
                src={expansionIcon}
                className="size-10"
                alt="Expansion icon"
              />

              {/* Details */}
              <div className="space-y-3.5">
                {/* Item title */}
                <h3 className="font-semibold text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                {/* Item description */}
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, sequi!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* About format of course */}
      <section id="about" className="py-20">
        <div className="container">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 className="text-3xl font-bold">Kurs formati haqida</h2>

              {/* Section description */}
              <p className="max-w-xl text-lg">
                Toshkent filialimizda 1 hafta davomida 1 marotaba jonli
                uchrashuv tashkil qilinadi. Uchrashuv davomida quyidagi
                muammolarga yechim topamiz.
              </p>
            </div>
          </div>

          {/* Main contents */}
          <ul className="flex flex-wrap items-center justify-center gap-5">
            {/* 1 */}
            <li className="flex flex-col items-center justify-center gap-3.5 max-w-52">
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
            <li className="flex flex-col items-center justify-center gap-3.5 max-w-52">
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
            <li className="flex flex-col items-center justify-center gap-3.5 max-w-52">
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
            <li className="flex flex-col items-center justify-center gap-3.5 max-w-52">
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
            <li className="flex flex-col items-center justify-center gap-3.5 max-w-52">
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
      <section className="py-20">
        <div className="container">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Kurs davomida quyidagi ma'lumotlarga ega bo'lasiz
          </h2>

          <Information />
        </div>
      </section>

      {/* Purposes */}
      <section className="bg-primary py-20">
        <div className="container">
          {/* Top */}
          <div className="flex justify-center w-full mb-12">
            <div className="space-y-3.5 text-center">
              {/* Section title */}
              <h2 className="text-3xl font-bold text-white">Maqsadlar</h2>

              {/* Section description */}
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Cards */}
          <Purposes />
        </div>
      </section>

      {/* Owner */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <img
              className="p-12"
              src={sherzodTursunovImg}
              alt="Sherzod tursunov"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* 1 */}
              <div className="max-w-lg space-y-3 text-center w-full bg-primary text-white p-8 rounded-2xl">
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
              <div className="max-w-lg space-y-3 text-center w-full bg-dark text-white p-8 rounded-2xl">
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
      <section id="modules" className="py-20">
        <div className="container">
          {/* Title */}
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Asosiy modullar
          </h2>

          <ModulesList />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center">Fotogalareya</h2>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-5">
              <button className="btn-prev flex items-center justify-center size-11 rotate-180 border-2 border-dark rounded-full opacity-70">
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
                />
              </button>

              <button className="btn-next flex items-center justify-center size-11 border-2 border-dark rounded-full opacity-70">
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

      {/* Gallery */}
      <section id="comments" className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center">Sharxlar</h2>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-5">
              <button className="comments-swiper-btn-prev flex items-center justify-center size-11 rotate-180 border-2 border-dark rounded-full opacity-70">
                <img
                  width={28}
                  height={28}
                  src={arrowRightImg}
                  alt="Arrow right icon"
                  className="size-6 sm:size-7"
                />
              </button>

              <button className="comments-swiper-btn-next flex items-center justify-center size-11 border-2 border-dark rounded-full opacity-70">
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
    </>
  );
};

export default Home;
