import type { Metadata } from "next";
import { Button, Card, Section } from "@/design-system/components";

export const metadata: Metadata = {
  title: "«Роды с холодной головой» — книга о родах в Израиле",
  description:
    "27 глав о ведении беременности, роддоме, схватках, обезболивании, первых днях с малышом и особенностях израильской системы."
};

const contents = [
  "Беременность в Израиле: ведение беременности, анализы, обследования, устройство роддома и права женщины.",
  "Когда начинаются роды: признаки начала родов, схватки, боль и раскрытие шейки матки.",
  "В родовом зале: эпидуральная анестезия, потуги, атмосфера, страхи, плацента и первый час.",
  "Первые дни с малышом: первое прикладывание, госпитализация, выписка и общение с персоналом.",
  "Дома с новорождённым: первые недели, купание, грудное вскармливание, питание и колики."
];

export default function BookPage() {
  return (
    <main>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase text-burgundySoft">
              Практическое руководство для русскоязычных женщин в Израиле
            </p>
            <h1>Роды с холодной головой</h1>
            <p className="mt-6 max-w-2xl text-xl text-muted">
              27 глав о беременности, родах и первых неделях с малышом — с объяснением того,
              как устроена израильская система.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#order">Заказать книгу</Button>
              <Button href="#contents" variant="secondary">
                Смотреть содержание
              </Button>
            </div>
          </div>
          <Card tone="blush" className="min-h-[360px]">
            <div className="grid h-full place-items-center rounded-card border border-dashed border-burgundy/30 p-8 text-center text-muted">
              Здесь будет обложка книги.
            </div>
          </Card>
        </div>
      </section>

      <Section
        title="Когда система непривычна, знания становятся опорой"
        lead="Михаль написала эту книгу, чтобы женщина могла заранее разобраться в основных этапах, понимать, что происходит, и чувствовать себя участницей процесса."
        tone="blush"
      >
        <Card>
          <p className="font-heading text-2xl text-burgundy">
            «Эта книга — ваш проводник: от первого визита к гинекологу до первых недель дома с малышом».
          </p>
        </Card>
      </Section>

      <Section id="contents" title="Подробное содержание">
        <div className="grid gap-4">
          {contents.map((item, index) => (
            <Card key={item}>
              <p className="mb-3 font-heading text-2xl text-burgundy">Часть {index + 1}</p>
              <p className="text-muted">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Подготовьтесь к родам с ясной головой"
        lead="Оставьте заявку — мы расскажем, в каком формате доступна книга и как её получить."
        tone="blush"
      >
        <Button href="/#order">Заказать книгу</Button>
      </Section>
    </main>
  );
}
