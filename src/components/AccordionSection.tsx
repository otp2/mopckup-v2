import React from 'react';
import { Plus, X } from 'lucide-react';

interface AccordionSectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full flex justify-between items-center cursor-pointer py-6"
        onClick={onToggle}
      >
        <h3 className={`text-lg font-bold ${isOpen ? 'text-[#235ff8]' : 'text-[#002855]'}`}>
          {title}
        </h3>
        <div className="bg-[#FFB81C] rounded-full p-2">
          {isOpen ? <X className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-black" />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6">
          {content}
        </div>
      )}
    </div>
  );
};