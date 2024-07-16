import ImageG from "@/components/ImageG"
import EtapaCard from "@/app/components/EtapaCard"

export default function Etapas() {
    return (
        <section className="grid grid-cols-2 bg-brancoBX">
            <header className="m-16">
                <h1 className="text-verdeBX text-6xl mb-4">Etapas</h1>
                <h2 className="font-poppins text-black text-thin">Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <figure>
                    <ImageG 
                        src="/etapas/jhonny_bravo.png" 
                        alt="Jhonny Bravo"
                    />
                </figure>
            </header>
            <aside className="grid grid-rows-5 gap-4 my-4 mx-4">
                <EtapaCard 
                    num={0}
                    title="Nickelodeon"
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
                    title="Estúdios PET"
                    img="etapas/em_breve.png"
                    link="#"
                />
            </aside>
        </section>
    )
}