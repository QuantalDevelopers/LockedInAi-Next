import React from "react";
import Link from "next/link";

import { Logo } from "@/components/logo";

export const Footer = () => {
  const links = [
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "https://discord.gg/x7XaKdBbEN",
    },
    {
      name: "Affiliate Partner",
      href: "/affiliate-partner",
    },
    {
      name: "Is it Safe?",
      href: "/is-it-safe",
    },
    {
      name: "Ethics",
      href: "/ethics",
    },
  ];
  const legal = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      name: "Refund Policy",
      href: "/refund-policy",
    },
  ];
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/lockedin-ai",
    },
    {
      name: "X",
      href: "https://x.com/lockedin_ai",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lockedin_ai",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@lockedin_ai",
    },
    {
      name: "Discord",
      href: "https://discord.gg/x7XaKdBbEN",
    },
  ];
  const year = new Date().getFullYear();
  const last = year - 1;
  return (
    <div className="relative">
      <div className="bg-primary relative border-t border-neutral-900 px-8 pb-32 pt-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm  text-neutral-400 sm:flex-row ">
          <div>
            <div className="mb-4  mr-4 md:flex">
              <Logo />
            </div>
            <div>
              Copyright &copy; {last}-{year} LockedIn AI{" "}
            </div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
            <div className="mt-4 flex flex-col justify-center space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="text-muted-dark text-xs text-muted transition-colors  hover:text-neutral-400 sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col justify-center space-y-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="text-muted-dark text-xs text-muted transition-colors  hover:text-neutral-400 sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col justify-center space-y-4">
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="text-muted-dark text-xs text-muted transition-colors  hover:text-neutral-400 sm:text-sm"
                  href={link.href}
                  target="_blank"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
