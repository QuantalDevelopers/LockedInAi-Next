"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { AmbientColor } from "./ambient-color";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export default function PageNotFound() {
  return (
    <>
      <AmbientColor />
      <div className="flex min-h-screen items-center justify-center  px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h1">404</Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Subheading>Page Not Found</Subheading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="space-x-4">
              <button
                onClick={() => window.history.back()}
                className="rounded-lg bg-cyan-400 px-6 py-2 font-medium text-black transition-colors duration-200 hover:bg-sky-500"
              >
                Go Back
              </button>

              <Link
                href="https://www.lockedinai.com/"
                className="inline-block rounded-lg bg-gray-700 px-6 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
              >
                Home Page
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
