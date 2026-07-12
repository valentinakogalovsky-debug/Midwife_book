import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "surface" | "blush";
  decorative?: boolean;
};

export function Card({ children, tone = "surface", decorative = true, className = "", ...props }: CardProps) {
  const toneClass = tone === "blush" ? "bg-blushSoft" : "bg-surface";
  const decorativeClass = decorative ? "ornate-card" : "";

  return (
    <div
      className={`rounded-card border border-line/80 ${toneClass} ${decorativeClass} p-5 shadow-soft sm:p-6 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
