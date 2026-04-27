import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import Navigation from './Navigation.jsx';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-brand-soft">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a href="#main" className="text-2xl font-bold tracking-tighter text-on-surface font-headline">
          360tur.uz
        </a>

        <Navigation />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#portfolio"
            className="hidden md:block px-4 py-2 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-secondary-a transition-colors"
          >
            {t('nav.portfolio')}
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-secondary-a transition-colors shadow-md active:scale-95"
          >
            {t('nav.contacts')}
          </a>
        </div>
      </div>
    </header>
  );
}
