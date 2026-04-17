import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '/images/Frame_2087325065.png';
import LeadForm from './LeadForm';

const Hero = () => {
  const { t } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Main content with image and text */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setIsLeadFormOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  {t.hero.cta}
                </button>
                <a
                  href="tel:+998903205719"
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {t.header.phone}
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Вынос мусора"
                  className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
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

export default Hero;
