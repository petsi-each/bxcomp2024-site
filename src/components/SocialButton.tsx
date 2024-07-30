import React from 'react';
import { IconType } from 'react-icons';

interface SocialButtonProps {
  href: string;
  icon: IconType;
  size: number;
  color: string;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon, size, color, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center ${className}`}
    >
      <Icon size={size} color={color} />
    </a>
  );
};

export default SocialButton;
