"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { constructImageURL } from "@/lib/image-hosting";

export function MeetingClouds() {
  const [logos, setLogos] = useState([
    [
      {
        name: "LiveStorm",
        src: constructImageURL("/landing/livestorm.png"),
      },
      {
        name: "Zoom",
        src: constructImageURL("/landing/zoom.png"),
      },
      {
        name: "Google Meet",
        src: constructImageURL("/landing/google_meet.png"),
      },
      {
        name: "Microsoft Teams",
        src: constructImageURL("/landing/teams.png"),
      },
    ],
    [
      {
        name: "goto",
        src: constructImageURL("/landing/goto.png"),
      },
      {
        name: "Webex",
        src: constructImageURL("/landing/webex.png"),
      },
      {
        name: "zoho",
        src: constructImageURL("/landing/zoho.png"),
      },
      {
        name: "Skype",
        src: constructImageURL("/landing/skype.png"),
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 bg-gradient-to-b from-transparent to-cyan-800 px-4 py-20 md:px-8 md:py-40">
      <h2 className=" hover-this bg-clip-text  text-center font-sans text-2xl font-bold text-transparent text-white md:text-5xl">
        Supports All Major Meeting Softwares
      </h2>
      <p className="mt-4 text-center font-sans text-base text-neutral-300">
        Our AI assistant works with all major meeting software, including Zoom,
        Google Meet, Microsoft Teams, and more.
      </p>
      <div className="relative mt-20 flex h-full w-full flex-wrap justify-center gap-10 md:gap-10">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.name}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width="100"
                height="100"
                className="h-10 w-20 object-contain filter md:h-20 md:w-40"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 text-center text-sm text-neutral-500">
        * Lockedin AI captures system audio to identify interview content,
        theoretically supporting all platforms. Please make sure your browser is
        updated to the latest version.
      </div>
    </div>
  );
}
