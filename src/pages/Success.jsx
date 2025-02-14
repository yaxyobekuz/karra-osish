import React from "react";
import useGsap from "../hooks/useGsap";

// Images
import successIcon from "../assets/images/others/success.png";
import { Link } from "react-router-dom";

const Success = () => {
  const animate = useGsap();

  return (
    <div className="flex items-center min-h-screen pt-20 pb-40">
      <div className="container space-y-5">
        <img
          width={80}
          height={80}
          src={successIcon}
          alt="Success icon"
          className="size-20"
        />

        <h1 className="text-2xl font-semibold xs:text-3xl">Muvaffaqiyatli!</h1>

        <p className="font-medium opacity-70 xs:text-lg">
          So'rovingiz muvaffaqiyatli qabul qilindi. <br /> Operatorlarimiz tez
          orada siz bilan bog'lanishadi.
        </p>

        <div className="flex items-center gap-5">
          <Link to="/" className="btn-primary w-full px-0 xs:w-40">
            Bosh sahifa
          </Link>

          <a
            target="_blank"
            href="https://t.me/karrausish"
            className="btn-secondary w-full px-0 xs:w-40"
          >
            Telegram kanal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
