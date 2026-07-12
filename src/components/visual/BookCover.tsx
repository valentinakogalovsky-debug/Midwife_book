import Image from "next/image";
import { siteConfig } from "@/config/site";

type BookCoverProps = {
  priority?: boolean;
  className?: string;
};

export function BookCover({ priority = false, className = "" }: BookCoverProps) {
  return (
    <Image
      alt={`Обложка электронной книги «${siteConfig.bookTitle}»`}
      className={`h-auto w-full rounded-[22px] border border-line bg-surface shadow-soft ${className}`}
      height={1536}
      priority={priority}
      src={siteConfig.assets.bookCover}
      width={1024}
    />
  );
}
