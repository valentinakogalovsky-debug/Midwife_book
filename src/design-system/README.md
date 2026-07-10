# Design System

This folder is the visual source of truth for the project.

## What belongs here

- design tokens;
- primitive UI components;
- shared section/card/button/form patterns;
- reusable visual rules that should not be repeated across pages.

## Current structure

- `tokens.ts` — named colors, radii, and typography decisions for documentation and JS usage.
- `components/Button.tsx` — centralized link button variants.
- `components/Card.tsx` — centralized card surface.
- `components/Field.tsx` — centralized text input styling for future custom forms.
- `components/Section.tsx` — page section spacing and heading pattern.
- `components/TallyEmbed.tsx` — Tally form embed wrapper.
- `components/index.ts` — public export surface.

## Styling rules

Prefer editing design-system components and CSS variables before adding one-off Tailwind classes to pages.

Use page-level Tailwind classes only for content layout, such as grids, spacing between content groups, and responsive column changes.

Do not redefine brand colors directly in page components. Use the Tailwind tokens mapped in `tailwind.config.ts` and the CSS variables in `src/app/globals.css`.

## Brand direction

The MVP follows the “warm clarity” direction:

- warm cream background;
- burgundy primary actions and headings;
- soft blush supporting surfaces;
- rounded cards and form fields;
- calm, readable typography;
- no aggressive sales patterns.
