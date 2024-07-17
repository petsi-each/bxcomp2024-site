import React from 'react';

import { PiLinkedinLogoFill } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { PiInstagramLogoBold } from 'react-icons/pi';
import { PiFacebookLogo } from "react-icons/pi";

export default function Footer() {
    return (
    <footer className=" grid grid-cols-3 grid-rows-1 gap-3 bg-transparent relative w-full h-80 mt-10 items-end justify-between before:content-[''] before:absolute before:bg-cover before:w-full before:h-80 before:bg-[url('/waves.svg')] before:bg-no-repeat before:bg-top before:-z-10">
        
        {/* texto */}
        <h1 className="pb-9 flex-1 text-center font-sans text-black">Desenvolvido Por PET-SI 2024</h1>
        
        {/* Logo PET e BX */}
        <div className="pb-5 flex items-center justify-center" >
        <img src = "logoCoruja.svg" alt=" "/>
        </div>
        
        {/* botões interativos PS: Não coloquei o do email do PET, não achei e fiquei com preguiça de procurar no atual momento */}
        <ul className="pb-8 flex flex-row justify-center items-center ">
        <li>
                <a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer" className="flex items-center px-1">
                            <PiFacebookLogo size={26} color='black' />
                        
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer" className="flex items-center px-1">
                            <PiLinkedinLogoFill size={26} color='black' />
                        
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-1">
                            <FiMail size={26} color='black' />
                        
                </a>
            </li>
           <li>
                <a href="https://www.instagram.com/petsieach/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center px-1">
                            <PiInstagramLogoBold size={26} color='black' />
                        
                </a>
            </li>
           
        </ul>
    
    </footer>        
    );
  }
  
  