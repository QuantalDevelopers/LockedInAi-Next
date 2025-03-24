"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ExpandableCardProps {
  items: any;
}

export function ExpandableCardOnClick(props: ExpandableCardProps) {
  const items = props.items;
  const [active, setActive] = useState<null | (typeof items)[number]>(null);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setActive(null);
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  });

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider 768px and below as mobile
    };
    // Set the initial value
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-full w-full px-4 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 md:px-8 md:py-20 lg:grid-cols-3 ">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 z-10 h-full w-full "
            ></motion.div>
          )}
        </AnimatePresence>
        {active && (
          <div className="fixed inset-0  z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              key={active.title}
              className="max-w-sm rounded-2xl bg-neutral-900 shadow-md"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={500}
                  height={500}
                  className="h-60 rounded-2xl object-cover"
                />
              </motion.div>
              <div className="flex flex-col items-start p-6">
                <motion.p
                  layoutId={`title-${active.title}`}
                  className="text-lg font-bold  text-neutral-100"
                >
                  {active.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${active.title}`}
                  className="text-sm text-neutral-300"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-400"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        {items.map((item: any) => (
          <div className="" key={item.title}>
            <motion.div
              layoutId={`card-${item.title}`}
              onClick={() => setActive(item)}
              className="cursor-pointer rounded-2xl  bg-neutral-900 shadow-md"
            >
              <motion.div layoutId={`image-${item.title}`}>
                {!isMobile && (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                    className="h-60 rounded-2xl object-cover"
                  />
                )}
              </motion.div>
              <div className="flex flex-col items-start p-6">
                <motion.p
                  layoutId={`title-${item.title}`}
                  className="text-lg font-bold text-neutral-100"
                >
                  {item.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${item.title}`}
                  className="text-sm text-neutral-300"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
