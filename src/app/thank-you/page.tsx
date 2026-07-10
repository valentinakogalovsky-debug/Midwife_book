import type { Metadata } from "next";
import { Button, Card, Section } from "@/design-system/components";
import { siteConfig } from "@/config/site";

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
      <Section title="Спасибо! Заявка отправлена" lead="Мы получили ваши контакты. Михаль или её представитель свяжется с вами выбранным способом и расскажет о книге, оплате и получении.">
        <Card>
          <p className="text-muted">
            Пожалуйста, проверьте, что в Telegram разрешены сообщения, либо что указанный номер доступен в WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/">Вернуться на главную</Button>
            <Button href={siteConfig.contacts.whatsapp} variant="secondary">
              Написать в WhatsApp
            </Button>
            <Button href={siteConfig.contacts.telegram} variant="secondary">
              Открыть Telegram
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
