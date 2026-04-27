import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

// TODO: подставить реальные URL соцсетей и бота
const CONTACTS = [
  { label: 'Telegram bot', href: 'https://t.me/username' },
  { label: 'Instagram', href: 'http://instagran.com' },
  { label: 'Facebook', href: 'http://facebook.com' },
];

export default function ContactsDropdown() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 px-4 py-2 rounded-lg border border-primary text-primary font-label font-medium bg-transparent hover:bg-primary/10 transition-colors"
      >
        {t('nav.contacts')}
        <Icon
          name="expand_more"
          className={`text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full pt-2 z-[60]">
          <ul
            role="menu"
            className="w-56 bg-white rounded-lg shadow-xl border border-outline-variant/20 overflow-hidden"
          >
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="flex items-center justify-between px-4 py-3 text-sm font-label text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                >
                  {c.label}
                  <Icon name="north_east" className="text-base opacity-60" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
