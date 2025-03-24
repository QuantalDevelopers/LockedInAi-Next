"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { useAffiliateTracker } from "../affiliate-link";
import { Button } from "../button";
import { Logo } from "../logo";
import { MobileChildNavItems } from "./hover-menu";

export const MobileNavbar = ({ navItems }: any) => {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getAffiliate } = useAffiliateTracker();
  const affiliate = getAffiliate();

  useMotionValueEvent(scrollY, "change", (value) => {
    // Determine scroll direction and update visibility
    if (value > lastScrollY && value > 100) {
      // Scrolling down & past threshold - hide nav
      setIsVisible(false);
    } else if (value < lastScrollY) {
      // Scrolling up - show nav
      setIsVisible(true);
    }
    setLastScrollY(value);
  });

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? "4px" : "2rem",
          y: isVisible ? 0 : -200,
        }}
        key={String(open)}
        className="relative mx-4 flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-neutral-950 px-4 py-2 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          {open ? (
            <IconX className="text-white" onClick={() => setOpen(!open)} />
          ) : (
            <IconMenu2 className="text-white" onClick={() => setOpen(!open)} />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-950 px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <div key={`navItem-${idx}`} className="w-full">
                  {navItem.children ? (
                    <MobileChildNavItems
                      navItem={navItem}
                      onClose={() => setOpen(!open)}
                    />
                  ) : (
                    <Link
                      href={navItem.link}
                      className={`relative 
           
          transition-all duration-300 hover:text-cyan-400 hover:opacity-[0.9]`}
                      onClick={() => setOpen(!open)}
                    >
                      <motion.span className="block">
                        {navItem.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="grid w-full grid-cols-2 items-start gap-2.5 py-4">
                <a
                  href={`https://app.lockedinai.com/sign-up${affiliate}`}
                  className="flex min-w-[120px] items-center justify-center rounded-lg bg-cyan-400 px-8 py-2 text-xs text-black transition-all duration-200 hover:bg-sky-400 sm:text-sm"
                  onClick={() => setOpen(!open)} // Close navbar on sign-up click
                >
                  SIGN UP
                </a>
                <Button
                  variant="simple"
                  as={Link}
                  href={`https://app.lockedinai.com/sign-in${affiliate}`}
                  onClick={() => setOpen(!open)} // Close navbar on login click
                >
                  <span className="text-xs md:text-base">Login</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
