import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  function handleSelect(code) {
    setLang(code);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-on-surface opacity-70 hover:text-primary transition-all duration-300 flex items-center gap-1 p-2 rounded-full hover:bg-surface-container"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Icon name="language" />
        <span className="font-label text-xs font-bold">{lang.toUpperCase()}</span>
        <Icon name="expand_more" className="text-sm" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl border border-outline-variant/20 overflow-hidden z-[60]"
        >
          {languages.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => handleSelect(code)}
                className={`block w-full text-left px-4 py-2 text-sm font-label transition-colors hover:bg-surface-container ${
                  code === lang ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`}
                aria-selected={code === lang}
                role="option"
              >
                {code.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
