"use client";

import { useEffect, useState } from "react";

import { NotSupportedBrowser } from "./not-supported-browser";

interface SecureBrowserLayoutProps {
  children: React.ReactNode;
}

export function SecureBrowserLayout(props: SecureBrowserLayoutProps) {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const isBrowserSupported =
      "Promise" in window &&
      "fetch" in window &&
      "assign" in Object &&
      "IntersectionObserver" in window; // Another modern feature supported in the listed browsers

    if (!isBrowserSupported) {
      setIsSupported(false);
    }
  }, []);
  return (
    <div>
      {isSupported ? (
        <div>{props.children}</div>
      ) : (
        <div>
          <NotSupportedBrowser />
        </div>
      )}
    </div>
  );
}
