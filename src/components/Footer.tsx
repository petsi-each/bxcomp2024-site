import React from 'react';


export default function Footer() {
    return (
    <footer className="bg-transparent relative flex flex-row flex-nowrap w-full h-80 mt-10 items-end justify-between before:content-[''] before:absolute before:bg-cover before:w-full before:h-80 before:bg-[url('/waves.svg')] before:bg-no-repeat before:bg-top before:-z-10">
        <h1 className="flex-1 text-center font-sans text-black">Desenvolvido Por PET-SI 2024</h1>
        
        <img src = "logoCoruja.svg" alt=" "/>
        
        <ul className="flex-1 justify-center flex-row text-center">
           <i>Facebook</i>
           <i>Linkedind</i>
           <i>email</i>
           <i >Instagram</i>
           
        </ul>
    
    </footer>        
    );
  }
  
  