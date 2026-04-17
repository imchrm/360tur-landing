import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutCards = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t.aboutCards.company.title,
      description: t.aboutCards.company.description,
    },
    {
      title: t.aboutCards.work.title,
      description: t.aboutCards.work.description,
    },
    {
      title: t.aboutCards.services.title,
      description: t.aboutCards.services.description,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Images section */}
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">              
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
