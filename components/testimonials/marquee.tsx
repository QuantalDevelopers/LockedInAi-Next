import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { testimonials } from "@/constants/page-testimonials";
import { cn } from "@/lib/utils";

export const TestimonialsMarquee = () => {
  return (
    <div className="relative pb-40">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-40 h-full w-10 bg-gradient-to-r from-charcoal to-transparent md:w-80"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-40 h-full w-10 bg-gradient-to-l from-charcoal to-transparent md:w-80"></div>
        <Marquee pauseOnHover className="h-full">
          {testimonials.map((testimonial, index) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="mt-8 flex items-center gap-2">
                <picture>
                  <img
                    src={testimonial.src}
                    alt="stuff"
                    className="min-h-[100px] rounded-full"
                  ></img>
                </picture>
                <div className="flex flex-col">
                  <QuoteDescription className="text-neutral-300">
                    {testimonial.name}
                  </QuoteDescription>
                  <QuoteDescription className="text-neutral-400">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </Marquee>
        <Marquee
          direction="right"
          className="mt-8 h-full"
          speed={40}
          pauseOnHover
        >
          {testimonials.map((testimonial, index) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="mt-8 flex items-center gap-2">
                <Image
                  src={testimonial.src}
                  alt="Caesar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription className="text-neutral-300">
                    {testimonial.name}
                  </QuoteDescription>
                  <QuoteDescription className="text-neutral-400">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group mx-2 h-full max-w-lg rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("py-2 text-base font-semibold text-white", className)}>
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("max-w-sm text-sm font-normal text-neutral-400", className)}
    >
      {children}
    </p>
  );
};
