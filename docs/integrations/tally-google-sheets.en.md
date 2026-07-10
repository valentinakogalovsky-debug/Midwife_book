# Tally, Google Sheets, and Manager Notification Setup

This document describes the MVP request flow:

```text
Next.js website -> Tally form -> Google Sheets -> manager notification -> manual sale via WhatsApp or Telegram
```

## 1. Tally Form

Create a new Tally form named:

```text
Request for the electronic book “Birth with a Cool Head”
```

Recommended form structure:

| Field | Tally type | Required | Notes |
| --- | --- | --- | --- |
| Name | Short answer | Yes | 2-80 characters |
| Phone | Phone number or Short answer | Yes | Prefer international format such as `+972...` |
| Email | Email | No | Backup contact channel |
| Preferred contact method | Multiple choice | Yes | Options: `WhatsApp`, `Telegram` |
| Telegram username | Short answer | Conditional | Show and require only when `Telegram` is selected |
| Personal data consent | Checkbox | Yes | The label should link to `/privacy` |

Recommended consent copy:

```text
I consent to personal data processing and understand that I will be contacted about the electronic book order.
```

Add a privacy policy link to the consent label:

```text
/privacy
```

## 2. Redirect After Submission

In Tally settings, enable redirect after successful submission:

```text
https://YOUR_DOMAIN/thank-you
```

For local testing, you can temporarily use:

```text
http://localhost:3000/thank-you
```

If the local server uses a different port, for example `3001`, use that port instead.

## 3. Form ID

After publishing the Tally form, take the form ID from the URL.

Example:

```text
https://tally.so/r/abc123
```

In this example, the form ID is:

```text
abc123
```

Add it to `.env.local`:

```env
NEXT_PUBLIC_TALLY_FORM_ID=abc123
```

Then restart the local development server:

```bash
npm run dev
```

## 4. Google Sheets

Connect the Tally -> Google Sheets integration.

Recommended sheet columns:

| Column | Purpose |
| --- | --- |
| Submitted at | Request date and time |
| Name | User name |
| Phone | Phone number |
| Email | Email |
| Preferred contact method | WhatsApp or Telegram |
| Telegram username | Username if Telegram is selected |
| Consent | Personal data consent confirmation |
| Processing status | `new`, `contacted`, `paid`, `closed` |
| Manager comment | Internal notes |

The sheet must be private. Do not publish the sheet link and do not store it in the repository.

## 5. Manager Notification

Minimal MVP option: Google Apps Script inside Google Sheets.

1. Open the Google Sheet.
2. Go to `Extensions -> Apps Script`.
3. Paste the code from:

```text
docs/scripts/google-sheets-notify-manager.gs
```

4. Set the real value:

```js
const MANAGER_EMAIL = "manager@example.com";
```

5. Save the Apps Script project.
6. Select `sendTestNotification` in the function dropdown and click `Run` to authorize email sending and verify a test email.
7. Create a trigger:

```text
Triggers -> Add Trigger
Choose which function to run: notifyNewRows
Choose which deployment should run: Head
Select event source: Time-driven
Select type of time based trigger: Minutes timer
Select minute interval: Every minute or Every 5 minutes
```

The script will regularly check new rows added by Tally to Google Sheets and email the manager for each new request.

## 6. Test Checklist

Check the full flow:

1. Open the website.
2. Fill out the form.
3. Submit the request.
4. Confirm that `/thank-you` opens.
5. Check the new row in Google Sheets.
6. Check the manager notification.
7. Check WhatsApp and Telegram buttons on the thank-you page.

## 7. Vercel Environment Variables

Add these production environment variables in Vercel:

```env
NEXT_PUBLIC_TALLY_FORM_ID=
NEXT_PUBLIC_WHATSAPP_LINK=
NEXT_PUBLIC_TELEGRAM_LINK=
```

After changing environment variables, redeploy the project.
