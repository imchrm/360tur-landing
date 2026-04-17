import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';
import ContactInfo from './ContactInfo';
import logo from '/images/svg/lolologo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img
              src={logo}
              alt="Musor.ku"
              className="h-8 sm:h-10 lg:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="text-gray-600 text-sm font-light">
              {t.header.tagline}
            </div>
          </div>

          {/* Right side - Contact info and menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <ContactInfo />
            <LanguageSwitcher />
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
