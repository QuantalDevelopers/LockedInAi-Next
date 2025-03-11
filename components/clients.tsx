import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { BlurImage } from "./blur-image";

export const Clients = () => {
  let [logos, setLogos] = useState([
    {
      title: "netflix",
      src: "/logos/netflix.png",
    },
    {
      title: "google",
      src: "/logos/google.webp",
    },
    {
      title: "meta",
      src: "/logos/meta.png",
    },
    {
      title: "onlyfans",
      src: "/logos/onlyfans.png",
    },
    {
      title: "netflix second",
      src: "/logos/netflix.png",
    },
    {
      title: "google second",
      src: "/logos/google.webp",
    },
    {
      title: "meta second",
      src: "/logos/meta.png",
    },
    {
      title: "onlyfans second",
      src: "/logos/onlyfans.png",
    },
  ]);
  return (
    <div className="h-40 pb-40 pt-20">
      <p className="mb-4 text-center text-neutral-400">
        Trusted by big industries
      </p>
      <div className="relative mx-auto flex max-w-7xl justify-center gap-4">
        <div className="pointer-events-none absolute inset-0 z-40 bg-charcoal grayscale [mask-image:_radial-gradient(circle,_transparent_10%,_#000000_100%)]" />
        <Marquee>
          {logos.map((logo, idx) => (
            <BlurImage
              key={logo.title + idx}
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className=" mx-8 object-contain grayscale transition duration-200 hover:grayscale-0"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
