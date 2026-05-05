import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';
import {
  TelegramIcon,
  WhatsAppIcon,
  InstagramIcon,
  BRAND_BG,
} from './MessengerIcons.jsx';

// TODO: позже заменить на превью реального тура / монтаж Marzipano.
// Файл лежит в `public/imgs/` — Vite раздаёт его как `/imgs/...` без бандлинга.
const HERO_BG_URL = 'imgs/bedroom_cam_001_res_4096x2048_00.jpg';

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
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${HERO_BG_URL}")` }}
          role="img"
          aria-label="Modern luxury interior preview"
        />
        {/* Затемняющий градиент: отделяет текст слева от фона */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/5 to-transparent" />
        {/* <div className="relative z-10 flex flex-col items-center gap-4 opacity-50 lg:ml-auto lg:mr-32">
          <Icon name="360" className="text-6xl text-primary" />
          <span className="font-label text-primary font-medium">
            {t('hero.viewerPlaceholder')}
          </span>
        </div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary text-glow-surface">
            {t('hero.title')}
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-medium text-glow-surface">
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
              {/* TODO: подставить реальные URL мессенджеров от клиента */}
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-3 rounded-full text-white hover:shadow-lg hover:scale-110 transition-all"
                style={{ backgroundColor: BRAND_BG.telegram }}
              >
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/998900000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-full text-white hover:shadow-lg hover:scale-110 transition-all"
                style={{ backgroundColor: BRAND_BG.whatsapp }}
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full text-white hover:shadow-lg hover:scale-110 transition-all"
                style={{ background: BRAND_BG.instagramGradient }}
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
