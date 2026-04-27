# CONTEXT — 360tur-landing

Инструкция по использованию:
- В начале сессии — передай этот файл ассистенту целиком
- В конце сессии — перезапиши разделы, помеченные [ОБНОВЛЯТЬ]
- Детали выполненных задач переноси в CHANGELOG.md, не сюда
- Разделы без пометки — стабильные, меняются редко
- **Правило синхронизации с `TODO.md`:** при любом изменении чекбоксов `[ ]` ↔ `[x]` в `TODO.md` **в том же коммите** обновляй разделы «Текущее состояние [ОБНОВЛЯТЬ]» и «Следующий шаг [ОБНОВЛЯТЬ]» в этом файле, чтобы они отражали актуальный статус и ближайший приоритет.

---

## Проект [стабильный]

**Название:** 360tur-landing (в данном случае tur - это узбекское слово и переводится как тур или по английски tour)
**Репозиторий:** https://github.com/imchrm/360tur-landing (private)
**Тип:** Статический лендинг, React + Vite + Tailwind CSS
**Назначение:** сайт для представления компании (сервиса) которая создает виртуальные 3D туры с помощью камер 360 создающих равнопромежуточные (equirectangular) изображения.

---

## Машина разработки [стабильный]

**Локальная разработка (владелец проекта):**
- **ОС:** Windows, PowerShell
- **Путь к проекту:** `C:\Users\zum\dev\js\360tur-landing`
- **Исходный код или шаблон на основании которого создаётся проект:** `C:\Users\zum\dev\js\360tur-landing\musor\src`
- **Node:** v24.12.0
- **Git:** 2.x, ветка по умолчанию — `main`

**Web-сессия (агент Claude Code on the web):**
- **ОС:** Linux
- **Путь к проекту:** `/home/user/360tur-landing`
- **Shell:** bash

## Технический стек [стабильный]

- React 18
- Vite
- Tailwind CSS
- React Router
- PostCSS

## Структура репозитория [стабильный]

```
360tur-landing/
├── design/                       # Исходники дизайна (HTML-экспорт из Stitch)
│   ├── site_01/
│   │   ├── DESIGN.md
│   │   ├── code.html
│   │   ├── room00.png
│   │   └── screen.png
│   └── site_02/
│       ├── DESIGN.md
│       ├── code.html
│       └── screen.png
├── docs/                         # Документация и контекст
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   ├── CONTEXT.md
│   ├── DESIGN_BRIEF.md
│   ├── TODO.md
│   └── templates/
│       └── landing-design-brief-questionnaire.md
├── musor/                        # Старый шаблон (источник для миграции, постепенно удаляется)
│   └── ...
├── src/                          # Исходный код приложения (React + Vite)
│   ├── App.jsx                   # роутер, маршруты
│   ├── main.jsx                  # точка входа, монтирование, провайдеры
│   ├── index.css                 # tailwind директивы + global styles
│   ├── components/
│   │   ├── AboutCards.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Icon.jsx              # обёртка над Material Symbols Outlined
│   │   ├── LanguageSwitcher.jsx
│   │   ├── Navigation.jsx
│   │   ├── Portfolio.jsx
│   │   └── Services.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx   # i18n: detect, persist, t()
│   ├── locales/
│   │   ├── en.js                 # пока ре-экспорт ru.js (TODO: перевод)
│   │   ├── ru.js
│   │   └── uz.js                 # пока ре-экспорт ru.js (TODO: перевод)
│   └── pages/
│       └── Home.jsx              # композиция всех секций
├── .gitignore
├── README.md
├── index.html                    # Vite entry HTML
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Ветки [стабильный]

- `main` — стабильный код, только через PR
- `develop` — текущая разработка
- `feature/*` — отдельные задачи
- `claude/*` — отдельные задачи, выполняемые агентом Claude (web-сессии)

## Текущее состояние [ОБНОВЛЯТЬ]

- В корне репозитория развёрнут рабочий **React + Vite + Tailwind**-проект: `package.json` со скриптами `dev / build / preview`, конфиги (`vite.config.js`, `tailwind.config.js`, `postcss.config.js`), `index.html`-entry для Vite.
- Реализована **i18n-инфраструктура**: `src/contexts/LanguageContext.jsx` с автодетектом по `Accept-Language`, `localStorage`-персистентностью и хуком `useLanguage()`; `src/locales/{ru,uz,en}.js` (uz/en временно ре-экспортируют ru до перевода).
- HTML из `design/site_01/code.html` разнесён по компонентам: `Header / Navigation / LanguageSwitcher / Hero / AboutCards / Services / Portfolio / FAQ / Footer`. Все тексты вынесены в `ru.js`.
- Маршрутизация: `BrowserRouter`, единственный маршрут `/` → `pages/Home.jsx`. Заглушки под `/privacy`, `/terms` — TODO.
- Старый шаблон `musor/` остаётся как референс; будет удалён после стабилизации миграции.
- Открытые вопросы централизованы в `TODO.md`.
- Известные баги (из дизайна, исправляются отдельно): нечитаемый Hero-заголовок поверх фото, кнопка «Контакты» (нужна реализация в виде dropdown), портфолио без реального iframe, отсутствие реальных ссылок на соцсети и номеров телефона.

## Следующий шаг [ОБНОВЛЯТЬ]

Закрыть зафиксированные баги дизайна:
- Сделать Hero-заголовок читаемым на фоне фото (text-shadow / glow / overlay).
- Реализовать выпадающее меню «Контакты» в хедере (телефон + мессенджеры).
- Подставить реальные ссылки на соцсети и номера телефонов.
- Подключить рабочий встраиваемый тур (`Portfolio` iframe) с `360tur.uz`.

Параллельно:
- Перевести строки на `uz` и `en` (пока локали ре-экспортируют `ru`).
- Завершить Приоритет 3 (брендинг — favicon, meta-теги).

---

## Открытые вопросы

_Открытые вопросы ведутся централизованно в `TODO.md` (разделы «Отложено / под вопросом» и соответствующие приоритеты), чтобы не было рассинхронизации._
