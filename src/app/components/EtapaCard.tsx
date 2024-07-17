'use client'

import ImageG from "@/components/ImageG"
import PrimaryButton from "@/components/PrimaryButton";
import { Etapa } from "@/app/components/Etapas";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '300', subsets: ['latin'] })

export default function EtapaCard(props: Etapa) {
    let cond_props = {
        tema: props.tema,
        img: props.imagem,
        link: props.link,
    }

    if(!props.visivel) {
        cond_props.tema = "Em breve..."
        cond_props.img = "/home/staticTV.gif"
        cond_props.link = "#"
    }
    
    return (
        <div className="grid grid-cols-5 w-full rounded-lg bg-azulBX">
            <div className="col-span-1 flex items-center justify-center p-4">
                <figure className="bg-white rounded-lg">
                    <ImageG
                        className="rounded-lg"
                        src={cond_props.img}
                        alt={`Imagem da etapa ${props.numero}: ${cond_props.tema}`}
                        width={400}
                        height={400}
                    />
                </figure>
            </div>
            <header className="col-span-2 flex flex-col justify-center items-center">
                <h1 className="text-2xl mb-4">Etapa {props.numero}</h1>
                <h2 className={`text-3xl ${poppins.className}`}>{cond_props.tema}</h2>
            </header>
            <div className="col-span-2 flex justify-center items-center">
                <PrimaryButton title="Ver detalhes" onClick={() => { }} />
            </div>
        </div>
    )
}