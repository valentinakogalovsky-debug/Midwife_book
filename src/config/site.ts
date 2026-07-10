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
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? ""
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
