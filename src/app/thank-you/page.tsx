import type { Metadata } from "next";
import { Button, Card, Section } from "@/design-system/components";
import { siteConfig } from "@/config/site";
import { orderContent } from "@/content/order";

export const metadata: Metadata = {
  title: "Спасибо! Заявка отправлена",
  description: "Подтверждение отправки заявки на книгу.",
  robots: {
    index: false,
    follow: false
  }
};

function ContactAction({ href, label }: { href: string; label: string }) {
  if (!href) {
    return (
      <span className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-control border border-line bg-blushSoft px-6 py-3 text-center text-base font-bold text-muted">
        {label}
      </span>
    );
  }

  return (
    <Button href={href} variant="secondary">
      {label}
    </Button>
  );
}

export default function ThankYouPage() {
  return (
    <main>
      <Section title={orderContent.thankYou.title} lead={orderContent.thankYou.lead}>
        <Card>
          <p className="text-muted">{orderContent.thankYou.note}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/">{orderContent.thankYou.homeAction}</Button>
            <ContactAction href={siteConfig.contacts.whatsapp} label={orderContent.thankYou.whatsappAction} />
            <ContactAction href={siteConfig.contacts.telegram} label={orderContent.thankYou.telegramAction} />
          </div>
        </Card>
      </Section>
    </main>
  );
}
