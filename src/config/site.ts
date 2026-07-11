function buildWhatsAppLink() {
  const directLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK?.trim();
  if (directLink) {
    return directLink;
  }

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");
  return phone ? `https://wa.me/${phone}` : "";
}

function buildTelegramLink() {
  const directLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK?.trim();
  if (directLink) {
    return directLink;
  }

  const username = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME?.trim().replace(/^@/, "");
  return username ? `https://t.me/${username}` : "";
}

export const siteConfig = {
  name: "Михаль Когаловски",
  bookTitle: "Роды с холодной головой",
  description:
    "Практическое руководство для русскоязычных женщин о беременности и родах в Израиле.",
  nav: [
    { label: "О Михаль", href: "/#about" },
    { label: "О книге", href: "/#book" },
    { label: "Что внутри", href: "/book#contents" },
    { label: "Отзывы", href: "/#testimonials" },
    { label: "Вопросы", href: "/#faq" }
  ],
  cta: {
    label: "Заказать книгу",
    href: "/#order"
  },
  contacts: {
    whatsapp: buildWhatsAppLink(),
    telegram: buildTelegramLink(),
    email: "Michal.kogalovski@gmail.com",
    postalAddress: "Snir st., 1, Hadera, Israel"
  },
  assets: {
    logoHorizontal: "/images/brand/logo-horizontal.svg",
    logoFull: "/images/brand/logo-full.svg",
    logoCompact: "/images/brand/logo-compact.svg",
    bookCover: "/images/book/book-cover.png",
    michalHero: "/images/photos/michal-hero.jpg",
    michalAtWork: "/images/photos/michal-at-work.jpg",
    michalPregnancy: "/images/photos/michal-pregnancy.jpeg"
  }
} as const;
