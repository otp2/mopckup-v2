import React from 'react';

export const PatientResourcesTab = () => {
  return (
    <div className="mb-24">
      <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Education Library</h2>
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        Access expert insights, clinical updates, and practical guidance on mental health topics.
      </p>
      <div className="space-y-6 mb-10">
        <div>
          <h3 className="text-[#002855] font-medium mb-3">Professional E-Newsletter</h3>
          <p className="text-gray-700 text-base mb-2">Stay up to date with the latest advancements in behavioral health care, treatment approaches, and industry news.</p>
          <a href="https://www.eehealth.org/services/behavioral-health/professionals/professional-enewsletter/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-yellow-400 inline-block px-2 py-1 text-sm">LINKS TO OPERATIONS PAGE</a>
        </div>
        <div>
          <h3 className="text-[#002855] font-medium mb-3">Parenting & Family Education</h3>
          <p className="text-gray-700 text-base">Articles, videos, and guides designed to help families understand and support loved ones with mental health conditions.</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-10 mb-10">
        <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Parent Involvement & Support</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-8">
          At Endeavor Health Behavioral Health, we recognize the vital role that parents and caregivers play in a child's recovery journey. This section serves as a hub for resources designed to help you support your teen's mental and emotional well-being.</p>
        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-[#002855] font-medium mb-3">Parenting Unplugged: Raising Healthy Teen Minds Podcast</h3>
            <p className="text-gray-700 text-base mb-2">Our expert-led podcast explores the challenges and successes of raising teens in today's world. Each episode provides practical strategies and expert insights to help parents navigate topics like anxiety, social pressures, and substance use.</p>
            <a href="https://www.eehealth.org/services/behavioral-health/news-and-events/parent-series/episodes-and-recordings/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-yellow-400 inline-block px-2 py-1 text-sm">LINKS TO OPERATIONS PAGE</a>
          </div>
          <div>
            <h3 className="text-[#002855] font-medium mb-3">SOAR Support Group</h3>
            <p className="text-gray-700 text-base">4-week support group designed for adults with children in program, offering education and strategies to support their teen's mental health journey. Join guided discussions led by behavioral health professionals and gain tools to support your child at home.</p>
          </div>
          <div>
            <h3 className="text-[#002855] font-medium mb-3">Family Support Sessions</h3>
            <p className="text-gray-700 text-base">We offer structured family sessions as part of our inpatient and intensive outpatient programs. These sessions focus on improving communication, strengthening family relationships, and providing guidance on how to best support your loved one's recovery.</p>
          </div>
        </div>
        <a href="https://www.eehealth.org/services/behavioral-health/news-and-events/parent-involvement/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-yellow-400 inline-block px-2 py-1 text-sm">LINKS TO OPERATIONS PAGE</a>
      </div>
        <div className="border-t border-gray-200 pt-10">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Mental Health First Aid Training</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Learn to identify, understand and respond to signs of mental health and substance use challenges.
          </p>
          <a href="https://www.eehealth.org/services/behavioral-health/news-and-events/mental-health-first-aid/mhfa-classes/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-yellow-400 inline-block px-2 py-1 text-sm mb-2">LINKS TO OPERATIONS PAGE</a>
      </div>
      
      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Patient Forms and Insurance</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          Overcoming the cost barrier for mental health recovery, our staff can assists with insurance coordination for appropriate, timely, and covered treatment.
        </p>
        <a href="https://www.eehealth.org/services/behavioral-health/navigating-treatment/patient-forms-and-insurance/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-yellow-400 inline-block px-2 py-1 text-sm mb-2">LINKS TO OPERATIONS PAGE</a>
      </div>
    </div>
  );
};