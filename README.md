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
├── docs/          # Документация и контекст сессий
├── musor/         # Шаблон-источник (будет заменён при миграции)
├── package.json   # корневой (создан npm init -y)
└── README.md
```

На текущем этапе рабочий код и конфиги сборщика находятся в `musor/` — это шаблон, из которого будет мигрирован проект. См. [`docs/TODO.md`](docs/TODO.md) — Приоритет 1 и 2.

## Документация

- [`docs/CONTEXT.md`](docs/CONTEXT.md) — контекст проекта, передаётся ассистенту в начале сессии.
- [`docs/TODO.md`](docs/TODO.md) — задачи по приоритетам и отложенные вопросы.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — зафиксированные архитектурные решения.
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) — история изменений.

## Разработка

На данном этапе dev-сервер и сборка запускаются из шаблона:

```bash
cd musor
npm install
npm run dev       # dev-сервер
npm run build     # production-сборка
npm run preview   # локальный просмотр сборки
```

После миграции проекта из `musor/` в корень эти команды будут доступны на уровне корня репозитория.

## Ветки

- `main` — стабильный код, только через PR.
- `develop` — текущая разработка.
- `feature/*` — отдельные задачи.
- `claude/*` — задачи, выполняемые агентом Claude Code.
