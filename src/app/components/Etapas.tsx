import ImageG from "@/components/ImageG"
import EtapaCard from "@/app/components/EtapaCard"

interface Etapa {
    numero: number;
    tema: string;
    visivel: boolean;
    imagem: string; 
    link: string;
}

export default function Etapas() {
    const etapas_data: { etapas: Etapa[] } = require('@/data/etapas.json') 

    return (
        <section className="grid grid-cols-2 bg-brancoBX">
            <header className="m-16">
                <h1 className="text-verdeBX text-6xl mb-4">Etapas</h1>
                <h2 className="font-poppins text-black text-thin">Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <figure>
                    <ImageG 
                        src="/etapas/jhonny_bravo.png" 
                        alt="Jhonny Bravo"
                        width={419}
                        height={456}
                    />
                </figure>
            </header>
            <aside className="grid grid-rows-5 gap-4 my-4 mx-4">
                <EtapaCard 
                    num={etapas_data.etapas[0].numero}
                    title={etapas_data.etapas[0].tema}
                    img={etapas_data.etapas[0].imagem}
                    link={etapas_data.etapas[0].link}
                    visible={etapas_data.etapas[0].visivel}
                />
                <EtapaCard
                    num={etapas_data.etapas[1].numero}
                    title={etapas_data.etapas[1].tema}
                    img={etapas_data.etapas[1].imagem}
                    link={etapas_data.etapas[1].link}
                    visible={etapas_data.etapas[1].visivel}
                />
                <EtapaCard
                    num={etapas_data.etapas[2].numero}
                    title={etapas_data.etapas[2].tema}
                    img={etapas_data.etapas[2].imagem}
                    link={etapas_data.etapas[2].link}
                    visible={etapas_data.etapas[2].visivel}
                />
                <EtapaCard
                    num={etapas_data.etapas[3].numero}
                    title={etapas_data.etapas[3].tema}
                    img={etapas_data.etapas[3].imagem}
                    link={etapas_data.etapas[3].link}
                    visible={etapas_data.etapas[3].visivel}
                />
                <EtapaCard
                    num={etapas_data.etapas[4].numero}
                    title={etapas_data.etapas[4].tema}
                    img={etapas_data.etapas[4].imagem}
                    link={etapas_data.etapas[4].link}
                    visible={etapas_data.etapas[4].visivel}
                />
            </aside>
        </section>
    )
}