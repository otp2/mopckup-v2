import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import childImage from './assets/child-img.png';
import adolescentImage from './assets/adolescent-img.png';
import adultImage from './assets/adult-img.png';
import locationsImage from './assets/locations-image.png';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { TabNavigation } from './components/Tabs/TabNavigation';
import { MainContent } from './components/MainContent';
import { TabContent } from './components/TabContent';

function App() {
  const [activeTab, setActiveTab] = useState('conditions-we-treat');
  const [openAccordion, setOpenAccordion] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        // heroBottom assignment removed if unused, and setShowStickyButtons call removed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <HeroSection />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <MainContent />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent activeTab={activeTab} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} setActiveTab={setActiveTab} />

        {/* Featured Story Slider */}
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
                      Children often experience anxiety, OCD, depression, trauma, or behavioral issues differently than adults. Our child-focused specialists use proven therapies and a warm, encouraging approach to help kids build confidence, learn coping skills, and thrive in everyday life. We collaborate closely with families, offering practical tools and guidance for continued support at home.
                    </p>
                    <a href="https://www.eehealth.org/services/behavioral-health/programs/child-mental-health-programs/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center font-sans font-bold text-base leading-6 text-[#0E245B] hover:underline">
                      Learn More
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
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
                      Teens face unique pressures at home, in school, and socially. Our specialized programs address anxiety, depression, eating disorders, substance use, and more, combining individual and group therapy with family involvement. We also work with schools to ensure academic continuity and help teens stay on track.
                    </p>
                    <a href="https://www.eehealth.org/services/behavioral-health/programs/adolescent-mental-health-programs/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center font-sans font-bold text-base leading-6 text-[#0E245B] hover:underline">
                      Learn More
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
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
                      From persistent anxiety or depression to addiction and trauma, our comprehensive adult programs provide the right level of care at every stage. With options ranging from inpatient stabilization to outpatient therapies, you can move forward with confidence, knowing you have expert support and guidance.
                    </p>
                    <a href="https://www.eehealth.org/services/behavioral-health/programs/adult-mental-health-programs/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center font-sans font-bold text-base leading-6 text-[#0E245B] hover:underline">
                      Learn More
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        {/* Locations Section */}
        <div className="relative py-16 flex items-end">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl text-center mb-4 font-sans tracking-tight">Behavioral health care close to home</h2>
            <p className="text-gray-800 text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              With a comprehensive network of behavioral health locations across Chicagoland, Endeavor Health Behavioral Health offers expert mental health and substance use treatment that is convenient, accessible, and tailored to your needs. Whether you need outpatient therapy, intensive programs, or hospital-based care, our specialists are here to support you.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div className="space-y-6">
                <a href="https://www.eehealth.org/services/behavioral-health/locations/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex items-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#F15624] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-[#002855] mb-4">South/West Suburbs</h3>
                    <div className="grid grid-cols-2 gap-x-4">
                      <ul className="text-gray-700 space-y-2">
                        <li>Naperville</li>
                        <li>Hinsdale</li>
                        <li>Mokena</li>
                        <li>Plainfield</li>
                      </ul>
                      <ul className="text-gray-700 space-y-2">
                        <li>St. Charles</li>
                        <li>Addison</li>
                        <li>Woodridge</li>
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-end items-center font-sans font-bold text-base leading-6 text-[#0E245B]">
                       Learn more
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
                    </div>
                  </div>
                </a>
                <a href="https://www.eehealth.org/services/behavioral-health/locations/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex items-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#235ff8] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-[#002855] mb-4">North Suburbs/Chicago</h3>
                    <div className="grid grid-cols-2 gap-x-4">
                      <ul className="text-gray-700 space-y-2">
                        <li>Arlington Heights</li>
                        <li>Chicago</li>
                        <li>Deerfield</li>
                        <li>Evanston</li>
                      </ul>
                      <ul className="text-gray-700 space-y-2">
                        <li>Highland Park</li>
                        <li>Glenview</li>
                        <li>Gurnee</li>
                        <li>Skokie</li>
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-end items-center font-sans font-bold text-base leading-6 text-[#0E245B]">
                       Learn more
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="relative">
                <img
                  src={locationsImage}
                  alt="Map of Behavioral Health Locations"
                  className="w-full h-[calc((340px+12px)*1.5625)] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Measurement Section */}
        <div className="py-16">
          <h2 className="text-4xl text-center mb-4 font-sans tracking-tight">Clinically significant results</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            We're committed to delivering high-quality, evidence-based care that truly makes a difference in people's lives. Here's a look at some of our clinically significant outcomes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            <div className="bg-[#002855] text-white p-8 rounded-2xl">
              <div className="text-[#8BB8FF] text-4xl sm:text-5xl font-light mb-4">98%</div>
              <p className="text-base sm:text-lg leading-snug">
                of patients report a positive experience
              </p>
            </div>
            <div className="bg-[#002855] text-white p-8 rounded-2xl">
              <div className="text-[#8BB8FF] text-4xl sm:text-5xl font-light mb-4">1,200+</div>
              <p className="text-base sm:text-lg leading-snug">
                behavioral health patients served daily
              </p>
            </div>
            <div className="bg-[#002855] text-white p-8 rounded-2xl">
              <div className="text-[#8BB8FF] text-4xl sm:text-5xl font-light mb-4">2,782+</div>
              <p className="text-base sm:text-lg leading-snug">
                referring providers in greater Chicagoland
              </p>
            </div>
            <div className="bg-[#002855] text-white p-8 rounded-2xl">
              <div className="text-[#8BB8FF] text-4xl sm:text-5xl font-light mb-4">39,196</div>
              <p className="text-base sm:text-lg leading-snug">
                successful patient referrals over the past 5 years
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 font-sans tracking-tight">Take the First Step</h2>
          <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
            Sometimes the hardest part is acknowledging you might need help. We've made it easier to get started with quick, confidential screenings to gauge your symptoms.
          </p>
        </div>
        
        {/* Assessment Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto pb-16">
          {/* Anxiety Card Modified */}
          <a 
            href="https://healthrisk.endeavorhealth.org/v3/03a5241e-044e-4471-8aee-dabebd186ac4"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#F5F7FF] hover:bg-[#E8ECFF] transition-all duration-300 px-8 sm:px-10 py-8 rounded-xl flex flex-col items-center h-[340px] hover:shadow-lg"
          >
            <div className="flex-grow flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl sm:text-4xl mb-4 font-spectral tracking-tight">
                <span className="text-[#002855] block">Anxiety</span>
                <span className="text-[#002855] block">Aware</span>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-sm italic">
                "I want to know if I have anxiety so I can get relief and get on with life."
              </p>
            </div>
            <span className="group inline-flex items-center justify-center font-sans font-bold text-base leading-6 text-[#0E245B]">
              Assess Your Risk
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
            </span>
          </a>

          {/* Depression Card Modified */}
          <a 
            href="https://healthrisk.endeavorhealth.org/v3/f341715d-f6a8-4e63-bfd5-c436fda96b0a"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#F5F7FF] hover:bg-[#E8ECFF] transition-all duration-300 px-8 sm:px-10 py-8 rounded-xl flex flex-col items-center h-[340px] hover:shadow-lg"
          >
            <div className="flex-grow flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl sm:text-4xl mb-4 font-spectral tracking-tight">
                <span className="text-[#002855] block">Depression</span>
                <span className="text-[#002855] block">Aware</span>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-sm italic">
                "I want to know if I have depression so I can treat it and feel better."
              </p>
            </div>
            <span className="group inline-flex items-center justify-center font-sans font-bold text-base leading-6 text-[#0E245B]">
              Assess Your Risk
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
            </span>
          </a>
        </div>
      </div>
    </Layout>
  ); 
}

export default App;