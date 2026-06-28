import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] font-medium transition-all duration-[250ms] ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-purple)] text-white hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_-6px_rgba(124,58,237,0.5)] hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "bg-transparent text-white border border-white/15 hover:border-white/30 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-[16px]",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
