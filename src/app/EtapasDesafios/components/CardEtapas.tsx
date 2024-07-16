'use client'
import ImageG from '@/components/ImageG';
import CardDesafios from './CardDesafios';
import { desafioList } from './CardDesafios';
import { useState } from "react";

interface etapa {
    etapa: string,
    estado: boolean,
    tema: string,
    icon: string,
    desafios: desafioList 
}

interface etapaList{
    etapas: etapa[]
}

export default function CardEtapas(props : etapaList) {
    const [state, setState] = useState(false);
    return (
        <div className="grid grid-cols-5 gap-x-5">
            {
                props.etapas.map((etapa) => (
                    <button onClick={() => setState(state => !state)} title={etapa.etapa} className='flex-col justify-center size-48 rounded-3xl'>
                        <ImageG className="size-fit rounded-3xl" src="staticTV.gif" alt="TV estática" width="2" height="2" />
                        {/*if(state && {etapa.estado}) ==> carddesafios({etapa.desafios}) , <ImageG classname="etapa.icon"/>, <h2>Etapa {etapa.desafios}</h2>*/}
                        {/*if(!state)  as coisas precisariam se recolher se clicar uma segunda vez*/}
                    </button>
                ))
            }
        </div>

    );
}