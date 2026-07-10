import { Button, Card, Section, TallyEmbed } from "@/design-system/components";
import { siteConfig } from "@/config/site";

const questionCards = [
  "Как понять, что пора ехать в роддом?",
  "Что будет происходить в родовом зале?",
  "Какие решения можно принимать самой?",
  "Как подготовиться к первым дням с ребёнком?"
];

const bookParts = [
  "Беременность в Израиле",
  "Когда начинаются роды",
  "В родовом зале",
  "Первые дни с малышом",
  "Дома с новорождённым"
];

const faqItems = [
  ["В каком формате доступна книга?", "Формат и условия получения нужно подтвердить перед публикацией."],
  ["Сколько стоит книга?", "Цена и валюта будут добавлены после финального согласования."],
  ["Заявка означает оплату?", "Нет. После заявки менеджер уточнит стоимость, формат, оплату и получение."]
];

export default function HomePage() {
  return (
    <main>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase text-burgundySoft">
              Практикующая акушерка в Израиле · более 12 лет опыта
            </p>
            <h1>Роды в Израиле — с пониманием, а не со страхом</h1>
            <p className="mt-6 max-w-2xl text-xl text-muted">
              Михаль Когаловски помогает русскоязычным женщинам разобраться, как устроены
              беременность и роды в Израиле. В книге «{siteConfig.bookTitle}» — 27 глав:
              от первого визита к гинекологу до первых недель дома с малышом.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#order">Заказать книгу</Button>
              <Button href="/book" variant="secondary">
                Узнать, что внутри
              </Button>
            </div>
          </div>
          <Card tone="blush" className="min-h-[360px]">
            <div className="grid h-full place-items-center rounded-card border border-dashed border-burgundy/30 p-8 text-center text-muted">
              Здесь будет фотография Михаль и обложка книги.
            </div>
          </Card>
        </div>
      </section>

      <Section
        id="situation"
        title="Когда всё вокруг непривычно, особенно важна ясность"
        lead="Израильская система ведения беременности и родов может отличаться от той, к которой вы привыкли: другие протоколы, термины, правила роддомов и варианты пребывания с малышом."
        tone="blush"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {questionCards.map((question) => (
            <Card key={question}>
              <h3>{question}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        eyebrow="О Михаль"
        title="Михаль Когаловски — акушерка, которая знает израильский роддом изнутри"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-lg text-muted">
            <p>
              Михаль Когаловски — профессиональная акушерка с более чем 12-летним опытом работы
              в Израиле. За годы практики она приняла тысячи родов и сопровождала семьи на пути
              от беременности к первым неделям с малышом.
            </p>
            <p>
              Особое место в её работе занимают русскоязычные женщины. Михаль объясняет сложные
              процессы простым и спокойным языком, без запугивания и давления.
            </p>
          </div>
          <Card>
            <p className="font-heading text-2xl text-burgundy">
              «Моя задача — дать женщине инструменты, чтобы действовать осознанно и уверенно».
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="book"
        eyebrow="О книге"
        title="«Роды с холодной головой» — книга-проводник по беременности и родам в Израиле"
        tone="blush"
      >
        <div className="grid gap-6 md:grid-cols-[0.8fr_1fr]">
          <Card className="min-h-[320px]">
            <div className="grid h-full place-items-center rounded-card border border-dashed border-burgundy/30 p-8 text-center text-muted">
              Здесь будет обложка книги.
            </div>
          </Card>
          <div className="space-y-6 text-lg text-muted">
            <p>
              Книга написана для женщины, которая хочет заранее понять, что её ждёт: как устроено
              ведение беременности, когда ехать в роддом, что происходит во время схваток и потуг,
              какие вопросы задавать медицинскому персоналу и к чему готовиться после рождения малыша.
            </p>
            <p className="font-bold text-burgundy">27 глав · 5 смысловых частей · от беременности до первых недель дома</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/book">Подробнее о книге</Button>
              <Button href="#order" variant="secondary">
                Заказать книгу
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contents" title="От беременности до первых недель дома">
        <div className="grid gap-4 md:grid-cols-5">
          {bookParts.map((part, index) => (
            <Card key={part}>
              <p className="mb-4 font-heading text-3xl text-burgundy">{index + 1}</p>
              <h3>{part}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="order"
        eyebrow="Заявка"
        title="Заказать книгу «Роды с холодной головой»"
        lead="Оставьте контакты. Мы свяжемся с вами выбранным способом, расскажем о доступном формате книги, стоимости, оплате и получении."
        tone="blush"
      >
        <Card>
          <TallyEmbed />
          <p className="mt-5 text-sm text-muted">Отправляя форму, вы не оплачиваете заказ на сайте.</p>
        </Card>
      </Section>

      <Section id="faq" title="Частые вопросы">
        <div className="grid gap-4">
          {faqItems.map(([question, answer]) => (
            <Card key={question}>
              <h3>{question}</h3>
              <p className="mt-3 text-muted">{answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
