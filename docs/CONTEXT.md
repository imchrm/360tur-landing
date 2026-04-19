# CONTEXT — 360tur-landing

Инструкция по использованию:
- В начале сессии — передай этот файл ассистенту целиком
- В конце сессии — перезапиши разделы, помеченные [ОБНОВЛЯТЬ]
- Детали выполненных задач переноси в CHANGELOG.md, не сюда
- Разделы без пометки — стабильные, меняются редко

---

## Проект [стабильный]

**Название:** 360tur-landing (в данном случае tur - это узбекское слово и переводится как тур или по английски tour)
**Репозиторий:** https://github.com/imchrm/360tur-landing (private)
**Тип:** Статический лендинг, React + Vite + Tailwind CSS
**Назначение:** сайт для представления компании (сервиса) которая создает виртуальные 3D туры с помощью камер 360 создающих равнопромежуточные (equirectangular) изображения.

---

## Машина разработки [стабильный]

- **ОС:** Windows, PowerShell
- **Путь к проекту:** `C:\Users\zum\dev\js\360tur-landing`
- **Исходный код или шаблон на основании которого создаётся проект:** `C:\Users\zum\dev\js\360tur-landing\musor\src`
- **Node:** v24.12.0
- **Git:** 2.x, ветка по умолчанию — `main`

## Технический стек [стабильный]

- React 18
- Vite
- Tailwind CSS
- React Router
- PostCSS

## Структура репозитория [стабильный] (не полная, упрощенная, требуется одноразовая корректировка)

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

## Ветки [стабильный]

- `main` — стабильный код, только через PR
- `develop` — текущая разработка
- `feature/*` — отдельные задачи

## Текущее состояние [ОБНОВЛЯТЬ]

Scaffold из шаблона `musor/` (проект вывоза мусора) перенесён в репозиторий.
Репозиторий инициализирован, первые коммиты сделаны, ветка `main`.
Папка `docs/` создана, базовые файлы документации добавлены.
Очистка шаблона ещё не начата.

## Следующий шаг [ОБНОВЛЯТЬ]

Приоритет 1 из TODO.md — очистка шаблона:
удалить `LanguageSwitcher`, убрать Telegram-бот из `Contact.js`.

---

## Открытые вопросы

- Через что реализовать форму обратной связи?
- Целевая платформа деплоя?
