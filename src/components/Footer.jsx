import React from "react";
import { Link } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import facebookIcon from "../assets/images/icons/facebook.svg";
import telegramIcon from "../assets/images/icons/telegram.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="py-10 bg-white/5 border-t border-[#393939] xs:border-t-2">
      <div className="container space-y-8 sm:space-y-5">
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

          {/* Social */}
          <ul className="flex items-center gap-3.5">
            <li>
              <a
                target="_blank"
                title="Facebook"
                aria-label="Facebook"
                href="https://.com/karrausish"
              >
                <img
                  width={32}
                  height={32}
                  src={facebookIcon}
                  alt="Facebook logo icon"
                  className="size-8 rounded-lg bg-white"
                />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                title="Instagram"
                aria-label="Instagram"
                href="https://.com/karrausish"
              >
                <img
                  width={32}
                  height={32}
                  src={instagramIcon}
                  alt="Instagram logo icon"
                  className="size-8"
                />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                title="Telegram"
                aria-label="Telegram"
                href="https://.com/karrausish"
              >
                <img
                  width={32}
                  height={32}
                  src={telegramIcon}
                  alt="Telegram logo icon"
                  className="size-8"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Nav */}
        <ul className="flex flex-col items-center gap-8 sm:flex-row lg:hidden">
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
      </div>
    </footer>
  );
};

export default Footer;
