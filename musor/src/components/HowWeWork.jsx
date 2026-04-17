import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LeadForm from './LeadForm';

const HowWeWork = () => {
  const { t } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-gray-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.howWeWork.title}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Lines - Desktop only */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 z-0"></div>
            {/* Line between steps 5-6-7 - Desktop only */}
            <div className="hidden lg:block absolute top-16 left-1/2 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-200 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
              {t.howWeWork.steps.map((step, index) => (
                <div key={index} className="relative z-10">
                  {/* Step Card */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:scale-105">
                    {/* Step Number */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 text-white text-lg sm:text-xl font-bold rounded-full mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-medium">
                          {step.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for mobile */}
                    {index < t.howWeWork.steps.length - 1 && (
                      <div className="sm:hidden flex justify-center mt-4">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t.howWeWork.cta.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                {t.howWeWork.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setIsLeadFormOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105 transform shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {t.howWeWork.cta.telegramButton}
                </button>
                <a
                  href="tel:+998903205719"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105 transform shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  {t.howWeWork.cta.callButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
    </section>
  );
};

export default HowWeWork;
