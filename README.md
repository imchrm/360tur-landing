# 360tur-landing

Лендинг компании, предоставляющей услугу создания виртуальных 3D туров с помощью 360°-камер, формирующих равнопромежуточные (equirectangular) изображения.

- Домен: `360tur.uz`
- Портфолио: https://360tur.uz

## Технический стек

- React 18
- Vite
- Tailwind CSS (через PostCSS)
- React Router (`BrowserRouter`)

## Архитектура (кратко)

Статический SPA-лендинг, мультиязычный (`ru / uz / en`).

- **i18n:** собственная реализация на React Context + плоских словарях `src/locales/{ru,uz,en}.js` (без `i18next` и подобных библиотек).
- **Состояние:** `useState` + React Context API (без Redux / Zustand).
- **Ассеты:** импортируемые — в `src/assets/`, статические (favicon, robots.txt) — в `public/`.
- **Хостинг:** статический; при выборе платформы учесть SPA-fallback для `BrowserRouter`.

Подробнее — [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Структура репозитория

```
360tur-landing/
├── design/        # HTML-исходники дизайна (Stitch-экспорт)
├── docs/          # Документация и контекст сессий
├── public/        # Статические ассеты (картинки, Marzipano-туры)
├── src/           # Исходный код приложения (React + Vite)
├── index.html     # Vite entry HTML
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

Подробная структура — в [`docs/CONTEXT.md`](docs/CONTEXT.md).

## Документация

- [`docs/CONTEXT.md`](docs/CONTEXT.md) — контекст проекта, передаётся ассистенту в начале сессии.
- [`docs/TODO.md`](docs/TODO.md) — задачи по приоритетам и отложенные вопросы.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — зафиксированные архитектурные решения.
- [`docs/DESIGN_BRIEF.md`](docs/DESIGN_BRIEF.md) — бриф для дизайн-агента (аудитория, бренд, структура секций, интерактив, SEO).
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) — история изменений.

## Разработка

Из корня репозитория:

```bash
npm install
npm run dev       # dev-сервер (Vite, http://localhost:5173)
npm run build     # production-сборка → dist/
npm run preview   # локальный просмотр production-сборки
```

Dev и preview-серверы по умолчанию слушают `0.0.0.0` (доступ из локальной сети).

## Ветки

- `main` — стабильный код, только через PR.
- `develop` — текущая разработка.
- `feature/*` — отдельные задачи.
- `claude/*` — задачи, выполняемые агентом Claude Code.
