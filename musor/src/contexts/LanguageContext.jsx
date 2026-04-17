import React, { createContext, useContext, useState, useEffect } from 'react';
import { ru } from '../locales/ru';
import { uz } from '../locales/uz';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');
  const [translations, setTranslations] = useState(ru);

  useEffect(() => {
    // Load language from localStorage or default to 'ru'
    const savedLanguage = localStorage.getItem('language') || 'ru';
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === 'uz' ? uz : ru);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setTranslations(newLanguage === 'uz' ? uz : ru);
    localStorage.setItem('language', newLanguage);
  };

  const value = {
    language,
    translations,
    changeLanguage,
    t: translations // Shortcut for translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
