import { twMerge } from "tailwind-merge";

interface CircleProps {
  className?: string;
  children: React.ReactNode;
}

const Circle = ({ className, children }: CircleProps) => {
  return (
    <div
      className={twMerge(
        `inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Circle;
