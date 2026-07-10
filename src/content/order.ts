export const orderContent = {
  form: {
    unavailableTitle: "Форма Tally ещё не подключена",
    unavailableText:
      "Сайт уже готов принять встроенную форму. После создания формы в Tally нужно добавить её ID в переменную окружения NEXT_PUBLIC_TALLY_FORM_ID.",
    expectedFieldsTitle: "Поля будущей формы",
    expectedFields: [
      "Имя — обязательно",
      "Телефон — обязательно",
      "Email — необязательно",
      "Способ связи — WhatsApp или Telegram",
      "Telegram username — обязательно только при выборе Telegram",
      "Согласие на обработку персональных данных — обязательно"
    ],
    setupStepsTitle: "Что подключить в Tally",
    setupSteps: [
      "Redirect после успешной отправки на /thank-you",
      "Интеграцию с закрытой Google-таблицей",
      "Тестовую отправку с проверкой строки в Google Sheets",
      "Уведомление менеджеру через Google Apps Script, Make или Zapier"
    ]
  },
  thankYou: {
    title: "Спасибо! Заявка отправлена",
    lead: "Мы получили ваши контакты. Михаль или её представитель свяжется с вами выбранным способом, расскажет о стоимости, оплате и получении электронной книги.",
    note: "Пожалуйста, проверьте, что в Telegram разрешены сообщения, либо что указанный номер доступен в WhatsApp.",
    homeAction: "Вернуться на главную",
    whatsappAction: "Написать в WhatsApp",
    telegramAction: "Открыть Telegram"
  }
} as const;
