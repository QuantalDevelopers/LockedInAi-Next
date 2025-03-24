// Accordion.js

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded, title, description }: any) => {
  const isOpen = i === expanded;

  return (
    <div className="">
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-neutral-900 p-4 text-base font-bold"
      >
        {title}
        <AnimatePresence initial={false} mode="popLayout">
          {isOpen && (
            <motion.p
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-4 text-base font-normal text-neutral-400"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Accordion;
