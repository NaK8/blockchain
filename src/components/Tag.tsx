import React from "react";
import { twMerge } from "tailwind-merge";
import { tagColors, type ColorsType } from "../utils/cardColorUtils";

const Tag = ({
  children,
  className,
  color,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) => {
  return (
    <div
      className={twMerge(
        "inline-flex rounded-full bg-fuchsia-500/15 px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-fuchsia-500",
        tagColors[color as keyof ColorsType],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
