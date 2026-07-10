import type { Metadata } from "next";
import { Button, Card, Section } from "@/design-system/components";
import { bookContent } from "@/content/book";
import { BookCover } from "@/components/visual/BookCover";
import { PhotoFrame } from "@/components/visual/PhotoFrame";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: bookContent.metadata.title,
  description: bookContent.metadata.description
};

export default function BookPage() {
  return (
    <main>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase text-burgundySoft">
              {bookContent.hero.eyebrow}
            </p>
            <h1>{bookContent.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-muted">{bookContent.hero.lead}</p>
            <p className="mt-5 font-bold text-burgundy">{bookContent.hero.author}</p>
            <p className="mt-5 max-w-2xl font-heading text-2xl text-burgundy">«{bookContent.hero.quote}»</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#order">{bookContent.hero.primaryAction}</Button>
              <Button href="#contents" variant="secondary">
                {bookContent.hero.secondaryAction}
              </Button>
            </div>
          </div>
          <Card tone="blush" className="grid place-items-center">
            <BookCover className="max-w-[340px]" priority />
          </Card>
        </div>
      </section>

      <Section title={bookContent.purpose.title} lead={bookContent.purpose.lead} tone="blush">
        <Card>
          <p className="font-heading text-2xl text-burgundy">«{bookContent.purpose.quote}»</p>
        </Card>
      </Section>

      <Section id="contents" title={bookContent.contents.title} lead={bookContent.contents.lead}>
        <div className="grid gap-4">
          {bookContent.contents.parts.map((part) => (
            <Card key={part.number}>
              <div className="grid gap-5 md:grid-cols-[88px_1fr]">
                <p className="font-heading text-4xl text-burgundy">{part.number}</p>
                <div>
                  <h3>{part.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {part.topics.map((topic) => (
                      <span
                        className="rounded-full bg-blushSoft px-4 py-2 text-sm font-bold text-burgundy"
                        key={topic}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={bookContent.usage.title} tone="blush">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_340px] lg:grid-cols-[minmax(0,1.2fr)_380px]">
          <div className="space-y-5 text-lg text-muted">
            {bookContent.usage.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <strong className="font-extrabold text-ink">{bookContent.usage.emphasis}</strong>{" "}
              {bookContent.usage.paragraphs[2]}
            </p>
            <Card className="mt-8">
              <p className="font-heading text-2xl text-burgundy">«{bookContent.usage.quote}»</p>
            </Card>
          </div>
          <div className="grid gap-4 justify-self-center md:justify-self-end">
            <PhotoFrame
              alt="Михаль во время беременности"
              className="aspect-[4/5] w-full max-w-[380px]"
              height={2048}
              imageClassName="scale-[1.22]"
              objectPosition="60% center"
              src={siteConfig.assets.michalPregnancy}
              width={1356}
            />
          </div>
        </div>
      </Section>

      <Section title={bookContent.outcome.title}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookContent.outcome.items.map((item) => (
            <Card key={item}>
              <p className="text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={bookContent.finalCta.title} lead={bookContent.finalCta.lead} tone="blush">
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/#order">{bookContent.finalCta.action}</Button>
          <p className="text-sm text-muted">{bookContent.finalCta.note}</p>
        </div>
      </Section>
    </main>
  );
}
