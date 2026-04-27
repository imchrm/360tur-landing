import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-black text-on-surface font-headline">360tur.uz</div>
          <p className="font-label text-sm text-on-surface/70">{t('footer.copyright')}</p>
          <div className="flex gap-4">
            {/* TODO: ссылки на соцсети (Instagram, Facebook, Telegram-канал) */}
            <a
              href="#"
              aria-label="Social link"
              className="text-on-surface/70 hover:text-primary transition-colors"
            >
              <Icon name="language" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-on-surface">{t('footer.linksTitle')}</h4>
          <a
            href="/privacy"
            className="font-label text-sm text-on-surface/70 hover:text-primary transition-colors"
          >
            {t('footer.privacy')}
          </a>
          <a
            href="/terms"
            className="font-label text-sm text-on-surface/70 hover:text-primary transition-colors"
          >
            {t('footer.terms')}
          </a>
          <a
            href="#"
            className="font-label text-sm text-on-surface/70 hover:text-primary transition-colors"
          >
            {t('footer.legal')}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-on-surface">{t('footer.contactTitle')}</h4>
          <a
            href={`mailto:${t('footer.email')}`}
            className="font-label text-sm text-on-surface/70 hover:text-primary transition-colors"
          >
            {t('footer.email')}
          </a>
          {/* TODO: подставить реальный номер */}
          <a
            href="tel:+998900000000"
            className="font-label text-sm text-on-surface/70 hover:text-primary transition-colors"
          >
            {t('footer.phoneDisplay')}
          </a>
        </div>
      </div>
    </footer>
  );
}
