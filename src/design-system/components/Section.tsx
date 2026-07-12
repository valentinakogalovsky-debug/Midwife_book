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
    <section className={`${toneClass} px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24 ${className}`} {...props}>
      <div className="mx-auto w-full max-w-6xl">
        {eyebrow || title || lead ? (
          <div className="mb-8 max-w-3xl md:mb-10">
            {eyebrow ? <p className="mb-3 text-sm font-extrabold uppercase text-burgundySoft">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {lead ? <p className="mt-4 text-base text-muted sm:text-lg">{lead}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
