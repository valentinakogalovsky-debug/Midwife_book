import { Button, Card, Section, TallyEmbed } from "@/design-system/components";
import { homeContent } from "@/content/home";
import { BookCover } from "@/components/visual/BookCover";
import { PhotoFrame } from "@/components/visual/PhotoFrame";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.82fr)]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase text-burgundySoft">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="max-w-[760px] text-[clamp(2.85rem,5vw,4.85rem)] leading-[1.04]">
              {homeContent.hero.title}
            </h1>
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
          <Card tone="blush" className="grid place-items-center p-4 sm:p-5">
            <PhotoFrame
              alt="Михаль Когаловски с новорождённым в роддоме"
              className="aspect-[4/5] w-full max-w-[500px]"
              height={1363}
              objectPosition="center"
              priority
              src={siteConfig.assets.michalHero}
              width={1154}
            />
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
              <span aria-hidden="true" className="ornate-card-mark">
                ✦
              </span>
              <h3>{question}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow={homeContent.about.eyebrow} title={homeContent.about.title}>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)]">
          <div className="space-y-5 text-lg text-muted">
            {homeContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Card className="mt-8">
              <p className="font-heading text-2xl text-burgundy">«{homeContent.about.quote}»</p>
              <p className="mt-5 font-extrabold text-burgundy">{homeContent.about.quoteAuthor}</p>
            </Card>
          </div>
          <div className="grid gap-4">
            <PhotoFrame
              alt="Михаль Когаловски на работе с новорождённым"
              className="min-h-[360px]"
              height={2240}
              objectPosition="center top"
              src={siteConfig.assets.michalAtWork}
              width={1680}
            />
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
          <Card className="grid place-items-center">
            <BookCover className="max-w-[300px]" />
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
              <span aria-hidden="true" className="ornate-card-mark">
                ❦
              </span>
              <p className="font-bold text-ink">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="benefits" title={homeContent.benefits.title} tone="blush">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.benefits.items.map((item) => (
            <Card key={item}>
              <span aria-hidden="true" className="ornate-card-mark">
                ✧
              </span>
              <p className="text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contents" title={homeContent.bookParts.title} lead={homeContent.bookParts.lead}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homeContent.bookParts.items.map((part, index) => (
            <Card key={part.title}>
              <p className="mb-4 font-heading text-3xl text-burgundy">{index + 1}</p>
              <h3 className="text-[clamp(1.45rem,1.7vw,1.7rem)]">{part.title}</h3>
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
              <span aria-hidden="true" className="ornate-card-mark">
                “
              </span>
              <p className="text-muted">«{item.text}»</p>
              <p className="mt-5 font-bold text-burgundy">{item.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="order"
        eyebrow={homeContent.order.eyebrow}
        title={homeContent.order.title}
        lead={homeContent.order.lead}
      >
        <Card tone="blush">
          <TallyEmbed />
          <p className="mt-5 text-sm text-muted">
            {homeContent.order.note} Отправляя заявку, вы соглашаетесь с{" "}
            <a className="font-bold text-burgundy underline-offset-4 hover:underline" href="/privacy">
              Политикой конфиденциальности
            </a>
            .
          </p>
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
