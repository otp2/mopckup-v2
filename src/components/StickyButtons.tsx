import React, { useState, useEffect } from 'react';

export const StickyButtons = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsCollapsed(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseButtonMinWidth = "min-w-[56px]"; // For collapsed icon area
  const expandedButtonMinWidths = "min-w-[230px] sm:min-w-[250px]";
  
  const collapsedHoverTranslation = "group-hover:-translate-x-[182px] group-hover:sm:-translate-x-[202px]";

  const buttons = [
    {
      id: 'find-provider',
      href: "https://www.endeavorhealth.org/find-a-doctor?specialty%5B%5D=3632&specialty%5B%5D=3312&specialty%5B%5D=3638&search_terms=&proximity_center%5Bcoordinates%5D%5Blat%5D=&proximity_center%5Bcoordinates%5D%5Blng%5D=&proximity_center%5Bgeocoder%5D%5Bgeolocation_geocoder_address%5D=&name=&employed=1&language=All&search_terms=&gender=All",
      label: "Find a provider",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      targetBlank: true,
    },
    {
      id: 'find-location',
      href: "https://www.eehealth.org/services/behavioral-health/locations/",
      label: "Find a Location",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
        </svg>
      ),
      targetBlank: true,
    },
    {
      id: 'request-assessment',
      href: "tel:8474325464",
      label: "Request an assesment",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      targetBlank: false,
    },
  ];

  return (
    <div className={`fixed right-0 top-4 flex flex-col space-y-2 z-50 transition-all duration-500 sm:flex ${isCollapsed ? 'translate-x-[calc(100%-3rem)]' : 'translate-x-0'}`}>
      {buttons.map(button => {
        const buttonDynamicStyles = isCollapsed 
          ? `${baseButtonMinWidth} group-hover:${expandedButtonMinWidths} ${collapsedHoverTranslation}`
          : expandedButtonMinWidths;
        
        const contentDynamicStyles = isCollapsed 
          ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          : "opacity-100 visible";

        return (
          <a 
            key={button.id}
            href={button.href}
            target={button.targetBlank ? "_blank" : "_self"}
            rel={button.targetBlank ? "noopener noreferrer" : ""}
            className={`group bg-[#FFCF30] hover:bg-[#FFDC46] transition-all duration-500 text-black text-sm font-medium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center ${buttonDynamicStyles}`}>
            {button.icon}
            <span className={`ml-4 flex-grow text-sm font-medium transition-all duration-300 ${contentDynamicStyles}`}>{button.label}</span>
            <span className={`text-sm group-hover:translate-x-0.5 transition-all duration-300 mr-1 ${contentDynamicStyles}`}>›</span>
          </a>
        );
      })}
    </div>
  );
};