"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/design-system/components";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/visual/BrandLogo";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-background/94 px-4 py-3 backdrop-blur md:px-8 md:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link aria-label="На главную" href="/">
          <BrandLogo className="max-h-11 max-w-[150px] sm:max-w-[190px] md:max-h-12 md:max-w-[230px]" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-ink md:flex" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <a className="transition hover:text-burgundy" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="hidden min-h-11 px-4 py-2 text-sm md:inline-flex" href={siteConfig.cta.href}>
          {siteConfig.cta.label}
        </Button>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex min-h-11 items-center gap-2 rounded-control border border-line bg-surface px-4 py-2 text-sm font-extrabold text-burgundy shadow-soft md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <span className="grid gap-1" aria-hidden="true">
            <span className="block h-0.5 w-4 rounded-full bg-burgundy" />
            <span className="block h-0.5 w-4 rounded-full bg-burgundy" />
            <span className="block h-0.5 w-4 rounded-full bg-burgundy" />
          </span>
          Меню
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          aria-label="Мобильная навигация"
          className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-card border border-line bg-surface p-3 text-base font-bold text-ink shadow-soft md:hidden"
          id="mobile-navigation"
        >
          {siteConfig.nav.map((item) => (
            <a
              className="rounded-control px-4 py-3 transition hover:bg-blushSoft hover:text-burgundy"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-1" href={siteConfig.cta.href} onClick={() => setIsMenuOpen(false)}>
            {siteConfig.cta.label}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
