"use client";

import { motion } from "framer-motion";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

// Below for mobile navbar only
const navItems = [
  {
    name: "Interview & Meeting AI Copilot",
    link: "/ai-copilot",
    highlight: true,
  },
  {
    name: "Coding Copilot",
    link: "/coding-copilot",
  },
  {
    name: "Company Details",
    link : "/CompanyIndex",
  },
  {
    name: "Resume Builder",
    link: "/resume-guru",
  },
  {
    name: "OA Copilot",
    link: "/online-assessment",
  },
  {
    name: "Pricing",
    link: "https://app.lockedinai.com/app/sub",
  },
  {
    name: "Resources",
    link: "/",
    children: [
      {
        name: "Tutorials",
        link: "/tutorials",
      },
      {
        name: "Why Us",
        link: "/#whyus",
      },
      {
        name: "Feature",
        link: "/#feature",
      },
      {
        name: "Testimonial",
        link: "/#testimonial",
      },
      {
        name: "FAQ",
        link: "/#faq",
      },
      {
        name: "Community",
        link: "https://discord.com/invite/SKZzemAU8a",
      },
      {
        name: "Support Page",
        link: "https://support.lockedinai.com/",
      },
      {
        name: "Partner Program",
        link: "/affiliate-partner",
      },
    ],
  },
  {
    name: "Strategy & Hack",
    link: "/blog",
  },
];
export function NavBar() {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="fixed  inset-x-0 top-20 z-50  mx-auto w-[95%] max-w-7xl md:top-12 lg:w-full"
    >
      <div className="hidden w-full lg:block">
        <DesktopNavbar />
      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        <MobileNavbar navItems={navItems} />
      </div>
    </motion.nav>
  );
}
