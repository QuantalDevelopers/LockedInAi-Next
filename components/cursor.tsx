"use client";

import { useCursorEffect } from "./use-hover-cursor";

export function Cursor() {
  useCursorEffect();
  return (
    <>
      <div className="cursor"></div>
    </>
  );
}
