# Michal Kogalovsky MVP Website

This is the MVP website for midwife Michal Kogalovsky and the book “Birth with a Cool Head”, aimed at Russian-speaking women preparing for pregnancy and birth in Israel.

## MVP Goal

The MVP should help a visitor:

- understand who Michal Kogalovsky is and how she helps Russian-speaking women in Israel;
- learn about the book “Birth with a Cool Head”;
- read a detailed book description;
- submit a book order request;
- choose a preferred contact channel: WhatsApp or Telegram.

At the MVP stage, the website does not process payments and does not complete purchases automatically. After a request is submitted, Michal or a manager contacts the visitor manually.

## Architecture

Base flow:

```text
Next.js / Vercel -> Tally -> Google Sheets -> manager notification -> manual sale via WhatsApp or Telegram
```

The MVP does not include a custom order server, SQLite, PostgreSQL, CRM, user account, online payment, or automatic ebook delivery.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Tally for the request form
- Google Sheets for request storage
- Google Apps Script, Make, or Zapier for manager notifications
- Vercel for deployment
- GitHub for source control

## Pages

- `/` — main landing page
- `/book` — detailed book page
- `/privacy` — privacy and personal data processing policy
- `/thank-you` — thank-you page after successful form submission

The `/thank-you` page must be excluded from search indexing.

## Main User Flow

1. The user opens the website.
2. The user reads about Michal and the book.
3. The user opens the book page or goes directly to the request form.
4. The user fills in the Tally form.
5. The user chooses a preferred contact method: WhatsApp or Telegram.
6. The user confirms consent to personal data processing.
7. The user submits the request.
8. The request is stored in a private Google Sheet.
9. The manager receives a new request notification.
10. The user sees a success message or is redirected to the thank-you page.
11. Michal or the manager contacts the user manually.

## Request Form

The form is created and validated in Tally.

Form fields:

- name — required;
- phone number — required;
- email — optional;
- preferred contact method: WhatsApp or Telegram — required;
- Telegram username — conditional field, required only if Telegram is selected;
- consent to personal data processing — required checkbox.

The MVP should not include visible fields such as city, comment, book format, or price. These details are clarified manually after the request is submitted.

## Form Validation

Validation is configured in Tally:

- name: required, recommended length 2–80 characters;
- phone: required, allows digits, spaces, `+`, parentheses, and hyphens;
- email: validated as email if provided;
- contact method: WhatsApp or Telegram is required;
- Telegram username: shown and required only when Telegram is selected;
- data processing consent: required before submission.

No custom server handler or server-side validation in the website code is required for the MVP.

## Google Sheets

Each valid request must be added to a private Google Sheet as a separate row.

Recommended columns:

- submission date and time;
- name;
- phone;
- email;
- preferred contact method;
- Telegram username;
- data processing consent confirmation;
- processing status;
- manager comment.

The Google Sheet URL, private keys, tokens, and real user requests must not be stored in the repository.

## Manager Notification

After a new row appears in Google Sheets, the manager should receive a notification.

Possible options:

- Google Apps Script — simple and low-cost option inside Google Sheets;
- Make — convenient no-code automation;
- Zapier — alternative no-code automation;
- Telegram Bot API — notification to a private manager chat;
- email notification — minimal fallback option.

Recommended MVP option: Google Sheets + Google Apps Script or Make.

Example notification:

```text
New book request
Name: Anna
Phone: +972...
Preferred contact: WhatsApp
Telegram: -
Time: 2026-07-10 12:30
```

## WhatsApp and Telegram

After submitting the request, the user may see buttons on `/thank-you`:

- “Message us on WhatsApp”
- “Open Telegram”

These buttons should not replace the form. The form must save the request first, so the lead is not lost if the user opens a messenger but does not send a message.

Recommended approach:

1. The user submits the form.
2. The request is saved in Google Sheets.
3. The user sees the thank-you page.
4. The thank-you page offers a quick link to the selected messenger.
5. The manager also receives a notification and can follow up manually.

## Environment Variables

Create `.env.local` from `.env.example`.

Initial variables:

```env
NEXT_PUBLIC_TALLY_FORM_ID=
NEXT_PUBLIC_WHATSAPP_LINK=
NEXT_PUBLIC_TELEGRAM_LINK=
```

Only `.env.example` with empty placeholder values should be committed. `.env.local` and production secrets must not be committed.

## Local Development

After creating the Next.js project:

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:3000
```

Check routes:

- `http://localhost:3000/`
- `http://localhost:3000/book`
- `http://localhost:3000/privacy`
- `http://localhost:3000/thank-you`

## Tally Setup

1. Create a Tally form for book requests.
2. Add the fields from the “Request Form” section.
3. Configure required fields.
4. Configure conditional logic for Telegram username.
5. Add the consent checkbox with a link to `/privacy`.
6. Configure a success message or redirect to `/thank-you`.
7. Connect the form to Google Sheets.
8. Submit a test request.
9. Verify that the row appears in the correct Google Sheet.

## Vercel Deployment

1. Connect the GitHub repository to Vercel.
2. Add production environment variables.
3. Run the first deployment.
4. Check `/`, `/book`, `/privacy`, and `/thank-you`.
5. Test the form on the deployed domain.
6. Verify that the request appears in Google Sheets.
7. Verify that the manager receives a notification.

## Domain

The final domain should be selected and registered under `.com` or `.co.il`.

After registration:

- connect the domain to the Vercel project;
- configure DNS records at the domain registrar;
- enable HTTPS;
- choose the canonical address: with `www` or without `www`;
- configure redirect from the non-canonical variant;
- verify all pages and the form on the final domain.

## SEO and Technical Preparation

The MVP should include:

- Russian as the primary site language;
- unique `title` and `description` for `/` and `/book`;
- Open Graph image, 1200×630;
- favicon;
- `sitemap.xml`;
- `robots.txt`;
- noindex for `/thank-you`;
- one `h1` per content page;
- meaningful `alt` text for images;
- contrast, keyboard focus, and mobile button size checks;
- optimized images.

## Materials to Confirm Before Publication

- final book price and currency;
- available book formats;
- payment and delivery/pickup conditions;
- WhatsApp contact;
- Telegram username or link;
- email and social links;
- Michal’s photos with publication permission;
- book cover;
- logo in SVG/PNG and favicon;
- testimonials and permission to publish them;
- website owner details for the privacy policy;
- final legal text for `/privacy`;
- domain.

## Out of MVP Scope

- online payment;
- automatic ebook delivery;
- custom backend for requests;
- SQLite or another custom database;
- CRM;
- user account;
- authentication;
- admin panel;
- blog;
- multilingual version;
- consultation booking;
- calendar integration;
- full WhatsApp bot;
- full Telegram sales bot.

## Definition of Done

The MVP is ready when:

- `/`, `/book`, `/privacy`, and `/thank-you` are implemented;
- the Tally form is embedded on the main page;
- required fields are validated;
- Telegram username is required only when Telegram is selected;
- the form cannot be submitted without data processing consent;
- a valid request appears in Google Sheets;
- the manager receives a new request notification;
- the user sees a clear submission result;
- the website is responsive on desktop and mobile;
- the project is deployed to Vercel;
- the domain is connected;
- README documentation is up to date;
- the repository contains no secrets or real personal data.
