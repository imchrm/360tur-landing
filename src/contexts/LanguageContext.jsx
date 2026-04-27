import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import ru from '../locales/ru.js';
import uz from '../locales/uz.js';
import en from '../locales/en.js';

const DICTIONARIES = { ru, uz, en };
const SUPPORTED = ['ru', 'uz', 'en'];
const DEFAULT_LANG = 'uz';
const STORAGE_KEY = 'lang';

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = window.navigator.language?.toLowerCase() || '';
  for (const code of SUPPORTED) {
    if (nav.startsWith(code)) return code;
  }
  return DEFAULT_LANG;
}

function resolveKey(dict, key) {
  return key.split('.').reduce((acc, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const t = useCallback(
    (key) => {
      const dict = DICTIONARIES[lang] ?? DICTIONARIES[DEFAULT_LANG];
      const value = resolveKey(dict, key);
      if (value === undefined) {
        const fallback = resolveKey(DICTIONARIES[DEFAULT_LANG], key);
        return fallback ?? key;
      }
      return value;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, languages: SUPPORTED }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
