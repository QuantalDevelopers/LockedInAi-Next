"use client";

import React, { useState } from "react";
import { Apple, Monitor } from "lucide-react";

import { MacTutorial } from "./mac-os";
import { WindowsTutorial } from "./windows-os";

export function TutorialContent(): JSX.Element {
  const [isMac, setIsMac] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-center pt-32 md:ml-48">
        <div className="inline-flex rounded-xl border border-gray-700/30 bg-gray-700/50 p-1 backdrop-blur-sm">
          <button
            onClick={() => setIsMac(false)}
            className={`flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
              !isMac
                ? "bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Monitor className="h-4 w-4" />
            Windows
          </button>
          <button
            onClick={() => setIsMac(true)}
            className={`flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
              isMac
                ? "bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Apple className="h-4 w-4" />
            Mac
          </button>
        </div>
      </div>

      <div className="flex-1 pt-10">
        <div className="rounded-xl">
          {isMac ? <MacTutorial /> : <WindowsTutorial />}
        </div>
      </div>
    </div>
  );
}
