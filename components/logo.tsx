import React from "react";
import { Link } from "next-view-transitions";

import { constructImageURL } from "@/lib/image-hosting";

export const MINIMIZED_LOGO_URL = `${constructImageURL("/landing/toggled-logo.png")}`;
// export const MINIMIZED_LOGO_URL = `${constructImageURL("/landing/logo_black_friday2.png")}`;
export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2  px-2 py-1 text-sm  font-normal text-black transition-transform duration-300 hover:scale-110"
    >
      <picture>
        <img
          // className="h-16 w-40 object-contain pt-1 sm:h-24 sm:w-60"
          className="h-6 w-6 object-contain"
          src={MINIMIZED_LOGO_URL}
          alt="LockedIn AI"
        />
      </picture>
      <span className="font-bold text-white">LockedIn AI</span>
    </Link>
  );
};
