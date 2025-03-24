"use client";

// useCursorEffect.ts
import { useEffect } from "react";

export const useCursorEffect = () => {
  useEffect(() => {
    // Check if the device has touch capability
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      );
    };

    // If it's a touch device, don't initialize the cursor effect
    if (isTouchDevice()) {
      const cursor = document.querySelector<HTMLElement>(".cursor");
      if (cursor) {
        cursor.style.display = "none";
      }
      return;
    }
    const hoverElements = document.querySelectorAll<HTMLElement>(".hover-this");
    const cursor = document.querySelector<HTMLElement>(".cursor");

    if (!cursor) return;

    const editCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    const handleMouseEnter = () => {
      cursor.classList.add("hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("hover");
    };

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", editCursor);

    return () => {
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);
};
