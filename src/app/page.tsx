import { Button, Card, Section, TallyEmbed } from "@/design-system/components";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <main>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase text-burgundySoft">
              {homeContent.hero.eyebrow}
            </p>
            <h1>{homeContent.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-muted">{homeContent.hero.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {homeContent.hero.facts.map((fact) => (
                <span
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-burgundy"
                  key={fact}
                >
                  {fact}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#order">{homeContent.hero.primaryAction}</Button>
              <Button href="/book" variant="secondary">
                {homeContent.hero.secondaryAction}
              </Button>
            </div>
          </div>
          <Card tone="blush" className="min-h-[380px]">
            <div className="grid h-full place-items-center rounded-card border border-dashed border-burgundy/30 p-8 text-center text-muted">
              <div>
                <p className="font-heading text-2xl text-burgundy">Фото Михаль + обложка</p>
                <p className="mt-3">Слот для финальных визуальных материалов первого экрана.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Section
        id="situation"
        title={homeContent.situation.title}
        lead={homeContent.situation.lead}
        tone="blush"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {homeContent.situation.cards.map((question) => (
            <Card key={question}>
              <h3>{question}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow={homeContent.about.eyebrow} title={homeContent.about.title}>
        <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-lg text-muted">
            {homeContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4">
            <Card>
              <p className="font-heading text-2xl text-burgundy">«{homeContent.about.quote}»</p>
            </Card>
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {homeContent.about.facts.map((fact) => (
                <div className="rounded-control bg-blushSoft px-4 py-3 font-bold text-burgundy" key={fact}>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="book"
        eyebrow={homeContent.bookIntro.eyebrow}
        title={homeContent.bookIntro.title}
        tone="blush"
      >
        <div className="grid gap-6 md:grid-cols-[0.8fr_1fr]">
          <Card className="min-h-[340px]">
            <div className="grid h-full place-items-center rounded-card border border-dashed border-burgundy/30 p-8 text-center text-muted">
              <div>
                <p className="font-heading text-2xl text-burgundy">Обложка книги</p>
                <p className="mt-3">Здесь появится финальный дизайн электронной книги.</p>
              </div>
            </div>
          </Card>
          <div className="space-y-6 text-lg text-muted">
            {homeContent.bookIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-bold text-burgundy">{homeContent.bookIntro.accent}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/book">Подробнее о книге</Button>
              <Button href="#order" variant="secondary">
                Заказать электронную книгу
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="audience" title={homeContent.audience.title}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.audience.items.map((item) => (
            <Card key={item}>
              <p className="font-bold text-ink">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="benefits" title={homeContent.benefits.title} tone="blush">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.benefits.items.map((item) => (
            <Card key={item}>
              <p className="text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contents" title={homeContent.bookParts.title} lead={homeContent.bookParts.lead}>
        <div className="grid gap-4 md:grid-cols-5">
          {homeContent.bookParts.items.map((part, index) => (
            <Card key={part.title}>
              <p className="mb-4 font-heading text-3xl text-burgundy">{index + 1}</p>
              <h3>{part.title}</h3>
              <p className="mt-4 text-sm text-muted">{part.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/book" variant="secondary">
            Посмотреть подробное содержание
          </Button>
        </div>
      </Section>

      <Section id="testimonials" title={homeContent.testimonials.title} tone="blush">
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.testimonials.items.map((item) => (
            <Card key={item.name}>
              <p className="text-muted">«{item.text}»</p>
              <p className="mt-5 font-bold text-burgundy">{item.name}</p>
            </Card>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">{homeContent.testimonials.notice}</p>
      </Section>

      <Section
        id="order"
        eyebrow={homeContent.order.eyebrow}
        title={homeContent.order.title}
        lead={homeContent.order.lead}
      >
        <Card>
          <TallyEmbed />
          <p className="mt-5 text-sm text-muted">{homeContent.order.note}</p>
        </Card>
      </Section>

      <Section id="faq" title={homeContent.faq.title} tone="blush">
        <div className="grid gap-4">
          {homeContent.faq.items.map((item) => (
            <Card key={item.question}>
              <h3>{item.question}</h3>
              <p className="mt-3 text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
