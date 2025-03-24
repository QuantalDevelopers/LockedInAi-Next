import React, { useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

interface ScrollSpyProps {
  sections: Section[];
  onSectionChange: (sectionId: string) => void;
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({
  sections,
  onSectionChange,
}) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // This will trigger when the section is 20% into view
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionChange(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, onSectionChange]);

  return null;
};
