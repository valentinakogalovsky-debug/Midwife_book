import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-burgundy text-white shadow-soft hover:bg-burgundySoft",
  secondary: "border border-burgundy/25 bg-surface text-burgundy hover:border-burgundy",
  ghost: "text-burgundy hover:bg-blushSoft"
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-control px-6 py-3 text-center text-base font-bold transition ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
