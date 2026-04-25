// single source of truth for landing copy

export const BRAND = {
  name: 'MIVA',
  nameSpaced: 'M I V A',
  sub: 'Systems',
  tagline: 'Код. Запуск. Результат.',
  byline: 'Digital systems by CODER',
}

export const ECOSYSTEM = [
  {
    mark: 'M',
    name: 'M I V A Systems',
    role: 'Мастер-бренд',
    body: 'Разработка и создание цифровых систем, комплексные решения, приложения и сервисы под задачи бизнеса.',
    url: '#',
  },
  {
    mark: '⌘',
    name: 'CODER Market',
    role: 'Маркет проектов',
    body: 'Готовые проекты, боты, скрипты и сервисы для заработка и автоматизации.',
    url: '#',
  },
] as const

export const PRODUCTS = [
  {
    tag: 'Канал и медиа',
    name: 'CODER Channel',
    body: 'Анонсы, проекты, обновления, полезная информация, кейсы и новости из мира разработки.',
    handle: '@coder_channel',
    href: 'https://t.me/coder_channel',
  },
  {
    tag: 'Магазин в Telegram',
    name: 'CODER Store Bot',
    body: 'Удобный бот для покупки готовых проектов, автоматическая выдача и поддержка 24/7.',
    handle: '@coder_store_bot',
    href: 'https://t.me/coder_store_bot',
  },
  {
    tag: 'Индивидуальная разработка',
    name: 'M I V A Studio',
    body: 'Кастомная разработка под ваши задачи. Боты, веб-приложения, системы любой сложности.',
    handle: '@miva_studio',
    href: 'https://t.me/miva_studio',
  },
] as const

export const SERVICES = [
  'Telegram-боты любой сложности',
  'Веб-приложения и сервисы',
  'Автоматизация и интеграции',
  'Crypto / Pay решения',
  'Боты в сфере проектов',
  'Поддержка и развитие',
] as const

export const APPROACH = [
  {
    n: '01',
    title: 'Идеи',
    body: 'Анализируем и собираем требования.',
  },
  {
    n: '02',
    title: 'Разработка',
    body: 'Пишем чистый, поддерживаемый код.',
  },
  {
    n: '03',
    title: 'Запуск',
    body: 'Тестируем и запускаем проект.',
  },
  {
    n: '04',
    title: 'Поддержка',
    body: 'Сопровождаем и улучшаем решения.',
  },
] as const

export const STATS = [
  { n: 128, suffix: '+', label: 'проектов в проде' },
  { n: 5, suffix: ' лет', label: 'в разработке' },
  { n: 97, suffix: '%',  label: 'запусков без переделок' },
  { n: 24, suffix: '/7', label: 'поддержка клиентов' },
] as const

export const CASES = [
  {
    tag: 'telegram-бот',
    title: 'CRM-бот для онлайн-школы',
    body: 'Запись, оплата, уведомления и CRM-синхронизация. 12 000+ учеников в потоке.',
    stack: ['TypeScript', 'Postgres', 'Telegraf'],
    meta: '2024 · M I V A Studio',
  },
  {
    tag: 'web-app',
    title: 'Dashboard для крипто-PnL',
    body: 'Многоаккаунтный трекер позиций, аналитика, авто-отчёты. Realtime.',
    stack: ['Next.js', 'WS', 'ClickHouse'],
    meta: '2024 · M I V A Studio',
  },
  {
    tag: 'автоматизация',
    title: 'Пайплайн для агентства',
    body: 'Сбор лидов с рекламных кабинетов → CRM → прогрев. Экономия 40 ч/нед.',
    stack: ['Python', 'n8n', 'Airtable'],
    meta: '2023 · CODER Market',
  },
  {
    tag: 'магазин',
    title: 'CODER Store Bot',
    body: 'Маркет готовых проектов. Автовыдача, эскроу, CI по релизам.',
    stack: ['aiogram 3', 'Redis', 'S3'],
    meta: '2025 · CODER',
  },
] as const

export const FAQ = [
  {
    q: 'Сколько занимает разработка?',
    a: 'Типовой проект — от 7 до 30 дней. Срок зависит от объёма функционала и интеграций. Перед стартом согласовываем дедлайн и фиксируем в договоре.',
  },
  {
    q: 'Как формируется цена?',
    a: 'Смотрим на задачу, сроки и стек. Фикс или time & materials — на выбор. Отдельно — постпроектная поддержка.',
  },
  {
    q: 'Даёте ли гарантию?',
    a: 'Да. На разработку — 30 дней с релиза, бесплатные правки по багам. Поддержка продлевается отдельно.',
  },
  {
    q: 'Работаете ли по NDA?',
    a: 'Работаем. Шаблон NDA есть, правки по вашему — без проблем.',
  },
  {
    q: 'Что с правами на код?',
    a: 'Исходники и права передаются клиенту после оплаты. Никакого vendor-lock.',
  },
  {
    q: 'Можно ли сопровождать существующий проект?',
    a: 'Да. Делаем аудит, заходим в текущий стек и продолжаем разработку / починку.',
  },
] as const

export const PROJECT_TYPES = [
  { id: 'bot',   label: 'Telegram-бот',     days: 7,  base: 80 },
  { id: 'web',   label: 'Веб-приложение',   days: 21, base: 180 },
  { id: 'auto',  label: 'Автоматизация',    days: 10, base: 110 },
  { id: 'crypto',label: 'Crypto / Pay',     days: 14, base: 220 },
  { id: 'combo', label: 'Полный продукт',   days: 30, base: 320 },
] as const

export const COMPLEXITY = [
  { id: 'basic', label: 'Базовая',   k: 1.0 },
  { id: 'mid',   label: 'Средняя',   k: 1.6 },
  { id: 'pro',   label: 'Продвинутая', k: 2.3 },
] as const

export const TESTIMONIALS = [
  {
    text: 'Сделали бота для школы за десять дней. Лидов стало кратно больше, админка — огонь.',
    author: 'Артём К.',
    role: 'EdTech · основатель',
  },
  {
    text: 'Подключили CODER Market как канал сбыта — сняли с нас всю возню с доставкой.',
    author: 'Юля М.',
    role: 'Digital-агентство',
  },
  {
    text: 'Подхватили legacy, починили, задеплоили. Пишу в любое время суток — отвечают.',
    author: 'Дмитрий Н.',
    role: 'Crypto · CTO',
  },
] as const

export const WHY = [
  { k: '//', title: 'Чистый код', body: 'Минимум шума, максимум читаемости.' },
  { k: '»', title: 'Быстрая разработка', body: 'Итерации короткие, релизы частые.' },
  { k: '☎', title: 'Поддержка 24/7', body: 'На связи, когда нужно.' },
  { k: '◉', title: 'Готовые решения', body: 'Берём то, что работает, и шлифуем.' },
  { k: '₽', title: 'Гибкие цены', body: 'Смотрим на задачу, а не на прайс.' },
] as const
