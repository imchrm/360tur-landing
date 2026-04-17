import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import phoneIcon from '/images/svg/fi_15339234.svg';

const ContactInfo = () => {
  const { t } = useLanguage();
  
  return (
    <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 hover:from-green-200 hover:to-green-300 transition-all duration-300 group">
      <img
        src={phoneIcon}
        alt="Phone"
        className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform duration-300"
      />
      <a
        href="tel:+998903205719"
        className="text-green-700 font-medium text-xs sm:text-sm hover:text-green-800 transition-colors"
      >
        {t.header.phone}
      </a>
    </div>
  );
};

export default ContactInfo;
