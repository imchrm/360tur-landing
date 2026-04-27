import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

// TODO: подставить реальный URL встраиваемого тура с 360tur.uz
const TOUR_EMBED_URL = '';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6 text-center">
        {t('portfolio.title')}
      </h2>
      <p className="font-body text-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
        {t('portfolio.description')}
      </p>

      <div className="relative w-full max-w-5xl mx-auto aspect-video bg-surface-container-low rounded-xl overflow-hidden shadow-brand-soft mb-12 border border-outline-variant/30">
        {TOUR_EMBED_URL ? (
          <iframe
            src={TOUR_EMBED_URL}
            title="3D Tour"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-lowest group cursor-pointer hover:bg-surface-container-low transition-colors duration-300">
            <Icon name="360" className="text-6xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-headline text-2xl font-bold text-on-surface mb-2">
              {t('portfolio.placeholderTitle')}
            </span>
            <span className="font-body text-on-surface-variant">
              {t('portfolio.placeholderHint')}
            </span>
          </div>
        )}
      </div>

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
