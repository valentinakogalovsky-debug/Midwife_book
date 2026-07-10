const MANAGER_EMAIL = "manager@example.com";
const EMAIL_SUBJECT = "Новая заявка на книгу";

function onFormSubmit(event) {
  const values = event.namedValues || {};

  const message = [
    "Новая заявка на электронную книгу «Роды с холодной головой»",
    "",
    `Имя: ${getValue(values, "Имя", "Name")}`,
    `Телефон: ${getValue(values, "Телефон", "Phone")}`,
    `Email: ${getValue(values, "Email")}`,
    `Способ связи: ${getValue(values, "Предпочтительный способ связи", "Preferred contact method")}`,
    `Telegram: ${getValue(values, "Telegram username")}`,
    `Согласие: ${getValue(values, "Согласие", "Personal data consent")}`,
    "",
    `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Jerusalem" })}`
  ].join("\n");

  MailApp.sendEmail(MANAGER_EMAIL, EMAIL_SUBJECT, message);
}

function getValue(values, ...keys) {
  for (const key of keys) {
    const value = values[key];

    if (Array.isArray(value) && value.length > 0 && value[0]) {
      return value[0];
    }

    if (typeof value === "string" && value) {
      return value;
    }
  }

  return "-";
}
