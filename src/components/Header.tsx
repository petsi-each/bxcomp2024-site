'use client';

import { PiList, PiX } from "react-icons/pi";
import ImageG from "./ImageG";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const navLinks = [
        { title: 'Início', path: '/' },
        { title: 'Regulamento', path: '/regulamento' }, // TODO: Add path
        { title: 'Etapas & Desafios', path: '/etapas-e-desafios' }, // TODO: Add path
        { title: 'Ranking & Grupos', path: '/ranking-e-grupos' }, // TODO: Add path
        { title: 'O que é o BXComp?', path: '/o-que-e-bxcomp' }, // TODO: Add path
        { title: 'Anos Anteriores', path: '/anos-anteriores' }, // TODO: Add path
    ]

    const [openMenu, setOpenMenu] = useState(false);

    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full px-8 mt-4 flex flex-col 2xl:items-center justify-between 2xl:flex-row">
            <div className="flex  justify-between">
                <a href="/" aria-label="Ir para página inicial" className="mr-64">
                    <ImageG src="/logoBxcomp.svg" alt="Logo do BXComp 2024" width="174" height="118" />
                </a>
                <button type="button"
                    className={`${openMenu ? 'hidden' : ''} text-4xl text-brancoBX 2xl:hidden`}
                    onClick={() => setOpenMenu(true)}
                    aria-label="Abrir menu"
                >
                    <PiList />
                </button>
            </div>
            {openMenu && <div className="fixed left-0 top-0 h-screen w-full bg-brancoBX opacity-40 z-40 animate-appear 2xl:hidden" onClick={() => setOpenMenu(false)}/>}
            <nav className={`${!openMenu ? 'translate-x-full 2xl:translate-x-0' : 'translate-x-0'} transform transition-transform duration-300 ease-out z-40 bg-pretoBX p-8 flex flex-col rounded-bl-lg text-verdeBX fixed w-80 h-screen right-0 top-0 space-y-4 border-l border-b 2xl:w-max 2xl:flex-row 2xl:justify-between 2xl:space-y-0 2xl:grow 2xl:relative 2xl:bg-transparent 2xl:h-min 2xl:p-0 2xl:border-none`}>
                <button type="button"
                    className="mt-4 text-4xl text-brancoBX self-end 2xl:hidden"
                    onClick={() => setOpenMenu(false)}
                    aria-label="Fechar menu"
                >
                    <PiX/>
                </button>
                {navLinks.map(link => (
                    <a key={link.path} 
                        href={link.path} 
                        className={`border-b border-brancoBX text-2xl hover:font-bold ${pathname == link.path ? 'text-brancoBX' : ''} 2xl:text-md 2xl:border-none ${!openMenu ? 'hidden 2xl:inline-block' : ''}`}
                        >
                            {link.title}
                        </a>
                ))}
            </nav>
        </header>
    );
}