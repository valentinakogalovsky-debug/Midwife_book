type TallyEmbedProps = {
  formId?: string;
};

export function TallyEmbed({ formId = process.env.NEXT_PUBLIC_TALLY_FORM_ID }: TallyEmbedProps) {
  if (!formId) {
    return (
      <div className="rounded-card border border-dashed border-burgundy/35 bg-blushSoft p-6 text-muted">
        Tally form placeholder. Set <code>NEXT_PUBLIC_TALLY_FORM_ID</code> to embed the production form.
      </div>
    );
  }

  return (
    <iframe
      className="min-h-[620px] w-full rounded-card border border-line bg-surface"
      src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      title="Book request form"
    />
  );
}
