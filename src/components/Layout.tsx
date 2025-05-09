import React from 'react';
import { StickyButtons } from './StickyButtons';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative">
      <StickyButtons />
      
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center space-x-1.5 text-xs text-blue-600 mb-8 sm:mb-12">
            <span>HOME</span>
            <span>›</span>
            <span>SERVICES</span>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};