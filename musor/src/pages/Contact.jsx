import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LeadForm from '../components/LeadForm';

const Contact = () => {
  const { t } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.pages.contact.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.pages.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.pages.contact.contactSection.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.pages.contact.contactSection.subtitle}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{t.pages.contact.contactSection.phone.title}</h3>
                      <a 
                        href="tel:+998903205719" 
                        className="text-primary-600 text-lg font-medium hover:text-primary-700 transition-colors"
                      >
                        {t.pages.contact.contactSection.phone.number}
                      </a>
                      <p className="text-gray-600 mt-1">{t.pages.contact.contactSection.phone.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{t.pages.contact.contactSection.telegram.title}</h3>
                      <a 
                        href="https://t.me/musorku" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 text-lg font-medium hover:text-primary-700 transition-colors"
                      >
                        {t.pages.contact.contactSection.telegram.username}
                      </a>
                      <p className="text-gray-600 mt-1">{t.pages.contact.contactSection.telegram.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{t.pages.contact.contactSection.address.title}</h3>
                      <p className="text-gray-600">{t.pages.contact.contactSection.address.location}</p>
                      <p className="text-gray-600">{t.pages.contact.contactSection.address.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.pages.contact.contactSection.workingHours.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t.pages.contact.contactSection.workingHours.weekdays}</span>
                    <span className="font-medium text-gray-900">{t.pages.contact.contactSection.workingHours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t.pages.contact.contactSection.workingHours.weekends}</span>
                    <span className="font-medium text-gray-900">{t.pages.contact.contactSection.workingHours.weekendsTime}</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {t.pages.contact.contactSection.socialMedia.title}
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://t.me/musorku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                      title="Telegram"
                    >
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100085950772800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                      title="Facebook"
                    >
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/musor.ku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                      title="Instagram"
                    >
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsLeadFormOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-lg px-8 py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                {t.leadForm.title}
              </button>
              <a 
                href="tel:+998903205719" 
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t.pages.contact.contactSection.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
    </div>
  );
};

export default Contact;
