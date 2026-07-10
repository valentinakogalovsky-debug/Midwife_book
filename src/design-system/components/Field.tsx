import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
};

export function Field({ label, helper, id, className = "", ...props }: FieldProps) {
  const fieldId = id ?? props.name;

  return (
    <label className={`grid gap-2 text-sm font-semibold text-ink ${className}`} htmlFor={fieldId}>
      <span>{label}</span>
      <input
        id={fieldId}
        className="min-h-12 rounded-control border border-line bg-surface px-4 text-base text-ink transition placeholder:text-muted/70 focus:border-burgundy"
        {...props}
      />
      {helper ? <span className="text-sm font-normal text-muted">{helper}</span> : null}
    </label>
  );
}
