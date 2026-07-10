import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "surface" | "blush";
};

export function Card({ children, tone = "surface", className = "", ...props }: CardProps) {
  const toneClass = tone === "blush" ? "bg-blushSoft" : "bg-surface";

  return (
    <div
      className={`rounded-card border border-line/80 ${toneClass} p-6 shadow-soft md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
