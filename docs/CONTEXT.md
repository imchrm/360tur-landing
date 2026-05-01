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
├── public/                       # Статические ассеты (Vite раздаёт от корня сайта)
│   ├── imgs/                     # фотографии (например, фон Hero)
│   │   └── bedroom_cam_001_res_4096x2048_00.jpg
│   └── tours/                    # встраиваемые Marzipano-туры (по одному в подпапке)
│       └── neoclassicalbedroom/  # пример демо-тура (img/, tiles/, vendor/, data.js, index.html, …)
├── src/                          # Исходный код приложения (React + Vite)
│   ├── App.jsx                   # роутер, маршруты
│   ├── main.jsx                  # точка входа, монтирование, провайдеры
│   ├── index.css                 # tailwind директивы + global styles + @layer utilities (.text-glow-surface)
│   ├── components/
│   │   ├── AboutCards.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx           # бренд + nav + LanguageSwitcher + Portfolio + кликабельный телефон
│   │   ├── Hero.jsx             # CTA: Позвонить / Портфолио / Telegram-WhatsApp-Instagram
│   │   ├── Icon.jsx              # обёртка над Material Symbols Outlined
│   │   ├── LanguageSwitcher.jsx
│   │   ├── Navigation.jsx
│   │   ├── Portfolio.jsx         # iframe Marzipano-тура из /tours/...
│   │   └── Services.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx   # i18n: detect, persist, t() — DEFAULT_LANG='uz'
│   ├── locales/
│   │   ├── en.js                 # пока ре-экспорт ru.js (TODO: перевод)
│   │   ├── ru.js
│   │   └── uz.js                 # переведено вручную
│   └── pages/
│       └── Home.jsx              # композиция всех секций
├── .gitignore
├── README.md
├── index.html                    # Vite entry HTML
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js                # server.host=true, preview.host=true (доступ из локальной сети)
```

## Ветки [стабильный]

- `main` — стабильный код, только через PR
- `develop` — текущая разработка
- `feature/*` — отдельные задачи
- `claude/*` — отдельные задачи, выполняемые агентом Claude (web-сессии)

## Текущее состояние [ОБНОВЛЯТЬ]

- В корне репозитория развёрнут рабочий **React + Vite + Tailwind**-проект; `npm run dev` слушает `0.0.0.0` (`server.host: true`), доступен из локальной сети.
- **i18n** работает: `LanguageContext` с автодетектом по `Accept-Language`, `localStorage`-персистентностью, хуком `useLanguage()`. `DEFAULT_LANG = 'uz'`. Переводы: `ru.js` и `uz.js` (вручную); `en.js` пока ре-экспортирует `ru.js`.
- **Хедер**: бренд `360tur.uz` и пункты меню — активная подсветка по hash + плавный скролл с offset, hover-scale на ссылках. Вместо «Контакты»-dropdown теперь видимый кликабельный номер телефона (`tel:` + иконка `call`); на мобильных свернут до иконки. Когда придут URL соцсетей — рядом с телефоном добавятся icon-кнопки Telegram / WhatsApp / Instagram.
- **Hero**: фон — локальный JPG из `public/imgs/`; добавлены градиент-overlay (читаемость заголовка) и утилита `.text-glow-surface`. Старый «viewer placeholder» закомментирован.
- **Portfolio**: подключён iframe демо-тура Marzipano из `public/tours/neoclassicalbedroom/index.html`. Конвенция: каждый тур — отдельная подпапка в `public/tours/`.
- **Маршрутизация**: `BrowserRouter`, единственный маршрут `/` → `pages/Home.jsx`. Заглушки под `/privacy`, `/terms` — TODO.
- Старый шаблон `musor/` удалён (миграция стабилизирована; история доступна в git до коммита удаления).
- Открытые вопросы — в `TODO.md`.

## Следующий шаг [ОБНОВЛЯТЬ]

- Подставить реальные данные (плейсхолдеры в коде помечены TODO):
  - URL соцсетей в `ContactsDropdown.jsx` и `Footer.jsx`;
  - реальные номера телефонов в `tel:`-ссылках Hero и Footer.
- Завершить Приоритет 3 (брендинг): `favicon`, расширенные meta-теги (`description`, OG, hreflang, Schema.org `LocalBusiness`).
- Перевести `en.js` (сейчас ре-экспортирует `ru.js`).
- Приоритет 6: реализовать недостающие секции (HowWeWork, Testimonials, About с миссией/счётчиками).

---

## Открытые вопросы

_Открытые вопросы ведутся централизованно в `TODO.md` (разделы «Отложено / под вопросом» и соответствующие приоритеты), чтобы не было рассинхронизации._
