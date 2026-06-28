import { ReactNode } from "react";
import clsx from "clsx";

const colorMap = {
  purple: "text-[var(--color-purple)] bg-[var(--color-purple)]/10 border-[var(--color-purple)]/20",
  blue: "text-[var(--color-blue)] bg-[var(--color-blue)]/10 border-[var(--color-blue)]/20",
  green: "text-[var(--color-green)] bg-[var(--color-green)]/10 border-[var(--color-green)]/20",
} as const;

export function Eyebrow({
  children,
  icon,
  color = "purple",
}: {
  children: ReactNode;
  icon?: ReactNode;
  color?: keyof typeof colorMap;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium tracking-wide",
        colorMap[color]
      )}
    >
      {icon}
      {children}
    </div>
  );
}
