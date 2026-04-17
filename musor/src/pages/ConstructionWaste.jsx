import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Contact from '../components/Contact';

const ConstructionWaste = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.pages.constructionWaste.title}
              <span className="block text-primary-600">{t.pages.constructionWaste.location}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.pages.constructionWaste.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.pages.constructionWaste.capabilities.title}
                </h3>
                <ul className="space-y-3">
                  {t.pages.constructionWaste.capabilities.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.pages.constructionWaste.wasteTypes.title}
                </h2>
                <ul className="space-y-4">
                  {t.pages.constructionWaste.wasteTypes.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ConstructionWaste;
