import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { TOURS } from '../data/tours.js';
import Icon from './Icon.jsx';

function getTypeLabel(t, typeKey) {
  const industries = t('services.industries');
  if (!Array.isArray(industries)) return typeKey;
  const found = industries.find((i) => i.icon === typeKey);
  return found ? found.label : typeKey;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const total = TOURS.length;
  const tour = TOURS[activeIndex];
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1));
  }, []);
  const goNext = useCallback(() => {
    setActiveIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  // Keyboard navigation when the section has focus.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !hasMultiple) return undefined;
    function onKey(e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    }
    node.addEventListener('keydown', onKey);
    return () => node.removeEventListener('keydown', onKey);
  }, [hasMultiple, goPrev, goNext]);

  if (total === 0) return null;

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      tabIndex={hasMultiple ? 0 : -1}
      className="max-w-7xl mx-auto px-8 py-24 outline-none"
    >
      <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6 text-center">
        {t('portfolio.title')}
      </h2>
      <p className="font-body text-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
        {t('portfolio.description')}
      </p>

      <div className="relative w-full mx-auto aspect-video bg-surface-container-low rounded-xl overflow-hidden shadow-brand-soft mb-6 border border-outline-variant/30">
        <iframe
          key={tour.id}
          src={`${baseUrl}${tour.embedSrc}`}
          title={t(tour.titleKey)}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        />
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              aria-label={t('portfolioCarousel.prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Icon name="chevron_left" className="text-3xl" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label={t('portfolioCarousel.next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Icon name="chevron_right" className="text-3xl" />
            </button>
          </>
        )}
      </div>

      <div className="text-center mb-8">
        <h3 className="font-headline text-2xl font-bold text-on-surface">
          {t(tour.titleKey)}
        </h3>
        <p className="font-label text-sm text-on-surface-variant uppercase tracking-wider mt-1">
          {getTypeLabel(t, tour.typeKey)}
        </p>
      </div>

      {hasMultiple && (
        <>
          {/* Desktop: thumbnails */}
          <ul className="hidden md:flex gap-4 justify-center mb-12" role="tablist" aria-label={t('portfolioCarousel.selectTour')}>
            {TOURS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={`group block w-40 rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      isActive
                        ? 'border-primary shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-video bg-surface-container-low overflow-hidden">
                      <img
                        src={`${baseUrl}${item.previewSrc}`}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-3 py-2 text-left bg-surface-container-lowest">
                      <div className="font-label text-xs font-medium text-on-surface line-clamp-1">
                        {t(item.titleKey)}
                      </div>
                      <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider line-clamp-1">
                        {getTypeLabel(t, item.typeKey)}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
          {/* Mobile: dots */}
          <div className="md:hidden flex gap-2 justify-center mb-12" role="tablist" aria-label={t('portfolioCarousel.selectTour')}>
            {TOURS.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={t(item.titleKey)}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? 'bg-primary scale-125' : 'bg-on-surface/30 hover:bg-on-surface/50'
                  }`}
                />
              );
            })}
          </div>
        </>
      )}

      <div className="flex justify-center">
        <a
          href="https://360tur.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-primary text-on-primary font-label font-medium text-lg rounded-lg hover:shadow-lg transition-colors shadow-md active:scale-95 duration-300"
        >
          {t('portfolio.allWorksCta')}
        </a>
      </div>
    </section>
  );
}
