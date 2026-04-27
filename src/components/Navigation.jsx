import { useLanguage } from '../contexts/LanguageContext.jsx';

const ITEMS = [
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'faq', key: 'nav.faq' },
];

export default function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {ITEMS.map(({ id, key }) => (
        <a
          key={id}
          href={`#${id}`}
          className="text-on-surface opacity-70 font-label hover:text-primary hover:opacity-100 transition-all duration-300"
        >
          {t(key)}
        </a>
      ))}
    </nav>
  );
}
