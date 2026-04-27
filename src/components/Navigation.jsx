import { useLanguage } from '../contexts/LanguageContext.jsx';

const ITEMS = [
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'faq', key: 'nav.faq' },
];

export default function Navigation({ active, onNavigate }) {
  const { t } = useLanguage();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {ITEMS.map(({ id, key }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => onNavigate(e, id)}
            className={`inline-block font-label transition-all duration-300 hover:text-primary hover:scale-105 ${
              isActive ? 'text-primary font-bold opacity-100' : 'text-on-surface opacity-70 hover:opacity-100'
            }`}
          >
            {t(key)}
          </a>
        );
      })}
    </nav>
  );
}
