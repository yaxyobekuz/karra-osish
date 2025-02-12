import React from "react";
import { Link } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";

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
              className="size-14"
            />
            <span className="text-lg font-semibold">Karra o'sish</span>
          </Link>

          {/* Nav */}
          <ul className="flex items-center gap-8">
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

          {/* Button */}
          <a href="#" className="btn-primary">
            Qabulga yozilish
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
