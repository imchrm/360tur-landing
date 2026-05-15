import { useLanguage } from '../contexts/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function AboutCards() {
  const { t } = useLanguage();
  const cards = t('about.cards');

  return (
    <section id="about" className="bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-surface-container-lowest p-8 rounded-xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Icon name={card.icon} />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">{card.title}</h3>
              <p className="font-body text-on-surface-variant">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
