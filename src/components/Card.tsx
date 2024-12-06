import React, { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import TextButton from "./TextButton";
import {
  bgColors,
  textColors,
  hoverColors,
  type ColorsType,
} from "../utils/cardColorUtils";

const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  },
) => {
  const { color, children, className, buttonText } = props;
  return (
    <div
      className={twMerge("group relative z-0 p-8 md:p-10", className)}
      key={crypto.randomUUID()}
    >
      <div
        className={twMerge(
          `absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100`,
          bgColors[color as keyof ColorsType],
        )}
      ></div>
      <div
        className={twMerge(
          "absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400",
          bgColors[color as keyof ColorsType],
          hoverColors[color as keyof ColorsType],
        )}
      ></div>
      <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div>{children}</div>
      <div className="mt-12 flex justify-between">
        <TextButton className={textColors[color as keyof ColorsType]}>
          {buttonText || "Learn More"}
        </TextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 -translate-x-2 text-zinc-500 transition duration-300 group-hover:-translate-x-0 group-hover:text-zinc-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
