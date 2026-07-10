const MANAGER_EMAIL = "manager@example.com";
const EMAIL_SUBJECT = "Новая заявка на книгу";
const SHEET_NAME = "";
const TIME_ZONE = "Asia/Jerusalem";
const LAST_NOTIFIED_ROW_KEY = "LAST_NOTIFIED_ROW";

function notifyNewRows() {
  const sheet = getTargetSheet();
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  if (lastRow < 2 || lastColumn < 1) {
    return;
  }

  const properties = PropertiesService.getScriptProperties();
  const lastNotifiedRow = Number(properties.getProperty(LAST_NOTIFIED_ROW_KEY) || 1);
  const startRow = Math.max(2, lastNotifiedRow + 1);

  if (startRow > lastRow) {
    return;
  }

  const headers = sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0];
  const headerMap = buildHeaderMap(headers);
  const rows = sheet.getRange(startRow, 1, lastRow - startRow + 1, lastColumn).getDisplayValues();

  rows.forEach((row, index) => {
    const absoluteRow = startRow + index;

    if (!row.join("").trim()) {
      properties.setProperty(LAST_NOTIFIED_ROW_KEY, String(absoluteRow));
      return;
    }

    MailApp.sendEmail({
      to: MANAGER_EMAIL,
      subject: EMAIL_SUBJECT,
      body: buildMessage(row, headerMap)
    });

    properties.setProperty(LAST_NOTIFIED_ROW_KEY, String(absoluteRow));
  });
}

function sendTestNotification() {
  MailApp.sendEmail({
    to: MANAGER_EMAIL,
    subject: "Тест уведомления о заявке",
    body: "Если вы получили это письмо, Google Apps Script может отправлять уведомления менеджеру."
  });
}

function resetNotificationCursor() {
  PropertiesService.getScriptProperties().deleteProperty(LAST_NOTIFIED_ROW_KEY);
}

function getTargetSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (SHEET_NAME) {
    return spreadsheet.getSheetByName(SHEET_NAME);
  }

  return spreadsheet.getSheets()[0];
}

function buildMessage(row, headerMap) {
  const submittedAt = getByAliases(row, headerMap, [
    "Submitted at",
    "Submitted At",
    "Дата",
    "Дата и время",
    "Время"
  ]);

  return [
    "Новая заявка на электронную книгу «Роды с холодной головой»",
    "",
    `Имя: ${getByAliases(row, headerMap, ["Как вас зовут?", "Имя", "Name"])}`,
    `Телефон: ${getByAliases(row, headerMap, ["Номер телефона", "Телефон", "Phone"])}`,
    `Email: ${getByAliases(row, headerMap, ["E-mail", "Email"])}`,
    `Способ связи: ${getByAliases(row, headerMap, ["Предпочтительный способ связи", "Preferred contact method"])}`,
    `Telegram: ${getByAliases(row, headerMap, ["Ваш Telegram", "Telegram username", "Telegram"])}`,
    `Согласие: ${getByAliases(row, headerMap, ["Согласие на обработку персональных данных", "Согласие", "Consent"])}`,
    "",
    `Время заявки: ${submittedAt || new Date().toLocaleString("ru-RU", { timeZone: TIME_ZONE })}`
  ].join("\n");
}

function buildHeaderMap(headers) {
  return headers.reduce((accumulator, header, index) => {
    accumulator[normalize(header)] = index;
    return accumulator;
  }, {});
}

function getByAliases(row, headerMap, aliases) {
  for (const alias of aliases) {
    const index = headerMap[normalize(alias)];

    if (index === undefined) {
      continue;
    }

    const value = row[index];

    if (value) {
      return value;
    }
  }

  return "-";
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}
