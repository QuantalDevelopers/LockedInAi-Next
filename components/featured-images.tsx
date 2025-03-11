"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  animate,
  AnimatePresence,
  motion,
  stagger,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

import { testimonials } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

export const FeaturedImages = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    animate(
      ".animation-container",
      {
        scale: [1.1, 1, 0.9, 1],
        opacity: [0, 1],
      },
      { duration: 0.4, delay: stagger(0.1) },
    );
  }, []);
  return (
    <div
      className={cn(
        "mb-10 mt-10 flex flex-col items-center",
        containerClassName,
      )}
    >
      <div
        className={twMerge(
          "mb-2 flex flex-col items-center justify-center sm:flex-row",
          className,
        )}
      >
        <div className="mb-4 flex flex-row items-center sm:mb-0">
          {testimonials.map((testimonial, idx) => (
            <div
              className="group  relative -mr-4"
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,

                      whiteSpace: "nowrap",
                    }}
                    className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-xs shadow-xl"
                  >
                    <div className="absolute inset-x-0 -bottom-px z-30 mx-auto h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                    <div className="absolute inset-x-0 -bottom-px z-30 mx-auto h-px w-[70%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                    <div className="flex items-center gap-2">
                      <div className="relative z-30 text-sm font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="rounded-sm bg-neutral-950 px-1 py-0.5 text-xs text-neutral-300">
                        {testimonial.designation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="animation-container">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative overflow-hidden rounded-2xl  border-2  border-neutral-200"
                >
                  <Image
                    onMouseMove={handleMouseMove}
                    height={100}
                    width={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14  object-cover object-top "
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-6 flex justify-center">
          {[...Array(5)].map((_, index) => (
            <BsStarFill
              key={index}
              className={showStars ? "mx-1 h-4 w-4 text-yellow-400" : "hidden"}
            />
          ))}
        </div>
      </div>
      <p
        className={twMerge(
          "relative z-40 ml-8 text-center text-sm text-neutral-400",
          textClassName,
        )}
      >
        Trusted by 60000+ users
      </p>
    </div>
  );
};
