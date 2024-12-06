import { twMerge } from "tailwind-merge";

interface TextButtonProps {
  children: React.ReactNode;
  className?: string;
}

const TextButton = ({ children, className }: TextButtonProps) => {
  return (
    <button
      className={twMerge(
        "font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
