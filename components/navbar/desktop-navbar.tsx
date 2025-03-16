"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

import { useAffiliateTracker } from "../affiliate-link";
import { Button } from "../button";
import { HoveredLink, Menu, MenuItem } from "./hover-menu";
import Auth from "../products/Auth";

export const DesktopNavbar = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [showBackground, setShowBackground] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getAffiliate } = useAffiliateTracker();
  const affiliate = getAffiliate();

  useMotionValueEvent(scrollY, "change", (value) => {
    setShowBackground(value > 100);

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

  const isActive = (path: string) => pathname === path;

  return (
    <motion.div
      className={cn(
        "relative mx-auto flex w-full min-w-[1250px] justify-between rounded-3xl px-4 py-3 transition duration-200",
      )}
      animate={{
        width: showBackground ? "80%" : "100%",
        backgroundColor: showBackground ? "var(--neutral-900)" : "transparent",
        y: isVisible ? 0 : -200,
      }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="pointer-events-none absolute inset-0 h-full w-full rounded-full bg-neutral-900 [mask-image:linear-gradient(to_bottom,white,transparent,white)]"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row items-center">
        <Logo />
        <div className="hidden min-w-[600px] flex-row items-center justify-center text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-1">
          <Menu setActive={setActive}>
            <Link
              href="/ai-copilot"
              className="cursor-pointer rounded-lg border border-cyan-400/5 
    bg-cyan-500/10 px-3 font-bold text-cyan-400 
    shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all 
    duration-300 hover:-translate-y-0.5 
    hover:border-cyan-400/50
    hover:opacity-[0.9]
    hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    active:scale-[0.98]"
            >
              Interview & Meeting AI Copilot
            </Link>
            <Link
              href="/coding-copilot"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/coding-copilot") },
              )}
            >
              Coding Copilot
            </Link>
            {/* <Link
              href="/Not-Found"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/Not-Found") },
              )}
            >
              Not Found Page
            </Link> */}
            <Link
              href="/CompanyIndex"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/CompanyIndex") },
              )}
            >
              Company Details
            </Link>
            {/* Login */}
            {/* <Link
              href="/Auth"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/Auth") }
              )}
            >
              Login
            </Link> */}
            <Link
              href="/resume-guru"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/resume-guru") },
              )}
            >
              Resume Builder
            </Link>
            <Link
              href="/online-assessment"
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": isActive("/online-assessment") },
              )}
            >
              OA Copilot
            </Link>
            <Link
              href={`https://app.lockedinai.com/app/sub${affiliate}`}
              className={cn(
                "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]",
                { "font-bold text-cyan-400": pathname === "/app/sub" },
              )}
            >
              Pricing
            </Link>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <Link href="/tutorials" className="hover:text-cyan-400">
                  Tutorials
                </Link>
                <Link href="/#whyus" className="hover:text-cyan-400">
                  Why Us
                </Link>
                <Link href="/#feature" className="hover:text-cyan-400">
                  Features
                </Link>
                <Link href="/#testimonial" className="hover:text-cyan-400">
                  Testimonial
                </Link>
                <Link href="/#faq" className="hover:text-cyan-400">
                  FAQ
                </Link>
                <HoveredLink
                  href="https://discord.com/invite/SKZzemAU8a"
                  target="_blank"
                >
                  Community
                </HoveredLink>
                <HoveredLink
                  href="https://support.lockedinai.com/"
                  target="_blank"
                >
                  Support Page
                </HoveredLink>
                <Link href="/affiliate-partner" className="hover:text-cyan-400">
                  Partner Program
                </Link>
              </div>
            </MenuItem>
            <Link href="/blog" className="w-fit">
              <Button variant="muted" className="py-0">
                Strategy & Hack
              </Button>
            </Link>
          </Menu>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="simple"
          as={Link}
          href={`https://app.lockedinai.com/sign-in${affiliate}`}
        >
          Login
        </Button>
        <Button
          variant="primary"
          as={Link}
          href={`https://app.lockedinai.com/sign-up${affiliate}`}
        >
          Sign Up
        </Button>
      </div>
    </motion.div>
  );
};
