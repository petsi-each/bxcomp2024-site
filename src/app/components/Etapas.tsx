"use client"

import ImageG from "@/components/ImageG"
import { Poppins } from 'next/font/google'
import etapas_data from '@/data/landingpage.json'
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from 'next/navigation'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export interface Etapa {
    numero: number;
    tema: string;
    visivel: boolean;
    imagem: string;
    link: string;
}

function EtapaCard(props: Etapa) {
    const router = useRouter()

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
        <article className="flex flex-col sm:flex-row justify-between rounded-3xl w-full bg-azulBX">
            <div className="flex items-center justify-center pt-8 sm:pt-4 sm:p-4">
                <figure className="w-32 h-32 flex justify-center items-center relative">
                    <ImageG
                        className="rounded-lg"
                        src={cond_props.img}
                        unoptimized={cond_props.img.split('.')[1] == 'gif'}
                        alt={`Imagem da etapa ${props.numero}: ${cond_props.tema}`}
                        fill={true}
                    />
                </figure>
            </div>
            <header className="flex flex-col justify-center items-center grow p-4">
                <h1 className="text-lg md:text-2xl md:mb-4">Etapa {props.numero}</h1>
                <h2 className={`text-xl md:text-3xl text-center ${poppins.className}`}>{cond_props.tema}</h2>
            </header>
            <div className="flex justify-center items-center pb-4 md:pb-0 px-4">
                <div className="w-full max-w-xs flex justify-center items-center">
                    <PrimaryButton
                        title={cond_props.texto_botao}
                        onClick={() => { router.push(cond_props.link) }}
                    />
                </div>
            </div>
        </article>
    )
}

export default function Etapas() {

    return (
        <section className="flex flex-col md:flex-row justify-center bg-brancoBX">
            <header className="m-16">
                <h1 className="text-verdeBX text-6xl mb-4">Etapas</h1>
                <h2 className={`${poppins.className} text-black text-thin`}>Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <figure className="flex justify-center min-w-24">
                    <ImageG
                        src="/home/jhonny_bravo_dancando.gif"
                        unoptimized={true}
                        alt="Jhonny Bravo"
                        width={419}
                        height={456}
                    />
                </figure>
            </header>
            <aside className="flex flex-col justify-center mx-auto w-fit md:w-full gap-4 my-4 md:mx-4">
                <EtapaCard
                    numero={etapas_data.etapas[0].numero}
                    tema={etapas_data.etapas[0].tema}
                    imagem={etapas_data.etapas[0].imagem}
                    link={etapas_data.etapas[0].link}
                    visivel={etapas_data.etapas[0].visivel}
                />
                <EtapaCard
                    numero={etapas_data.etapas[1].numero}
                    tema={etapas_data.etapas[1].tema}
                    imagem={etapas_data.etapas[1].imagem}
                    link={etapas_data.etapas[1].link}
                    visivel={etapas_data.etapas[1].visivel}
                />
                <EtapaCard
                    numero={etapas_data.etapas[2].numero}
                    tema={etapas_data.etapas[2].tema}
                    imagem={etapas_data.etapas[2].imagem}
                    link={etapas_data.etapas[2].link}
                    visivel={etapas_data.etapas[2].visivel}
                />
                <EtapaCard
                    numero={etapas_data.etapas[3].numero}
                    tema={etapas_data.etapas[3].tema}
                    imagem={etapas_data.etapas[3].imagem}
                    link={etapas_data.etapas[3].link}
                    visivel={etapas_data.etapas[3].visivel}
                />
                <EtapaCard
                    numero={etapas_data.etapas[4].numero}
                    tema={etapas_data.etapas[4].tema}
                    imagem={etapas_data.etapas[4].imagem}
                    link={etapas_data.etapas[4].link}
                    visivel={etapas_data.etapas[4].visivel}
                />
            </aside>
        </section>
    )
}
