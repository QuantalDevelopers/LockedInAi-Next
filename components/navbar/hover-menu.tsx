"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export const MobileChildNavItems = ({
  navItem,
  onClose,
}: {
  navItem: any;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full justify-between text-neutral-300 hover:text-cyan-400"
      >
        <motion.span className="block">{navItem.name}</motion.span>
        <IconChevronDown className="text-neutral-300" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0 }}
            className="pl-4"
          >
            {navItem.children.map((child: any, childIdx: number) => (
              <Link
                key={`child-${childIdx}`}
                href={child.link}
                target={child.isExternal ? "_blank" : undefined}
                rel={child.isExternal ? "noopener noreferrer" : undefined}
                className="relative text-neutral-300 hover:text-cyan-400"
                onClick={onClose} // Trigger onClose when a child item is clicked
              >
                <motion.span className="block">{child.name}</motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-[0.9] active:scale-[0.98]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_0.2rem)] -translate-x-1/2 transform pt-4">
              <div className="">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="mt-4 overflow-hidden rounded bg-neutral-950 shadow-xl  backdrop-blur-sm"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="custom-scrollbar h-full max-h-[80vh] w-max overflow-y-auto p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center  space-x-4 rounded-full bg-neutral-950 px-4 py-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className="group relative flex gap-4 rounded-lg p-2 transition-all duration-300"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex gap-4">
        <picture>
          <img
            src={src}
            width={140}
            height={70}
            alt={title}
            className="flex-shrink-0 rounded-md shadow-2xl transition-all duration-300 group-hover:brightness-125"
          />
        </picture>
        <div>
          <h4 className="mb-1 text-base font-normal text-white">{title}</h4>
          <p className="max-w-[10rem] text-sm text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-lg border border-orange-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
};

export const HoveredLink = ({ children, target = "_self", ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-cyan-400 "
      target={target}
    >
      {children}
    </Link>
  );
};
