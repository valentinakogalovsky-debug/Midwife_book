# Настройка Tally, Google Sheets и уведомления менеджеру

Этот документ описывает рабочую MVP-схему заявки:

```text
Сайт Next.js -> форма Tally -> Google Sheets -> уведомление менеджеру -> ручная продажа в WhatsApp или Telegram
```

## 1. Форма в Tally

Создайте новую форму в Tally с названием:

```text
Заявка на электронную книгу «Роды с холодной головой»
```

Рекомендуемая структура формы:

| Поле | Тип в Tally | Обязательность | Примечание |
| --- | --- | --- | --- |
| Имя | Short answer | Да | 2-80 символов |
| Телефон | Phone number или Short answer | Да | Лучше разрешить международный формат `+972...` |
| Email | Email | Нет | Нужно для резервной связи |
| Предпочтительный способ связи | Multiple choice | Да | Варианты: `WhatsApp`, `Telegram` |
| Telegram username | Short answer | Условно | Показывать и делать обязательным, если выбран `Telegram` |
| Согласие на обработку персональных данных | Checkbox | Да | Текст должен ссылаться на `/privacy` |

Рекомендуемый текст согласия:

```text
Я согласна на обработку персональных данных и понимаю, что со мной свяжутся по поводу заказа электронной книги.
```

В тексте согласия добавьте ссылку на страницу политики:

```text
/privacy
```

## 2. Redirect после отправки

В настройках Tally после успешной отправки включите redirect:

```text
https://YOUR_DOMAIN/thank-you
```

Для локальной проверки можно временно использовать:

```text
http://localhost:3000/thank-you
```

Если локальный сервер запущен на другом порту, например `3001`, используйте этот порт.

## 3. Получение ID формы

После публикации формы Tally возьмите ID из ссылки.

Пример:

```text
https://tally.so/r/abc123
```

В этом примере ID формы:

```text
abc123
```

Добавьте его в `.env.local`:

```env
NEXT_PUBLIC_TALLY_FORM_ID=abc123
```

Затем перезапустите локальный сервер:

```bash
npm run dev
```

## 4. Google Sheets

Подключите интеграцию Tally -> Google Sheets.

Рекомендуемые колонки таблицы:

| Колонка | Назначение |
| --- | --- |
| Submitted at | Дата и время заявки |
| Имя | Имя пользователя |
| Телефон | Телефон |
| Email | Email |
| Предпочтительный способ связи | WhatsApp или Telegram |
| Telegram username | Username, если выбран Telegram |
| Согласие | Подтверждение согласия |
| Статус обработки | `new`, `contacted`, `paid`, `closed` |
| Комментарий менеджера | Внутренние заметки |

Таблица должна быть закрытой. Не публикуйте ссылку на таблицу и не храните её в репозитории.

## 5. Уведомление менеджеру

Минимальный вариант для MVP: Google Apps Script внутри Google Sheets.

1. Откройте Google Sheets.
2. Перейдите в `Extensions -> Apps Script`.
3. Вставьте код из файла:

```text
docs/scripts/google-sheets-notify-manager.gs
```

4. Укажите реальные значения:

```js
const MANAGER_EMAIL = "manager@example.com";
```

5. Сохраните проект Apps Script.
6. В выпадающем списке функций выберите `sendTestNotification` и нажмите `Run`, чтобы выдать скрипту разрешение на отправку email и проверить тестовое письмо.
7. Создайте триггер:

```text
Triggers -> Add Trigger
Choose which function to run: notifyNewRows
Choose which deployment should run: Head
Select event source: Time-driven
Select type of time based trigger: Minutes timer
Select minute interval: Every minute или Every 5 minutes
```

После этого скрипт будет регулярно проверять новые строки, которые Tally добавляет в Google Sheets, и отправлять менеджеру email по каждой новой заявке.

## 6. Проверка

Проверьте весь путь:

1. Открыть сайт.
2. Заполнить форму.
3. Отправить заявку.
4. Убедиться, что открылась `/thank-you`.
5. Проверить новую строку в Google Sheets.
6. Проверить уведомление менеджеру.
7. Проверить кнопки WhatsApp и Telegram на странице благодарности.

## 7. Что добавить в Vercel

В production-переменные окружения Vercel нужно добавить:

```env
NEXT_PUBLIC_TALLY_FORM_ID=
NEXT_PUBLIC_WHATSAPP_LINK=
NEXT_PUBLIC_TELEGRAM_LINK=
```

После изменения переменных окружения нужно сделать redeploy проекта.
