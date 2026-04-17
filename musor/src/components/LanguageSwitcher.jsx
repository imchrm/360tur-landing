import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'ru', name: 'Ru' },
    { code: 'uz', name: 'Uz' }
  ];

  const currentLang = languages.find(lang => lang.code === language)?.name || 'Ru';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl px-2 sm:px-3 py-2 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group"
      >
        <span className="text-gray-700 font-medium text-xs sm:text-sm group-hover:text-gray-900 transition-colors">{currentLang}</span>
        <svg 
          className={`w-3 h-3 text-gray-600 transition-all duration-300 ${isOpen ? 'rotate-180 text-green-600' : 'group-hover:text-gray-800'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-16 sm:w-20 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors ${
                language === lang.code ? 'text-green-600 font-semibold bg-green-50' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
