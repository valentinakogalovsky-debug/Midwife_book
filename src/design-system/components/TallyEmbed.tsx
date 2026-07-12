import { orderContent } from "@/content/order";

type TallyEmbedProps = {
  formId?: string;
};

export function TallyEmbed({ formId = process.env.NEXT_PUBLIC_TALLY_FORM_ID }: TallyEmbedProps) {
  if (!formId) {
    return (
      <div className="rounded-card border border-dashed border-burgundy/35 bg-blushSoft p-6 text-muted md:p-8">
        <div className="max-w-3xl">
          <h3>{orderContent.form.unavailableTitle}</h3>
          <p className="mt-4">{orderContent.form.unavailableText}</p>
          <code className="mt-4 inline-block rounded-control bg-surface px-4 py-3 text-sm font-bold text-burgundy">
            NEXT_PUBLIC_TALLY_FORM_ID=
          </code>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-bold text-ink">{orderContent.form.expectedFieldsTitle}</p>
            <ul className="mt-3 grid gap-2">
              {orderContent.form.expectedFields.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">{orderContent.form.setupStepsTitle}</p>
            <ul className="mt-3 grid gap-2">
              {orderContent.form.setupSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className="min-h-[720px] w-full rounded-card border border-line/70 bg-transparent sm:min-h-[640px]"
      src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      title="Book request form"
    />
  );
}
