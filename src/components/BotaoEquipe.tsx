'use client'

import ImageG from "@/components/ImageG"
import { MouseEventHandler } from "react";

interface ObjEquipe{
    nome: string;
    membros: string[];
    pontos: number;
    iconPath: string;
}

interface BotaoEquipeProps{
    equipe: ObjEquipe,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEquipe(props: BotaoEquipeProps){
    return(
        
        <button aria-label={`mostrar equipe ${props.equipe.nome}`} onClick={props.onClick} className={`flex flex-col items-center justify-center w-20 py-2 px-2 h-26 mx-1 my-2 rounded-md border border-slate-500
         ${props.selecionado ? 'bg-laranjaBX' : 'opacity-50 bg-brancoBX  hover:bg-zinc-300 hover:opacity-75  '}`}>
            <ImageG className="w-16" src={props.equipe.iconPath} width={60} height={60} alt=""></ImageG>
        <p className="w-16 truncate text-center text-pretoBX p-1"> {props.equipe.nome} </p>
        </button>

    );
}