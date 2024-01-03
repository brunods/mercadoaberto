import React, { ButtonHTMLAttributes } from 'react';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ className = '', disabled, children, light, ...props }) => {
  const buttonStyles = `
    font-inter font-bold
    ${!light ? 'bg-secondary border-secondary border-[1px] text-white hover:bg-blue-700 hover:border-blue-700' : 'border-secondary border-[1px] text-secondary'}
    rounded-[4px] text-[14px] px-3 py-2 delay-75 transition-colors duration-300 ease-in-out
    disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-600 disabled:cursor-not-allowed
    ${className}
  `;

  return (
    <button
      {...props}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
