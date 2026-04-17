import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.footer.company.name}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-md">
                {t.footer.company.description}
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://t.me/musorku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  title="Telegram"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085950772800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/musor.ku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.footer.services.title}</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/bytovoj" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {t.footer.services.household}
                  </a>
                </li>
                <li>
                  <a 
                    href="/stroitelnyj" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {t.footer.services.construction}
                  </a>
                </li>
                <li>
                  <a 
                    href="/" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {t.footer.services.all}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.footer.contacts.title}</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a 
                    href="tel:+998903205719" 
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {t.footer.contacts.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">{t.footer.contacts.address}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">{t.footer.contacts.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                {t.footer.copyright}
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <a 
                  href="/o-kompanii" 
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  {t.footer.links.about}
                </a>
                <a 
                  href="/kontakty" 
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  {t.footer.links.contacts}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
