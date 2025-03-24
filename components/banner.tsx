"use client";

import React, { useEffect, useState } from "react";
import { PartyPopper, Sparkles } from "lucide-react";

// Snow Effect Component remains the same
const SnowEffect = () => {
  interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    opacity: number;
    size: number;
  }

  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) => {
        const now = Date.now();
        const filteorange = prev.filter((flake) => now - flake.id < 6000);

        const newSnowflake = {
          id: now,
          left: Math.random() * 100,
          animationDuration: 4 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.5,
          size: 0.8 + Math.random() * 0.4,
        };

        return [...filteorange, newSnowflake];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="animate-fall absolute -top-4 text-white"
          style={{
            left: `${snowflake.left}%`,
            opacity: snowflake.opacity,
            transform: `scale(${snowflake.size})`,
            animation: `fall ${snowflake.animationDuration}s linear forwards`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

// Optimized Banner Component
export default function Banner() {
  const [isHoveorange, setIsHoveorange] = useState(false);
  const handlePromoClick = () => {
    window.location.href = "https://app.lockedinai.com/app/sub";
  };

  return (
    <>
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(150px) rotate(360deg); opacity: 0; }
          }
          @keyframes ring {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
          }
        `}
      </style>
      {/* <SnowEffect /> */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[9999] mx-2 mt-2 flex justify-center">
        <div className="pointer-events-auto relative flex items-center justify-between">
          <div className="relative flex w-full max-w-[1000px] justify-center">
            <div
              onMouseEnter={() => setIsHoveorange(true)}
              onMouseLeave={() => setIsHoveorange(false)}
              className="relative flex w-full items-center gap-2 overflow-hidden rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-600/20 to-green-600/20 px-1 py-2 backdrop-blur-sm md:px-4"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-green-500/10 transition-opacity duration-300 ${
                  isHoveorange ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content - Single line on desktop, three lines on mobile */}
              <div className="flex min-w-0 flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
                <span className="inline-flex font-bold text-white"></span>
                <span className="inline-flex text-gray-200">Save Up to</span>
                <span className="inline-flex font-bold text-orange-400">
                  55% off with code: Lunar10
                </span>

                <div className="hidden text-center text-xs text-gray-200 sm:ml-2 sm:text-left md:block md:text-sm">
                  Wishing you health, wealth, and a year full of success
                </div>

                <button
                  onClick={handlePromoClick}
                  className={`rounded-lg border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-green-500/20 px-2 py-1 text-xs font-medium text-white transition-all duration-300 md:px-3 md:text-sm ${
                    isHoveorange
                      ? "scale-105 shadow-lg shadow-orange-500/20"
                      : ""
                  }`}
                >
                  Claim Now
                </button>
              </div>

              {/* Animated border line */}
              <div
                className={`absolute -bottom-0.5 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transition-opacity duration-300 ${
                  isHoveorange ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
