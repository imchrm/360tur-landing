import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function Services() {
  const { t } = useLanguage();
  const items = t('services.items');
  const industries = t('services.industries');

  return (
    <section id="services" className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-16 text-center">
        {t('services.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {items.map((item) => (
          <article
            key={item.title}
            className="bg-surface-container-low rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/30"
          >
            <h4 className="font-headline text-lg font-bold text-primary mb-4">{item.title}</h4>
            <p className="font-body text-on-surface-variant">{item.text}</p>
          </article>
        ))}
      </div>

      <h3 className="font-headline text-2xl font-bold text-on-surface mb-8">
        {t('services.industriesTitle')}
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map((industry) => (
          <li
            key={industry.label}
            className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-surface-container-low transition-colors"
          >
            <Icon name={industry.icon} className="text-primary" />
            <span className="font-label text-sm text-on-surface">{industry.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
