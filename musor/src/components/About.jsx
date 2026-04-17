import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import aboutRightImage from '/images/about-right-image.png';
import aboutGroupImage from '/images/Group_2087324917.svg';

const About = () => {
  const { t } = useLanguage();
  const advantages = t.about.advantages;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.about.title}
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                {t.about.subtitle}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {t.about.description2}
                </p>
                <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
                  {t.about.description3}
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <a 
                  href="/o-kompanii" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <span>{t.about.moreButton}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img
                  src={aboutRightImage}
                  alt="О нашей компании"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                />
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Group image below main content */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="relative">
              <img
                src={aboutGroupImage}
                alt="О нашей компании"
                className="w-full max-w-4xl h-auto mx-auto rounded-2xl shadow-lg"
              />
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:scale-105">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;