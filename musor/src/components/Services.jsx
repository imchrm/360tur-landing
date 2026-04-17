import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.construction.title,
      description: t.services.construction.description,
      link: '/stroitelnyj',
      image: '/images/construction-waste.png'
    },
    {
      title: t.services.household.title,
      description: t.services.household.description,
      link: '/bytovoj',
      image: '/images/household-waste.png'
    }
  ];

  const wasteTypes = t.services.wasteTypes.map(name => ({ name }));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Main service cards with images - positioned like in original */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-contain bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Decorative overlay */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-all duration-300 group-hover:translate-x-1 transform"
                >
                  <span className="text-sm sm:text-base">{service.description}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Waste types - simple cards without images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {wasteTypes.map((type, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-green-100 transition-all duration-300 border border-gray-200 hover:border-green-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transform hover:scale-105">
              <p className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-green-800 transition-colors duration-300">{type.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {t.services.bottomText}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
