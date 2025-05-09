import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ConditionsTabProps {
  setActiveTab?: (tab: string) => void;
}

export const ConditionsTab: React.FC<ConditionsTabProps> = (props) => {
  const conditions = [
    {
      title: 'Depression & Mood Disorders',
      items: [
        'Major Depressive Disorder',
        'Bipolar Disorder',
        'Dysthymia (Persistent Depressive Disorder)',
        'Seasonal Affective Disorder',
        'Treatment-Resistant Depression',
      ],
      href: '#depression-and-mood-disorders-program',
    },
    {
      title: 'Anxiety & OCD',
      items: [
        'Generalized Anxiety Disorder (GAD)',
        'Panic Disorder',
        'Social Anxiety Disorder',
        'Obsessive-Compulsive Disorder (OCD)',
        'Phobias or specific fears',
        'Autism Spectrum Disorder and Anxiety',
      ],
      href: '#anxiety-and-ocd-program',
    },
    {
      title: 'Addiction & Dual Diagnosis',
      items: [
        'Substance Use Disorders (alcohol, opioids, and other drugs)',
        'Medication-Assisted Treatment (MAT) for opioid/alcohol dependence',
        'Co-occurring mental health conditions',
        'Support for recovery & relapse prevention',
      ],
      href: '#addictions-and-dual-diagnosis-program',
    },
    {
      title: 'PTSD & Trauma-Related Disorders',
      items: [
        'Post-Traumatic Stress Disorder (PTSD)',
        'Complex Trauma',
        'Acute Stress Disorder',
        'Adjustment Disorders',
        'Other trauma-related conditions',
      ],
      href: '#ptsd-and-trauma-program',
    },
    {
      title: 'Eating Disorders',
      items: [
        'Anorexia Nervosa',
        'Bulimia Nervosa',
        'Binge Eating Disorder',
        'ARFID (Avoidant/Restrictive Food Intake Disorder)',
        'Body image disorders',
      ],
      href: '#eating-disorders-program',
    },
  ];

  const handleLearnMoreClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    if (props.setActiveTab) {
      props.setActiveTab('specialized-programs');
    }
    setTimeout(() => {
      window.location.hash = href;
    }, 0);
  };

  return (
    <div className="mb-24">
      <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Conditions We Treat</h2>
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        We provide evidence-based treatment for a wide range of mental health conditions across all age groups. No matter what challenges you or your loved one are facing, we are here to help you find hope and healing. Conditions we treat include:
      </p>
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {conditions.map((condition, index) => (
          <div key={index} className="bg-[#F5F7FF] p-6 rounded-xl flex flex-col w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(100%/3_-_(4rem/3))]">
            <h4 className="font-spectral text-[#0E245B] font-normal text-2xl leading-8 mb-3">
              {condition.title}
            </h4>
            <ul className="text-black text-base leading-6 space-y-1 mb-4 flex-grow">
              {condition.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            <a 
              href={condition.href} 
              onClick={(e) => handleLearnMoreClick(e, condition.href)}
              className="inline-flex items-center text-[#0E245B] font-sans font-bold text-base leading-6 mt-auto group"
            >
              Learn more
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 text-[#235ff8]" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};