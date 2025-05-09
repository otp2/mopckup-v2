import React from 'react';

export const MainContent = () => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl mb-6 tracking-tight">Your best <i>mental health</i> is our Endeavor</h2>
      
      <p className="text-gray-800 text-lg leading-relaxed mb-4">
        From your initial consultation to ongoing support, our team provides compassionate, personalized care at every step. We deliver expert, evidence-based treatment for conditions like anxiety, depression, PTSD, trauma, and addiction – all tailored to your unique needs. We offer both inpatient and outpatient care, as well as specialized programs for children, adolescents, adults, and older adults, so that you can get the right level of support at the right time.
      </p>
      <div className="mt-3 mb-10"> 
        <a 
          href="https://www.eehealth.org/services/behavioral-health/behavioral-health-inquiry/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#235ff8] hover:bg-[#1b4bcc] transition-colors text-white text-sm font-medium px-6 py-2.5 rounded-full"
        >
          Request an Assessment
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </>
  );
};