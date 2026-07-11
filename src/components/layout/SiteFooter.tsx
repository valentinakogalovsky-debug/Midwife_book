"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/visual/BrandLogo";
import { Button } from "@/design-system/components";

function FooterContactLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return <span className="cursor-not-allowed text-muted/60">{label}</span>;
  }

  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  );
}

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/thank-you") {
    return null;
  }

  return (
    <footer className="border-t border-line bg-surface px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <BrandLogo className="max-w-[180px]" variant="full" />
          <p className="mt-2 text-muted">{siteConfig.bookTitle}</p>
        </div>
        <div className="grid gap-4 text-sm text-muted">
          <nav
            aria-label="Навигация в подвале"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 font-bold text-ink"
          >
            {siteConfig.nav.map((item) => (
              <a className="transition hover:text-burgundy" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <Button className="min-h-10 px-4 py-2 text-sm" href={siteConfig.cta.href}>
              {siteConfig.cta.label}
            </Button>
          </nav>
          <p>
            Материалы сайта и книги носят информационный характер и не заменяют консультацию врача,
            диагностику или индивидуальные медицинские рекомендации.
          </p>
          <div className="flex flex-wrap gap-4 font-bold text-burgundy">
            <a href="/privacy">Политика конфиденциальности</a>
            <FooterContactLink href={siteConfig.contacts.whatsapp} label="WhatsApp" />
            <FooterContactLink href={siteConfig.contacts.telegram} label="Telegram" />
          </div>
          <p>© 2026 Михаль Когаловски. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
