import React from "react";

import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("py-2 text-lg font-semibold text-white", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("max-w-sm text-sm font-normal text-neutral-400", className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "z-40 h-[20rem] rounded-xl",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
      )}
    >
      {children}
    </div>
  );
};
