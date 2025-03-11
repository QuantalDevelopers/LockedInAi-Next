"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSection,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-40 h-screen overflow-y-auto p-2 pt-48 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="rounded-xl border border-gray-700/30 bg-gray-800/60 p-6 backdrop-blur-sm">
        <h2 className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          Navigation
        </h2>
        <ul className="space-y-0.5">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`block rounded-lg p-3 text-[15px] font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-cyan-900 to-cyan-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
                onClick={onClose}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
