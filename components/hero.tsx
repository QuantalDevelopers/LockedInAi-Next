import React from "react";
import Image from "next/image";

import { constructImageURL } from "@/lib/image-hosting";

import { StartForFreeButtonHero } from "./affiliate-button";
import { Container } from "./container";
import { StatsWithNumberTicker } from "./testimonials/stats";

const companyLogos = [
  {
    filename: "google.png",
    alt: "Google - Leading technology company and search engine",
  },
  {
    filename: "meta_v1.png",
    alt: "Meta - Parent company of Facebook, Instagram, and WhatsApp",
  },
  {
    filename: "amazon_card_icon.png",
    alt: "Amazon - Global e-commerce and cloud computing leader",
  },
  {
    filename: "netflix.png",
    alt: "Netflix - World's leading streaming entertainment service",
  },
  {
    filename: "spotify_v1.png",
    alt: "Spotify - Leading music streaming service",
  },
];

export const Hero = () => {
  return (
    <div className="relative flex min-h-[20rem] flex-col overflow-hidden pt-20 md:min-h-[65rem] md:pt-28">
      <Container className="flex flex-col md:flex-row md:justify-between md:gap-8">
        {/* Left content section */}
        <div className="flex flex-col items-center text-center md:ml-10 md:w-1/2 md:items-start md:text-start">
          <h1
            className="relative z-10 mt-32 text-3xl font-bold lg:text-5xl"
            style={{ lineHeight: "1.5" }}
          >
            <span className="text-cyan-400">Crush </span>
            Top Companies&apos; Job Interviews with{" "}
            <span className="text-cyan-400">LockedIn AI™ </span>
          </h1>

          <h2 className="relative z-10 mt-2 text-xs text-white md:mt-6 md:text-sm">
            <span className="text-base font-bold md:text-xl">
              {" "}
              # 1 AI Interview & Professional Meeting Copilot{" "}
            </span>
            <br />
            <br />
            Auto-generate tailored, accurate and real-time answers
            <br className="block md:hidden" /> and provide live coaching for any
            <br className="block md:hidden" />
            <span className="font-semibold text-cyan-400">
              {" "}
              Job Interviews{" "}
            </span>
            and
            <span className="font-semibold text-cyan-400">
              {" "}
              Professional Meetings
            </span>
          </h2>
          <div className="relative z-10 mt-10 items-center gap-2 md:mt-20">
            <StartForFreeButtonHero />
            <div className="text-xs text-neutral-400">
              <span>No credit card or download required</span>
            </div>
          </div>
        </div>

        {/* Right video section */}
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <div className="relative mt-8 flex w-full items-center justify-center">
            <div className="group relative isolate z-40 mx-auto w-full rounded-2xl border-4 border-neutral-900 bg-charcoal p-0 shadow-2xl">
              <div className="aspect-video w-full overflow-hidden bg-transparent px-6 py-2">
                <video
                  src={constructImageURL("/landing/landing_opening.mp4")}
                  className="h-full w-full rounded-md object-cover"
                  draggable={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          {/* Company logos section */}
          <div className="mt-20 w-full md:mt-8">
            <p className="mb-2 text-center text-sm font-bold text-gray-300">
              Lock In offers at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex h-16 w-16 items-center justify-center"
                >
                  <Image
                    src={constructImageURL(
                      `/landing/logos/${company.filename}`,
                    )}
                    alt={company.alt}
                    height={50}
                    width={50}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <StatsWithNumberTicker />
    </div>
  );
};

export default Hero;
