# CONTEXT — 360tur-landing

Этот файл обновляется после каждой рабочей сессии.
В начале новой сессии передай его содержимое ассистенту.

---

## Проект

**Название:** 360tur-landing (в данном случае tur - это узбекское слово и переводится как тур или по английски tour)
**Репозиторий:** https://github.com/imchrm/360tur-landing (private)
**Тип:** Статический лендинг, React + Vite + Tailwind CSS
**Назначение:** сайт для представления компании (сервиса) которая создает виртуальные 3D туры с помощью камер 360 создающих равнопромежуточные (equirectangular) изображения.

---


## Машина разработки

- **ОС:** Windows, PowerShell
- **Путь к проекту:** `C:\Users\zum\dev\js\360tur-landing`
- **Исходный код или шаблон на основании которого создаётся проект:** `C:\Users\zum\dev\js\360tur-landing\musor\src`
- **Node:** [указать версию после `node --version`]
- **Git:** [указать версию после `git --version`]

## Структура репозитория (не полная, упрощенная)

```
360tur-landing/
├── docs/            # Документация и контекст
├── musor/           # Шаблон проекта
│   ├── index.html
│   ├── package-lock.json
│   │   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   │   └── images
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── AboutCards.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ContactInfo.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HowWeWork.jsx
│   │   │   ├── LanguageSwitcher.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── contexts/
│   │   │   └── LanguageContext.jsx
│   │   ├── index.css
│   │   ├── index.jsx
│   │   ├── locales/
│   │   │   ├── ru.js
│   │   │   └── uz.js
│   │   └── pages/
│   │       ├── About.jsx
│   │       ├── ConstructionWaste.jsx
│   │       ├── Contact.jsx
│   │       ├── Home.jsx
│   │       └── HouseholdWaste.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Ветки

- `main` — стабильный код, только через PR
- `develop` — текущая разработка
- `feature/*` — отдельные задачи

## Технический стек

- React 18 (уточнить актуальную версию)
- Vite (не CRA)
- Tailwind CSS
- React Router
- PostCSS

## Текущее состояние

Scaffold из шаблона `musor/` (проект вывоза мусора).
Шаблон перенесён локально, репозиторий инициализирован, первый коммит сделан.
Ветка переименована из `master` в `main`.
Папка `docs/` создана, базовые файлы документации добавлены.

Шаблон содержит:
- компонент `LanguageSwitcher` — подлежит удалению (уточнить)
- Telegram-бот в `Contact.js` — подлежит удалению
- страницы под мусорную тематику — подлежат переработке

## Что сделано (хронология)

### [дата] — Инициализация репозитория
- Скопирован шаблон musorku в папку musor/
- Удалены: папка `telegram/`, файл `LEAD_FORM_SETUP.md`
- Добавлен `.gitignore` (node_modules/, build/, dist/, .env)
- git init, первый коммит, ветка переименована master -> main
- Создана папка docs/ с TODO.md, CONTEXT.md, ARCHITECTURE.md

## Следующий шаг

Начать с Приоритета 1 из TODO.md: очистка шаблона от ненужных компонентов.

---

## Открытые вопросы

- Нужна ли мультиязычность?
- Через что реализовать форму обратной связи?
- Целевая платформа деплоя?
