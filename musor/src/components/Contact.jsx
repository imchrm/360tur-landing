import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LeadForm from './LeadForm';

const Contact = () => {
  const { t } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            {t.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{t.contact.phone.title}</h3>
              <a 
                href="tel:+998903205719" 
                className="text-green-600 text-base sm:text-lg font-medium hover:text-green-700 transition-colors duration-300 block mb-2"
              >
                {t.contact.phone.number}
              </a>
              <p className="text-sm sm:text-base text-gray-600">{t.contact.phone.description}</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{t.contact.telegram.title}</h3>
              <a 
                href="https://t.me/musorku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 text-base sm:text-lg font-medium hover:text-green-700 transition-colors duration-300 block mb-2"
              >
                {t.contact.telegram.username}
              </a>
              <p className="text-sm sm:text-base text-gray-600">{t.contact.telegram.description}</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setIsLeadFormOpen(true)}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              {t.leadForm.title}
            </button>
            <a 
              href="tel:+998903205719" 
              className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t.contact.cta}
            </a>
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

export default Contact;
