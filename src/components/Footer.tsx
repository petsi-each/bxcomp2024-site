import React from 'react';
import { BiLogoFacebookSquare, BiSolidEnvelope, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi';
import ImageG from './ImageG';
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

export default function Footer() {
  return (
    <footer className="relative w-full h-80 pt-10 bg-transparent flex-col flex md:flex-row items-center md:items-end justify-end md:justify-between bg-[url('/waves.svg')] bg-cover bg-no-repeat bg-top">
      
      {/* Texto Desktop */}
      <h1 className="flex order-last items-center font-medium text-xs text-center text-black m-5 font-sans md:text-sm md:font-semibold md:order-first md:h-4 md:m-10 md:mb-11">
        Desenvolvido por PET-SI 2024
      </h1>

      {/* Logo PET e BX Desktop */}
      <div className="flex relative items-center justify-center w-24 h-8 m-1 order-first md:h-14 md:w-44 md:m-10 md:mb-6">
        <ImageG src="/logoCoruja.png" alt="Logo PET" fill={true} />
      </div>
      
      {/* Botões interativos Desktop */}
      <ul className="flex collapse md:visible md:h-4 space-x-2 md:m-10 md:mb-12">
        <li>
          <SocialButton
            href="https://www.facebook.com/petsieach"
            icon={BiLogoFacebookSquare}
            size={26}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="https://www.linkedin.com/company/pet-si-each-usp/"
            icon={BiLogoLinkedinSquare}
            size={26}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="mailto:pet.si.each@gmail.com"
            icon={BiSolidEnvelope}
            size={26}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="https://www.instagram.com/petsieach/?hl=pt-br"
            icon={BiLogoInstagramAlt}
            size={26}
            color="black"
          />
        </li>
      </ul>
      
      {/* Botões interativos Mobile */}
      <ul className="flex visible md:hidden md:h-4 space-x-2 m-2">
        <li>
          <SocialButton
            href="https://www.facebook.com/petsieach"
            icon={BiLogoFacebookSquare}
            size={20}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="https://www.linkedin.com/company/pet-si-each-usp/"
            icon={BiLogoLinkedinSquare}
            size={20}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="mailto:pet.si.each@gmail.com"
            icon={BiSolidEnvelope}
            size={20}
            color="black"
          />
        </li>
        <li>
          <SocialButton
            href="https://www.instagram.com/petsieach/?hl=pt-br"
            icon={BiLogoInstagramAlt}
            size={20}
            color="black"
          />
        </li>
      </ul>

    </footer>
  );
}
