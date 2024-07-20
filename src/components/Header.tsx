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
        <header className="fixed top-0 left-0 w-full px-8 mt-4 flex flex-col lg:items-center justify-between lg:flex-row">
            <div className="flex  justify-between">
                <a href="/" aria-label="Ir para página inicial">
                    <ImageG src="/logoBxcomp.svg" alt="Logo do BXComp 2024" width="142" height="96" />
                </a>
                <button type="button"
                    className={`${openMenu ? 'hidden' : ''} text-4xl text-brancoBX lg:hidden`}
                    onClick={() => setOpenMenu(true)}
                    arial-label="Abrir menu"
                >
                    <PiList />
                </button>
            </div>
            {openMenu && <div className="fixed left-0 top-0 h-screen w-full bg-brancoBX opacity-40 z-0 animate-appear lg:hidden" />}
            <nav className={`${!openMenu ? 'translate-x-full lg:translate-x-0 lg:inline-block' : 'translate-x-0'} transform transition-transform duration-300 ease-out z-10 bg-pretoBX p-8 flex flex-col rounded-bl-lg text-verdeBX fixed w-80 h-screen right-0 top-0 space-y-4 border-l border-b lg:space-x-8 lg:justify-end lg:static lg:flex-row lg:bg-transparent lg:h-min lg:w-max lg:border-none`}>
                <button type="button"
                    className="mt-4 text-4xl text-brancoBX self-end lg:hidden"
                    onClick={() => setOpenMenu(false)}
                    aria-label="Fechar menu"
                >
                    <PiX/>
                </button>
                {navLinks.map(link => (
                    <a key={link.path} href={link.path} className={`border-b border-brancoBX text-2xl hover:font-bold ${pathname == link.path ? 'text-brancoBX' : ''} lg:text-sm lg:border-none`}>{link.title}</a>
                ))}
            </nav>
        </header>
    );
}