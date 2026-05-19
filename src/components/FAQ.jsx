import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function FAQ() {
  const { t } = useLanguage();
  const items = t('faq.items');

  return (
    <section id="faq" className="max-w-3xl mx-auto px-12 py-4 md:py-4 lg:py-4">
      <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-12 text-center">
        {t('faq.title')}
      </h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <details
            key={item.q}
            name="faq"
            className="group bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden transition-all duration-300"
          >
            <summary className="flex justify-between items-center cursor-pointer p-6 font-headline font-bold text-lg text-on-surface hover:text-primary transition-colors">
              {item.q}
              <Icon
                name="expand_more"
                className="text-primary group-open:rotate-180 transition-transform duration-300"
              />
            </summary>
            <div className="px-6 pb-6 font-body text-on-surface-variant text-base">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
