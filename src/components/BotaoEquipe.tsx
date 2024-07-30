'use client'

import ImageG from "@/components/ImageG"
import equipes_data from '@/data/landingpage.json'

interface BotaoEquipeProps{
    nomeEquipe: string;
    srcImage: string;
    onClick: () => void;
}

export default function BotaoEquipe(props: BotaoEquipeProps){
    return(
        
        <button className="opacity-50 px-4 py-4 mx-1 my-2 rounded-md border border-slate-500 bg-brancoBX focus:bg-laranjaBX focus:opacity-100">
            <ImageG src={props.srcImage} width={32} height={32} alt={`ícone da equipe ${props.nomeEquipe}`}></ImageG>
            <div className="text-pretoBX pt-2">
                {props.nomeEquipe}
            </div>
        </button>

    );
}