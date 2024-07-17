import ImageG from "@/components/ImageG"
import EtapaCard from "@/app/components/EtapaCard"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export interface Etapa {
    numero: number;
    tema: string;
    visivel: boolean;
    imagem: string; 
    link: string;
}

export default function Etapas() {
    const etapas_data: { etapas: Etapa[] } = require('@/data/landingpage.json') 

    return (
        <section className="grid grid-cols-2 bg-brancoBX">
            <header className="m-16">
                <h1 className="text-verdeBX text-6xl mb-4">Etapas</h1>
                <h2 className={`${poppins.className} text-black text-thin`}>Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <figure>
                    <ImageG 
                        src="/home/jhonny_bravo.png" 
                        alt="Jhonny Bravo"
                        width={419}
                        height={456}
                    />
                </figure>
            </header>
            <aside className="grid grid-rows-5 gap-4 my-4 mx-4">
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