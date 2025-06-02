import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'conditions-we-treat', label: 'Conditions we treat' },
    { id: 'specialized-programs', label: 'Programs' },
    { id: 'levels-of-care', label: 'Levels of treatment' },
    { id: 'referrals', label: 'Professional resources' },
    { id: 'patient-resources', label: 'Patient & community resources' },
  ];

  return (
    <div className="border-b border-gray-200 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide">
      <nav className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm whitespace-nowrap pb-1 sm:pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 border-b-2 transition-colors relative font-bold ${
              activeTab === tab.id
                ? 'text-[#1b4bcc] border-[#F15624] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#F15624]'
                : 'text-[#235ff8] border-transparent hover:text-[#1b4bcc]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};