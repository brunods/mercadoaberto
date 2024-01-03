import React from 'react';

interface BoxInfoProps {
  children: React.ReactNode;
  className?: string;
}

const BoxInfo: React.FC<BoxInfoProps> = ({ children, className = '' }) => (
  <div className={`p-4 my-5 rounded-[8px] border border-gray-50 ${className}`}>
    {children}
  </div>
);

export default BoxInfo;
