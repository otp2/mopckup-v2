import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import childImage from '../assets/child-img.png';
import adolescentImage from '../assets/adolescent-img.png';
import adultImage from '../assets/adult-img.png';

export const ProgramSlider = () => {
  return (
    <div className="relative py-16 sm:py-24 bg-[#F5F7FF] overflow-hidden rounded-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        effect="fade"
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }} 
        className="program-slider"
      >
        <SwiperSlide>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src={childImage}
                alt="Children's Mental Health Care"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-[250px] object-cover lg:order-last"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-spectral mb-6 text-[#002855]">Children's Mental Health Care</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  We provide expert behavioral health care designed for children, offering support for anxiety, OCD, depression, trauma, and more. Our specialists use evidence-based therapies to help children build resilience and thrive.
                </p>
                <a href="https://www.eehealth.org/services/behavioral-health/programs/child-mental-health-programs/" className="inline-flex items-center text-[#235ff8] font-medium hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src={adolescentImage}
                alt="Adolescent Mental Health Care"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-[250px] object-cover lg:order-last"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-spectral mb-6 text-[#002855]">Adolescent Mental Health Care</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Teens face unique challenges, and our specialized programs provide structured support for anxiety, depression, eating disorders, and more. With therapy, family involvement, and school coordination, we help teens regain stability and confidence.
                </p>
                <a href="https://www.eehealth.org/services/behavioral-health/programs/adolescent-mental-health-programs/" className="inline-flex items-center text-[#235ff8] font-medium hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src={adultImage}
                alt="Adult Mental Health Care"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-[250px] object-cover lg:order-last"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-spectral mb-6 text-[#002855]">Adult Mental Health Care</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  From anxiety and depression to addiction and trauma recovery, our comprehensive care ensures adults receive the right support at every stage. With inpatient, PHP, IOP, and outpatient options, we help you move forward with confidence.
                </p>
                <a href="https://www.eehealth.org/services/behavioral-health/programs/adult-mental-health-programs/" className="inline-flex items-center text-[#235ff8] font-medium hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};