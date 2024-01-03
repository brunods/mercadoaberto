import React from 'react';

interface TitleBoxSectionProps {
  children: React.ReactNode;
}

const TitleBoxSection: React.FC<TitleBoxSectionProps> = ({ children }) => (
  <h2 className="font-roboto font-semibold text-16 text-gray-800 inline-block">
    {children}
  </h2>
);

export default TitleBoxSection;
