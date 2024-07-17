'use client'

import ImageG from "@/components/ImageG"
import PrimaryButton from "@/components/PrimaryButton";

interface EtapaCardProps {
    num: number;
    title: string;
    img: string;
    link: string;
    visible: boolean;
}

export default function EtapaCard(props: EtapaCardProps) {
    let cond_props = {
        title: props.title,
        img: props.img,
        link: props.link,
    }

    if(!props.visible) {
        cond_props.title = "Em breve..."
        cond_props.img = "/etapas/em_breve.png"
        cond_props.link = "#"
    }
    
    return (
        <div className="grid grid-cols-5 w-full rounded-lg bg-azulBX">
            <div className="col-span-1 flex items-center justify-center p-4">
                <figure className="bg-white rounded-lg">
                    <ImageG
                        className="rounded-lg"
                        src={cond_props.img}
                        alt={`Imagem da etapa ${props.num}: ${cond_props.title}`}
                        width={400}
                        height={400}
                    />
                </figure>
            </div>
            <header className="col-span-2 flex flex-col justify-center items-center">
                <h1>Etapa {props.num}</h1>
                <h2 className="font-poppins">{cond_props.title}</h2>
            </header>
            <div className="col-span-2 flex justify-center items-center">
                <PrimaryButton title="Ver detalhes" onClick={() => { }} />
            </div>
        </div>
    )
}