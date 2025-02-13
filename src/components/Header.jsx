import React from "react";
import { Link } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import hamburgerIcon from "../assets/images/icons/hamburger.svg";

const Header = () => {
  return (
    <header className="py-2 bg-white/50">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              width={56}
              height={56}
              src={logoIcon}
              alt="Logo image"
              className="size-11 sm:size-12 md:size-14"
            />
            <span className="text-lg font-semibold">Karra o'sish</span>
          </Link>

          {/* Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            <li className="">
              <a href="">Asosiy</a>
            </li>
            <li className="">
              <a href="#about">Haqida</a>
            </li>
            <li className="">
              <a href="#modules">Modullar</a>
            </li>
            <li className="">
              <a href="#gallery">Fotogalareya</a>
            </li>
            <li className="">
              <a href="#comments">Sharxlar</a>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <a href="#develop" className="hidden btn-primary sm:flex">
              Qabulga yozilish
            </a>

            <button className="flex items-center justify-center size-10 bg-neutral-100 rounded-full border transition-colors duration-200 hover:bg-neutral-200 sm:size-11 lg:hidden">
              <img
                width={24}
                height={24}
                src={hamburgerIcon}
                alt="Hamburger menu icon"
                className="size-[21px] sm:size-6"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
