"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function StatsWithNumberTicker() {
  const items = [
    {
      description: "Lightening response time",
      value: 116,
      subtext: "ms",
    },
    {
      description: "Hours supported",
      value: 6219879,
      subtext: "h",
    },
    {
      description: "Offers/Deals locked in",
      value: 689666,
      subtext: "",
    },

    {
      description: "Users benefited",
      value: 869852,
      subtext: "",
    },
  ];
  return (
    <section className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-10 py-2">
      <div className="md:32 relative z-20 mt-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-10">
          {items.map((item, index) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg ")}
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm font-bold text-cyan-400 md:text-3xl">
                  <AnimatedNumber value={item.value} />{" "}
                  <span className="md:text-xl">{item.subtext}</span>
                </p>
              </div>
              <p className="mt-4 text-balance text-center text-sm text-neutral-300 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
