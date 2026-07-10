import Image from "next/image";
import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  variant?: "horizontal" | "full" | "compact";
  priority?: boolean;
  className?: string;
};

const logoMap = {
  horizontal: {
    src: siteConfig.assets.logoHorizontal,
    alt: "Михаль Когаловски",
    width: 560,
    height: 160
  },
  full: {
    src: siteConfig.assets.logoFull,
    alt: "Логотип Михаль Когаловски",
    width: 420,
    height: 520
  },
  compact: {
    src: siteConfig.assets.logoCompact,
    alt: "Знак Михаль Когаловски",
    width: 320,
    height: 320
  }
} as const;

export function BrandLogo({ variant = "horizontal", priority = false, className = "" }: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <Image
      alt={logo.alt}
      className={`h-auto w-auto ${className}`}
      height={logo.height}
      priority={priority}
      src={logo.src}
      width={logo.width}
    />
  );
}
