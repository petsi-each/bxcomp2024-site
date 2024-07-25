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
        
        <button className="bg-brancoBX focus:bg-laranjaBX">
            <div>
                {props.nomeEquipe}
            </div>
            <ImageG src={props.srcImage} width={32} height={32} alt={`ícone da equipe ${props.nomeEquipe}`}></ImageG>
        </button>

    );
}