"use client";

// CustomCursor.tsx
import React, { useEffect, useRef, useState } from "react";

interface CursorProps {
  color?: string;
  size?: number;
  ringSize?: number;
  duration?: number;
}

export const CustomCursor: React.FC<CursorProps> = ({
  color = "#2196f3",
  size = 20,
  ringSize = 40,
  duration = 0.3,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const editCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX - size / 2}px, ${clientY - size / 2}px, 0)`;
    };

    const handleMouseOut = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseOver = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", editCursor);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", editCursor);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [size]);

  return (
    <div
      ref={cursorRef}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        transition: `transform ${duration}s ease-out, width ${duration}s ease-out, height ${duration}s ease-out, background-color ${duration}s ease-out`,
        transform: isHovering ? "scale(1.5)" : "scale(1)",
      }}
    >
      <div
        style={{
          width: ringSize,
          height: ringSize,
          position: "absolute",
          border: `2px solid ${color}`,
          borderRadius: "50%",
          opacity: 0.5,
          top: -(ringSize - size) / 2,
          left: -(ringSize - size) / 2,
          animation: "cursorAnim 1s infinite alternate",
        }}
      />
      <style>
        {`
          @keyframes cursorAnim {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.5);
            }
          }

          * {
            cursor: none;
          }
        `}
      </style>
    </div>
  );
};

// HoverEffect.tsx
interface HoverEffectProps {
  children: React.ReactNode;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = elementRef.current;
    const move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    setPosition({ x: xMove, y: yMove });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};
