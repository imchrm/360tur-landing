import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import menuIcon from '/images/svg/menu-burger_1.svg';
import caretIcon from '/images/svg/caret-down_1.svg';
import telegramIcon from '/images/svg/telegram-logo-green.svg';
import facebookIcon from '/images/svg/facebook-logo-green.svg';
import instagramIcon from '/images/svg/instagram-logo-green.svg';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { name: t.nav.construction, path: '/stroitelnyj' },
    { name: t.nav.household, path: '/bytovoj' },
    { name: t.nav.about, path: '/o-kompanii' },
    { name: t.nav.contacts, path: '/kontakty' }
  ];

  const socialLinks = [
    { name: 'Telegram', href: 'https://t.me/musorku', icon: telegramIcon },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100085950772800', icon: facebookIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/musor.ku', icon: instagramIcon }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
      >
        <img 
          src={menuIcon} 
          alt="Menu" 
          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="https://t.me/musorku"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl px-4 py-2 hover:from-green-200 hover:to-green-300 transition-all duration-300 group"
        >
          <img 
            src={telegramIcon} 
            alt="Telegram" 
            className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-green-700 font-medium text-sm group-hover:text-green-800 transition-colors">Telegram</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            className="flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl px-4 py-2 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group"
          >
            <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">{t.header.menu}</span>
            <img 
              src={caretIcon} 
              alt="Dropdown" 
              className={`w-4 h-4 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isSubmenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
              <div className="p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-3 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsSubmenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-green-100 hover:scale-110 transition-all duration-300"
                        title={social.name}
                      >
                        <img 
                          src={social.icon} 
                          alt={social.name} 
                          className="w-5 h-5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-xl border-t border-gray-200 z-50">
          <div className="container-custom py-6">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-4 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile contact info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              {/* Phone contact */}
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-100 to-green-200 rounded-xl px-4 py-4 mb-4 group">
                <svg className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+998903205719"
                  className="text-green-700 font-medium text-lg group-hover:text-green-800 transition-colors flex items-center"
                >
                  {t.header.phone}
                </a>
              </div>
              
              {/* Social links */}
              <div className="space-y-3">
                <p className="text-sm text-gray-600 font-medium">{t.header.followUs}</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:from-green-100 hover:to-green-200 hover:scale-110 transition-all duration-300 group"
                      title={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
