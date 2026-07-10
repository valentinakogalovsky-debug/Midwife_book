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

export default function ThankYouPage() {
  return (
    <main>
      <Section title={orderContent.thankYou.title} lead={orderContent.thankYou.lead}>
        <Card>
          <p className="text-muted">{orderContent.thankYou.note}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/">{orderContent.thankYou.homeAction}</Button>
            <Button href={siteConfig.contacts.whatsapp} variant="secondary">
              {orderContent.thankYou.whatsappAction}
            </Button>
            <Button href={siteConfig.contacts.telegram} variant="secondary">
              {orderContent.thankYou.telegramAction}
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
