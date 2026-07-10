import type { Metadata } from "next";
import { Card, Section } from "@/design-system/components";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности и обработки персональных данных сайта Михаль Когаловски."
};

export default function PrivacyPage() {
  return (
    <main>
      <Section
        title="Политика конфиденциальности"
        lead="Финальный юридический текст должен быть проверен с учётом страны владельца сайта, аудитории и используемых сервисов."
      >
        <Card>
          <div className="space-y-4 text-muted">
            <p>На этой странице нужно указать владельца и оператора сайта.</p>
            <p>Нужно описать, какие данные собираются через форму Tally и для каких целей они используются.</p>
            <p>Нужно указать сервисы обработки: Tally и Google Sheets.</p>
            <p>Нужно описать срок хранения данных, доступ ответственных лиц и способ отзыва согласия.</p>
          </div>
        </Card>
      </Section>
    </main>
  );
}
