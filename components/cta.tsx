import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

import { constructImageURL } from "@/lib/image-hosting";

import { TryItFreeButton } from "./affiliate-button";
import { Button } from "./button";
import { Container } from "./container";

export const CTA = () => {
  return (
    <div className="relative">
      <Container className="flex w-full flex-col items-center justify-between px-8 md:flex-row">
        <div>
          <div className="flex flex-col">
            <h2 className="mx-auto max-w-xl text-center text-xl font-bold text-white md:mx-0 md:text-left md:text-3xl">
              Get started with LockedIn AI today to unlock your potential.
            </h2>
          </div>

          <TryItFreeButton />
        </div>
        <Programs />
      </Container>
    </div>
  );
};

const programImages = [
  constructImageURL("/landing/aws_startups.svg"),
  constructImageURL("/landing/Google_for_Startups_logo.svg"),
  constructImageURL("/landing/MS_Startups.png"),
  constructImageURL("/landing/nvidia_inception_program.png"),
];

function Programs() {
  return (
    <div className="relative">
      <div>
        <div className="relative grid w-full grid-cols-2 gap-10 p-20">
          {programImages?.map((image, index) => (
            <div key={image} className="flex items-center justify-center">
              <Image
                src={image}
                alt={`img--${index}-${image}`}
                width={100}
                height={100}
                className="w-[150px] select-none object-contain filter"
                draggable={false}
              />
            </div>
          ))}
          <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-cyan-500/80 to-transparent blur-xl"></div>
        </div>
      </div>
    </div>
  );
}
