export const siteConfig = {
  name: "Михаль Когаловски",
  bookTitle: "Роды с холодной головой",
  description:
    "Практическое руководство для русскоязычных женщин о беременности и родах в Израиле.",
  nav: [
    { label: "О Михаль", href: "/#about" },
    { label: "О книге", href: "/#book" },
    { label: "Что внутри", href: "/book#contents" },
    { label: "Вопросы", href: "/#faq" }
  ],
  cta: {
    label: "Заказать книгу",
    href: "/#order"
  },
  contacts: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "#",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "#"
  }
} as const;
