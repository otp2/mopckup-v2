import React from 'react';
import { ConditionsTab } from './Tabs/ConditionsTab';
import { ProgramsTab } from './Tabs/ProgramsTab';
import { ReferralsTab } from './Tabs/ReferralsTab';
import { PatientResourcesTab } from './Tabs/PatientResourcesTab';
import { LevelsOfCareTab } from './Tabs/LevelsOfCareTab';

interface TabContentProps {
  activeTab: string;
  openAccordion: string;
  setOpenAccordion: (id: string) => void;
  setActiveTab: (tab: string) => void;
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, openAccordion, setOpenAccordion, setActiveTab }) => {
  return (
    <div>
      {activeTab === 'conditions-we-treat' && <ConditionsTab setActiveTab={setActiveTab} />}
      {activeTab === 'specialized-programs' && <ProgramsTab />}
      {activeTab === 'referrals' && <ReferralsTab />}
      {activeTab === 'patient-resources' && <PatientResourcesTab />}
      {activeTab === 'levels-of-care' && <LevelsOfCareTab openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} />}
    </div>
  );
};