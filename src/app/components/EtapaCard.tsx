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
        texto_botao: "Ver detalhes"
    }

    if (!props.visivel) {
        cond_props.tema = "Em breve..."
        cond_props.img = "/home/staticTV.gif"
        cond_props.link = "#"
        cond_props.texto_botao = "Em breve..."
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between rounded-lg w-full bg-azulBX">
            <figure className="flex items-center justify-center p-4">
                <ImageG
                    className="w-1/2 rounded-lg"
                    src={cond_props.img}
                    unoptimized={cond_props.img.split('.')[1] == 'gif' ? true : false}
                    alt={`Imagem da etapa ${props.numero}: ${cond_props.tema}`}
                    width={400}
                    height={400}
                />
            </figure>
            <header className="flex flex-col justify-center items-center grow p-4 mx-4">
                <h1 className="text-2xl mb-4">Etapa {props.numero}</h1>
                <h2 className={`text-3xl text-center ${poppins.className}`}>{cond_props.tema}</h2>
            </header>
            <div className="flex justify-center items-center pb-4 md:pb-0 px-4">
                <div className="w-full max-w-xs flex justify-center items-center">
                    <PrimaryButton 
                        title={cond_props.texto_botao} 
                        onClick={() => { }} 
                    />
                </div>
            </div>
        </div>
    )
}