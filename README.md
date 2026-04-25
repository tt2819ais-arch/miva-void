# miva-void

Лендинг для MIVA Systems / CODER — в монохромном стиле Void.
Чёрное/белое, тонкая типографика, плавные анимации.

## Стек

- Vite + React + TypeScript
- framer-motion для анимаций
- Vanilla CSS (без фреймворков) — всё вручную, по модулям на секцию

## Локально

```bash
npm install
npm run dev       # dev server на http://localhost:5173
npm run build     # сборка в dist/
npm run lint      # eslint
npm run preview   # предпросмотр сборки
```

## Структура

```
src/
  App.tsx                   — главный лейаут, собирает секции
  main.tsx                  — вход
  styles/global.css         — переменные, токены, утилиты
  components/
    Nav / Hero / Ecosystem / Products / Services /
    Approach / Why / TwoPaths / Contact / Footer /
    Marquee / Cursor        — секции и UI-элементы
  data/content.ts           — весь текстовый контент в одном файле
  hooks/useReveal.ts        — intersection-observer для reveal-анимаций
```

## Деплой

Для статики подходит любой хостинг, который умеет отдавать `dist/`.
На выборе платформы с NodeJS-runtime — запусти `npm run build` и отдавай
содержимое `dist/` любым статик-сервером (`serve`, `nginx`, `caddy` и т.д.).
