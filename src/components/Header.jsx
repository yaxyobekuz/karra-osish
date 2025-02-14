import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import hamburgerIcon from "../assets/images/icons/hamburger.svg";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);

    if (!isOpenMenu) {
      window.scrollTo(0, 0);
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  };

  return (
    <header id="main" className="py-2 relative bg-white/5">
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
            <li>
              <a href="#main">Asosiy</a>
            </li>
            <li>
              <a href="#about">Haqida</a>
            </li>
            <li>
              <a href="#modules">Modullar</a>
            </li>
            <li>
              <a href="#gallery">Fotogalareya</a>
            </li>
            <li>
              <a href="#comments">Sharxlar</a>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <a href="#develop" className="hidden btn-primary sm:flex">
              Qabulga yozilish
            </a>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center size-10 bg-neutral-100 rounded-full border transition-colors duration-200 hover:bg-neutral-200 sm:size-11 lg:hidden"
            >
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

      {/* Responsive menu */}
      <div
        className={`${
          isOpenMenu ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
        } fixed inset-x-0 top-[60px] z-50 bg-gray-light w-full h-screen transition-transform duration-300 dark:bg-[#212121] sm:top-16 md:top-[72px]`}
      >
        <div className="p-8">
          <ul className="flex flex-col items-center gap-8">
            <li>
              <a href="#main" onClick={toggleMenu}>
                Asosiy
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Haqida
              </a>
            </li>
            <li>
              <a href="#modules" onClick={toggleMenu}>
                Modullar
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={toggleMenu}>
                Fotogalareya
              </a>
            </li>
            <li>
              <a href="#comments" onClick={toggleMenu}>
                Sharxlar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
