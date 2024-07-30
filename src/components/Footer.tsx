import React from 'react';

import { BiLogoFacebookSquare, BiSolidEnvelope, BiLogoLinkedinSquare, BiLogoInstagramAlt} from "react-icons/bi";
import ImageG from './ImageG';

export default function Footer() {
    return (
        <footer className="relative w-full h-80 pt-10 bg-transparent flex-col flex md:flex-row items-center md:items-end justify-end md:justify-between bg-[url('/waves.svg')] bg-cover bg-no-repeat bg-top" >
            
            {/* Texto Desktop*/}
            <h1 className="flex collapse md:visible md:h-4 items-center text-center font-sans font-semibold text-black m-5 md:m-10">Desenvolvido por PET-SI 2024</h1>
            
            {/* Logo PET e BX Desktop*/}
            <div className="flex collapse md:visible md:h-4 items-center justify-center md:m-10">
                <ImageG src="/logoCoruja.png" alt="Logo PET" width="140"
                height="4"
                />
            </div>
            
            {/* Botões interativos Desktop*/}
            <ul className="flex collapse md:visible md:h-4 space-x-2 md:m-11">
                <li>
                    <a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoFacebookSquare size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoLinkedinSquare size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="mailto:pet.si.each@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiSolidEnvelope size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/petsieach/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoInstagramAlt  size={26} color='black' />
                    </a>
                </li>
            </ul>


             {/* Logo PET e BX mobile*/}
             <div className="flex items-center visible md:hidden justify-center m-2">
                <ImageG src="/logoCoruja.png" alt="Logo PET" width="100"
                height="4"
                />
            </div>
            
             {/* Botões interativos Mobile*/}
             <ul className="flex visible md:hidden md:h-4 space-x-2 m-2">
                <li>
                    <a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoFacebookSquare size={20} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoLinkedinSquare size={20} color='black' />
                    </a>
                </li>
                <li>
                    <a href="mailto:pet.si.each@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiSolidEnvelope size={20} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/petsieach/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoInstagramAlt  size={20} color='black' />
                    </a>
                </li>
            </ul>


            {/* Texto Mobile*/}
            <h1 className="flex md:hidden items-center text-center font-medium font-sans text-xs text-black m-5 md:m-10">Desenvolvido por PET-SI 2024</h1>
        
        </footer>
    );
}
