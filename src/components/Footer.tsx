import React from 'react';
import { BiLogoFacebookSquare, BiSolidEnvelope, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface SocialButtonProps {
    href: string;
    icon: IconType;
    size: number;
    mdSize: number;
    color: string;
    className?: string;
    ariaLabel?: string;
  }

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon, size, mdSize, color, className = '', ariaLabel}) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`flex items-center ${className}`}
      >
        <div className="block md:hidden">
          <Icon size={size} color={color} />
        </div>
        <div className="hidden md:block">
          <Icon size={mdSize} color={color} />
        </div>
      </a>
    );
  };


  const Footer: React.FC = () => {
    return (
      <footer className="relative w-full h-80 pt-10 bg-transparent flex-col flex md:flex-row items-center md:items-end justify-end md:justify-between bg-[url('/waves.svg')] bg-cover bg-no-repeat bg-top">
        
        {/* Texto Desktop */}
        <h1 className="flex order-last items-center font-medium text-xs text-center text-black m-6 font-sans md:text-sm md:font-semibold md:order-first md:h-4 md:m-10 md:mb-11">
          Desenvolvido por PET-SI 2024
        </h1>
  
        {/* Logo PET e BX Desktop */}
        <div className="flex relative items-center justify-center w-24 h-8 m-2 order-first md:h-14 md:w-44 md:m-10 md:mb-6">
          <Image src="/logoCoruja.png" alt="Logo PET" fill={true} />
        </div>
        
        {/* Botões interativos */}
        <ul className="flex h-4 space-x-2 m-2 md:m-10 md:mb-12">
          <li>
            <SocialButton
              href="https://www.facebook.com/petsieach"
              icon={BiLogoFacebookSquare}
              size={20}
              mdSize={26}
              color="black"
              ariaLabel="Acessar página do Facebook do PET-SI"
            />
          </li>
          <li>
            <SocialButton
              href="https://www.linkedin.com/company/pet-si-each-usp/"
              icon={BiLogoLinkedinSquare}
              size={20}
              mdSize={26}
              color="black"
              ariaLabel="Acessar página do LinkedIn do PET-SI"
            />
          </li>
          <li>
            <SocialButton
              href="mailto:pet.si.each@gmail.com"
              icon={BiSolidEnvelope}
              size={20}
              mdSize={26}
              color="black"
              ariaLabel="Enviar email para o PET-SI" 
            />
          </li>
          <li>
            <SocialButton
              href="https://www.instagram.com/petsieach/?hl=pt-br"
              icon={BiLogoInstagramAlt}
              size={20}
              mdSize={26}
              color="black"
              ariaLabel="Acessar página do Instagram do PET-SI"
            />
          </li>
        </ul>
  
      </footer>
    );
  };
  
  export default Footer;