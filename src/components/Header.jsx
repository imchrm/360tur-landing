import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import Navigation from './Navigation.jsx';

const HEADER_OFFSET_PX = 80;

function getInitialActive() {
  if (typeof window === 'undefined') return 'main';
  return window.location.hash.slice(1) || 'main';
}

export default function Header() {
  const { t } = useLanguage();
  const [active, setActive] = useState(getInitialActive);

  useEffect(() => {
    function syncFromHash() {
      setActive(window.location.hash.slice(1) || 'main');
    }
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  function handleNavigate(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - HEADER_OFFSET_PX,
        behavior: 'smooth',
      });
    }
    window.history.pushState(null, '', `#${id}`);
    setActive(id);
  }

  const isBrandActive = active === 'main';

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-brand-soft">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a
          href="#main"
          onClick={(e) => handleNavigate(e, 'main')}
          className={`inline-block text-2xl font-bold tracking-tighter font-headline transition-all duration-300 hover:scale-105 ${
            isBrandActive ? 'text-primary' : 'text-on-surface hover:text-primary'
          }`}
        >
          360tur.uz
        </a>

        <Navigation active={active} onNavigate={handleNavigate} />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#portfolio"
            onClick={(e) => handleNavigate(e, 'portfolio')}
            className="hidden md:block px-4 py-2 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-secondary-a transition-colors"
          >
            {t('nav.portfolio')}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavigate(e, 'contact')}
            className="px-6 py-2 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-secondary-a transition-colors shadow-md active:scale-95"
          >
            {t('nav.contacts')}
          </a>
        </div>
      </div>
    </header>
  );
}
