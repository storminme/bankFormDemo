# Bank Form Demo

Этот проект представляет собой демо-форму для банка, созданную с использованием React, TypeScript и Vite.

## Установка

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/storminme/bankFormDemo.git

2. Перейдите в директорию проекта:

   ```sh
   cd bankFormDemo

3. Установите зависимости:

   ```sh
   npm install

## Запуск проекта

1. Запустите сервер разработки:

   ```sh
   npm run dev

2. После запуска сервера в терминале будет указан адрес, по которому можно открыть приложение. Обычно это:
   ```http
   http://localhost:3000
   ```
Если порт 3000 занят, сервер автоматически выберет другой порт (например, 3001, 3002 и т.д.). Точный адрес будет показан в терминале после запуска команды npm run dev.

### Пример вывода в терминале:

После запуска `npm run dev` вы увидите что-то вроде:

```sh
   Vite dev server running at:

   > Local: http://localhost:3000
   > Network: http://192.168.1.10:3000

   ready in 500ms.
```

## Линтинг

1. Для проверки кода с помощью ESLint выполните следующую команду:

   ```sh
   npm run lint
   ```

2. Для форматирования кода с помощью Prettier выполните:

   ```sh
   npm run format
   ```

## Структура проекта

- `src/` — исходный код проекта
   - `components/` — компоненты React
   - `context/` — контексты React
   - `forms/` — формы
   - `types/` — типы TypeScript
   - `main.tsx` — точка входа приложения

## Используемые технологии

- [React](https://reactjs.org/) — библиотека для создания пользовательских интерфейсов
- [TypeScript](https://www.typescriptlang.org/) — язык программирования для добавления типов в JavaScript
- [Vite](https://vitejs.dev/) — инструмент для быстрой разработки
- [React Router](https://reactrouter.com/) — маршрутизация в React-приложениях
- [React Query](https://tanstack.com/query/v4) — для запросов и их кеширования
- [React Hook Form](https://react-hook-form.com/) — для валидации форм
- [Bootstrap](https://getbootstrap.com/) — для стилизации
