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
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

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
  const { isSignedIn } = useUser();

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
          borderRadius: open ? "10px" : "2rem",
          y: isVisible ? 0 : -200,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
        key={String(open)}
        className="relative mx-4 mt-2 flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-neutral-950 px-5 py-3 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            {isSignedIn && (
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "rounded-full border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300",
                  }
                }}
              />
            )}
            <button 
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700 active:scale-95"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IconX className="h-5 w-5 text-cyan-400" />
              ) : (
                <IconMenu2 className="h-5 w-5 text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-neutral-950 px-5 py-6 shadow-lg"
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
                      className="relative block py-2 text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:opacity-[0.9]"
                      onClick={() => setOpen(!open)}
                    >
                      <motion.span className="block">
                        {navItem.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
              
              {isSignedIn ? (
                <Link 
                  href="/profile"
                  className="mt-4 w-full py-2 text-left text-base font-medium text-white hover:text-cyan-400"
                  onClick={() => setOpen(!open)}
                >
                  Profile
                </Link>
              ) : (
                <div className="mt-2 grid w-full grid-cols-2 items-start gap-3 py-4">
                  <Link href="/sign-up">
                    <Button 
                      variant="primary"
                      className="flex w-full items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-medium text-black shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-200 hover:bg-sky-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] active:scale-95 sm:text-sm"
                      onClick={() => setOpen(!open)}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      variant="simple"
                      className="flex w-full items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-neutral-800 active:scale-95"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="text-sm">Login</span>
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
