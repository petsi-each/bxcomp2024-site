'use client';

import { PiList, PiX } from "react-icons/pi";
import ImageG from "./ImageG";
import { useState } from "react";

export default function Header() {
    const navLinks = [
        { title: 'Início', path: '/' },
        { title: 'Regulamento', path: '/' }, // TODO: Add path
        { title: 'Etapas & Desafios', path: '/' }, // TODO: Add path
        { title: 'Ranking & Grupos', path: '/' }, // TODO: Add path
        { title: 'O que é o BXComp?', path: '/' }, // TODO: Add path
        { title: 'Anos Anteriores', path: '/' }, // TODO: Add path
    ]

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="px-8 m-4 flex flex-col lg:items-center justify-between lg:flex-row">
            <div className="flex justify-between">
                <a href="/">
                    <ImageG src="/logoBxcomp.svg" alt="Logo do BXComp 2024" width="142" height="96" />
                </a>
                <button type="button" className={`${openMenu ? 'hidden' : ''} text-4xl text-brancoBX lg:hidden`} onClick={() => setOpenMenu(true)}>
                    <PiList />
                </button>
            </div>
            {openMenu && <div className="absolute left-0 top-0 h-screen w-full bg-brancoBX opacity-40 z-0" />}
            <nav className={`${!openMenu ? 'hidden lg:inline-block' : ''} z-10 bg-pretoBX p-8 flex flex-col rounded-bl-lg text-verdeBX absolute w-80 h-screen right-0 top-0 space-y-4 border-l border-b lg:space-x-8 lg:justify-end lg:static lg:flex-row lg:bg-transparent lg:h-min lg:w-max lg:border-none`}>
                <button type="button" className="text-4xl text-brancoBX self-end lg:hidden" onClick={() => setOpenMenu(false)}>
                    <PiX/>
                </button>
                {navLinks.map(link => (
                    <a key={link.path} href={link.path} className="border-b border-brancoBX text-2xl lg:text-sm lg:border-none">{link.title}</a>
                ))}
            </nav>
        </header>
    );
}