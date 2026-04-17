import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();
  const faqs = t.faq.questions;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-all duration-300 group"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4 group-hover:text-green-700 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-180 text-green-600' : 'group-hover:text-gray-700'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-4 sm:px-6 pb-4 sm:pb-5 transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'translate-y-0' 
                      : '-translate-y-2'
                  }`}>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
