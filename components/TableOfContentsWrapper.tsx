// TableOfContentsWrapper.tsx
"use client";

import React, { useEffect, useState } from "react";

import { TableOfContents } from "./TableOfContents";

interface Heading {
  id: string;
  text: string;
  element?: HTMLElement;
}

export function TableOfContentsWrapper() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const generateId = (text: string): string =>
      text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const processHeadings = (): Heading[] => {
      const headingElements = document.querySelectorAll(".prose h2");
      const extractedHeadings = Array.from(headingElements).map((heading) => {
        const text = heading.textContent || "";
        const id = generateId(text);

        if (!heading.id) {
          heading.id = id;
        }

        return {
          id,
          text,
          element: heading as HTMLElement,
        };
      });

      return extractedHeadings;
    };

    const timeoutId = setTimeout(() => {
      const extractedHeadings = processHeadings();
      setHeadings(extractedHeadings);

      // Create an observer for each heading
      const observers = extractedHeadings.map(({ element, id }) => {
        if (!element) return null;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-10% 0px -80% 0px",
            threshold: [0, 1],
          },
        );

        observer.observe(element);
        return observer;
      });

      return () => {
        observers.forEach((observer) => observer?.disconnect());
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height || 0;
      const padding = 32; // Additional padding

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - padding;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <TableOfContents
      headings={headings}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
    />
  );
}
