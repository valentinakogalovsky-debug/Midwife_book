import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-heading text-2xl font-bold text-burgundy">{siteConfig.name}</p>
          <p className="mt-2 text-muted">{siteConfig.bookTitle}</p>
        </div>
        <div className="grid gap-4 text-sm text-muted">
          <p>
            Материалы сайта и книги носят информационный характер и не заменяют консультацию врача,
            диагностику или индивидуальные медицинские рекомендации.
          </p>
          <div className="flex flex-wrap gap-4 font-bold text-burgundy">
            <a href="/privacy">Политика конфиденциальности</a>
            <a href={siteConfig.contacts.whatsapp}>WhatsApp</a>
            <a href={siteConfig.contacts.telegram}>Telegram</a>
          </div>
          <p>© 2026 Михаль Когаловски. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
