'use client'

import ImageG from "@/components/ImageG"
import PrimaryButton from "@/components/PrimaryButton";

interface EtapaCardProps {
    num: number;
    title: string;
    img: string;
    link: string;
}

export default function EtapaCard(props: EtapaCardProps) {
    return (
        <div className="grid grid-cols-5 w-full rounded-lg bg-azulBX">
            <div className="col-span-1 flex items-center justify-center p-4">
                <figure className="bg-white rounded-lg">
                    <ImageG
                        className="rounded-lg size-full"
                        src={props.img}
                        alt={`Imagem da etapa ${props.num}: ${props.title}`}
                        width={400}
                        height={400}
                    />
                </figure>
            </div>
            <header className="col-span-2 flex flex-col justify-center items-center">
                <h1>Etapa {props.num}</h1>
                <h2 className="font-poppins">{props.title}</h2>
            </header>
            <div className="col-span-2 flex justify-center items-center">
                <PrimaryButton title="Ver detalhes" onClick={() => { }} />
            </div>
        </div>
    )
}