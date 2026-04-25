// single source of truth for landing copy
export const BRAND = {
  name: 'MIVA',
  sub: 'Systems',
  tagline: 'Код. Запуск. Результат.',
  byline: 'Digital systems by CODER',
}

export const ECOSYSTEM = [
  {
    mark: 'M',
    name: 'MIVA Systems',
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
    name: 'MIVA Studio',
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

export const WHY = [
  { k: '//', title: 'Чистый код', body: 'Минимум шума, максимум читаемости.' },
  { k: '»', title: 'Быстрая разработка', body: 'Итерации короткие, релизы частые.' },
  { k: '☎', title: 'Поддержка 24/7', body: 'На связи, когда нужно.' },
  { k: '◉', title: 'Готовые решения', body: 'Берём то, что работает, и шлифуем.' },
  { k: '₽', title: 'Гибкие цены', body: 'Смотрим на задачу, а не на прайс.' },
] as const
