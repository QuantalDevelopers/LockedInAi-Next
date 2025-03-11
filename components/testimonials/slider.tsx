"use client";

import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

import { testimonials as pageTestimonials } from "@/constants/page-testimonials";
import { cn } from "@/lib/utils";

interface Item {
  src: StaticImageData;
  quote: string;
  name: string;
  designation?: string;
}

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = pageTestimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1,
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  return (
    <section>
      <div className="relative z-40 mx-auto h-80 max-w-3xl">
        <div className="relative pb-12 md:pb-20">
          <div className="absolute -top-2 left-1/2 -z-10 -mt-6 h-20 w-80 -translate-x-1/2"></div>

          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full before:absolute before:inset-0 before:-z-20 before:rounded-full before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:absolute after:inset-0 after:-z-20 after:m-px after:rounded-full after:bg-neutral-900">
                {testimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; order-first"
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb;"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                  >
                    <div className="absolute inset-0 -z-10 h-full">
                      <picture>
                        <img
                          className="relative left-1/2 top-11 max-h-[50px] -translate-x-1/2"
                          src={item.src}
                          alt={item.name}
                        />
                      </picture>
                    </div>
                  </Transition>
                ))}
              </div>
            </div>

            <div className="mb-10 h-32 px-8 transition-all  ease-in-out sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {testimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out  order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out  absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                  >
                    <div className="text-base font-bold md:text-xl">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="-m-1.5 flex flex-wrap justify-center px-8 sm:px-6">
              {testimonials.map((item, index) => (
                <button
                  className={cn(
                    `relative z-10 m-1.5 rounded-full border bg-black px-2 py-1 text-xs text-neutral-300 `,
                    active === index
                      ? "border-secondary/50"
                      : "border-transparent",
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="font-bold text-neutral-50">
                      {item.name}
                    </span>{" "}
                    <br className="block sm:hidden" />
                    <span className="hidden text-neutral-600 sm:inline-block">
                      -
                    </span>{" "}
                    <span className="hidden sm:inline-block">
                      {item.designation}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
