import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import avatar1 from '/images/Rectangle_240647349.png';
import avatar2 from '/images/Rectangle_240647348.png';
import avatar3 from '/images/Rectangle_240647352.png';
import avatar4 from '/images/Rectangle_240647350.png';
import avatar5 from '/images/Rectangle_240647347.png';

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = t.testimonials.reviews.map((review, index) => ({
    ...review,
    avatar: [avatar1, avatar2, avatar3, avatar4, avatar5][index]
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.testimonials.title} <span className="text-green-600">{t.testimonials.company}</span>
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full transform hover:scale-105">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0 ring-2 ring-green-200">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                      {testimonial.age && (
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.age}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-green-300 opacity-30">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on mobile */}
          <div className="swiper-button-prev !hidden sm:!flex !text-green-600 !bg-white !shadow-lg !w-10 !h-10 sm:!w-12 sm:!h-12 !rounded-full !border !border-gray-200 hover:!bg-green-50 transition-colors"></div>
          <div className="swiper-button-next !hidden sm:!flex !text-green-600 !bg-white !shadow-lg !w-10 !h-10 sm:!w-12 sm:!h-12 !rounded-full !border !border-gray-200 hover:!bg-green-50 transition-colors"></div>

          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !mt-6 sm:!mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;