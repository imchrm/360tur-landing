import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

// TODO: заменить URL на собственное превью тура (см. design/site_01/room00.png) либо
// смонтировать сюда Marzipano. Сейчас — placeholder из исходного дизайна.
const HERO_BG_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA678SG2BpmD2B2LZPODAAD1LPVUkjLrik5zcWc0Fw7Xcf1GnSvlQkCYSKWys8jVsnm-Q0L2qaS537-0g8j_D3cYq7hzeTLoPaH-YlmVd5WrbJHW6_s15wQjC_yujLWFtd0jxVYmJybFNLU701r-4GDGx-4b7lCNsmejsi3j2NTS3uYW_dZpv03Y2BrdOcy3-RaQBgo0Apv_7KD8_WPUf3qr8WdDsQ8UKy62CPpShDv6S6C6LVvaGBQvJCqTdUYoBGiAxzqW4vvRFqE';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="main"
      className="relative w-full min-h-[819px] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-surface-container-low">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${HERO_BG_URL}")` }}
          role="img"
          aria-label="Modern luxury interior preview"
        />
        {/* Затемняющий градиент: отделяет текст слева от фона */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-4 opacity-50 lg:ml-auto lg:mr-32">
          <Icon name="360" className="text-6xl text-primary" />
          <span className="font-label text-primary font-medium">
            {t('hero.viewerPlaceholder')}
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary text-glow-surface">
            {t('hero.title')}
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {/* TODO: подставить реальный номер */}
            <a
              href="tel:+998900000000"
              className="px-8 py-4 bg-primary text-on-primary font-label font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Icon name="call" />
              {t('hero.callCta')}
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary text-on-primary font-label font-medium rounded-lg hover:shadow-lg transition-all"
            >
              {t('hero.portfolioCta')}
            </a>
            <div className="flex gap-2 ml-4">
              {/* TODO: ссылки на мессенджеры (Telegram / WhatsApp / Messenger) */}
              <a
                href="#"
                className="p-3 bg-primary text-on-primary rounded-full hover:shadow-lg transition-colors"
                aria-label="Telegram"
              >
                <Icon name="chat" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary text-on-primary rounded-full hover:shadow-lg transition-colors"
                aria-label="WhatsApp / Messenger"
              >
                <Icon name="forum" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
