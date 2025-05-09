import React from 'react';

export const HeroSection = () => {
  return (
    <div id="hero-section" className="relative bg-[#F5F7FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 tracking-tight">
          Behavioral Health
        </h1>
        <p className="text-gray-800 max-w-3xl text-lg leading-relaxed mb-8">
          We offer comprehensive mental health services with the personalized feel of a local provider and the trusted resources of a leading hospital system. Whether you're dealing with anxiety, depression, trauma, substance use, or an eating disorder, our certified specialists will work with you to create a care plan that fits your life and makes achieving better mental health easier.
        </p>
      </div>
    </div>
  );
};