'use client'

import ImageG from "@/components/ImageG"
import equipes_data from '@/data/landingpage.json'
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
        
        <button onClick={props.onClick} className={`w-20 h-28 px-4 py-4 mx-1 my-2 rounded-md border border-slate-500
         ${props.selecionado ? 'bg-laranjaBX' : 'opacity-50 bg-brancoBX'}`}>
            <ImageG src={props.equipe.iconPath} width={42} height={42} alt={`ícone da equipe ${props.equipe.nome}`}></ImageG>
            <div className="text-pretoBX pt-2">
                {props.equipe.nome}
            </div>
        </button>

    );
}