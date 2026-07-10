import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: "default" | "blush";
};

export function Section({
  children,
  eyebrow,
  title,
  lead,
  tone = "default",
  className = "",
  ...props
}: SectionProps) {
  const toneClass = tone === "blush" ? "bg-blushSoft/55" : "bg-background";

  return (
    <section className={`${toneClass} px-5 py-16 md:px-8 md:py-24 ${className}`} {...props}>
      <div className="mx-auto w-full max-w-6xl">
        {eyebrow || title || lead ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? <p className="mb-3 text-sm font-extrabold uppercase text-burgundySoft">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {lead ? <p className="mt-5 text-lg text-muted">{lead}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
