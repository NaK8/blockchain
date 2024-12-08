import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface CircleProps {
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
}

const Circle = ({ className, children, animate = false }: CircleProps) => {
  return (
    <div
      className={twMerge(
        `relative inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900`,
        className,
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full border-[6px] border-transparent outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
          animate && "border-t-fuchsia-500/30",
        )}
      />
      {children}
    </div>
  );
};

export default Circle;
