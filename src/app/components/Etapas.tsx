import { Poppins } from "next/font/google"
import EtapaCard from "src/components/EtapaCard"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500']
})

export default function Etapas() {
    return (
        // TODO: Ajeitar todas as cores e tamanhos
        <section className="grid grid-cols-2 bg-brancoBX">
            <header>
                <h1 className="text-verdeBX text-2xl">Etapas</h1>
                <h2 className={`${poppins.className} text-black text-thin`}>Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <figure>
                    <img src="/etapas/jhonny_bravo.png" />
                </figure>
            </header>
            <aside className="grid grid-rows-5 gap-4">
                <EtapaCard 
                    num={0}
                    title=""
                    img="etapas/em_breve.png"
                    link="#"
                />
                <EtapaCard 
                    num={1}
                    title="Dream Works"
                    img="etapas/em_breve.png"
                    link="#"
                />
                <EtapaCard 
                    num={3}
                    title="Warner Bros."
                    img="etapas/em_breve.png"
                    link="#"
                />
                <EtapaCard 
                    num={3}
                    title="Disney"
                    img="etapas/em_breve.png"
                    link="#"
                />
                <EtapaCard 
                    num={4}
                    title="Estúdio PET"
                    img="etapas/em_breve.png"
                    link="#"
                />
            </aside>
        </section>
    )
}