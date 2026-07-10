import Link from "next/link";
import { Button } from "@/design-system/components";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/visual/BrandLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-background/92 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
        <Link aria-label="На главную" href="/">
          <BrandLogo className="max-h-12 max-w-[190px] md:max-w-[230px]" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-ink md:flex" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <a className="transition hover:text-burgundy" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="min-h-11 px-4 py-2 text-sm" href={siteConfig.cta.href}>
          {siteConfig.cta.label}
        </Button>
      </div>
    </header>
  );
}
