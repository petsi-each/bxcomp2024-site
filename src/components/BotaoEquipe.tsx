'use client'

import Image from "next/image";
import { MouseEventHandler } from "react";

interface ObjEquipe{
    nome: string;
    membros: string[];
    pontos: number[];
    iconPath: string;
}

interface BotaoEquipeProps{
    equipe: ObjEquipe,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEquipe(props: BotaoEquipeProps){
    return(

        <button aria-label={`mostrar equipe ${props.equipe.nome}`} onClick={props.onClick} className={`flex flex-col items-center justify-center w-20 2xl:w-28 py-2 px-2 h-24 2xl:h-32 mx-1 my-2 rounded-md border border-slate-500 ${props.selecionado ? 'bg-laranjaBX' : 'opacity-50 bg-brancoBX  hover:bg-zinc-300 hover:opacity-75  '}`}>
            <div className="relative w-20 2xl:w-28 h-24 2xl:h-32">
                <Image className="object-contain" src={props.equipe.iconPath} fill={true} alt=""></ImageG>
            </div>
            <p className="w-16 truncate text-xs text-center text-pretoBX p-1"> {props.equipe.nome} </p>

        </button>

    );
}