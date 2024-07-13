import { FiExternalLink } from "react-icons/fi";

interface EtapaCardProps {
    num: number;
    title: string;
    img: string;
    link: string;
}

function EtapaCard(props: EtapaCardProps) {
    return (
        <div className="grid grid-cols-5 w-full bg-blue-500">
            <figure className="col-span-1">
                <img src={props.img}/>
            </figure>
            <header className="col-span-2">
                <h1>Etapa {props.num}</h1>
                <h2>{props.title}</h2>
            </header>
            <a className="col-span-2 flex flex-row" href="props.link">
                <FiExternalLink />
                Ver detalhes
            </a>
        </div>
    )
}

export default function Etapas() {
    return (
        // TODO: Ajeitar todas as cores e tamanhos
        <section className="grid grid-cols-2">
            <header>
                <h1 className="text-green-500 text-2xl">ETAPAS</h1>
                <h2 className="text-md">Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!</h2>
                <a>*jhonny bravo img*</a>
            </header>
            <aside>
                <EtapaCard 
                    num={0}
                    title="Nickelodeon"
                    img="https://via.placeholder.com/150"
                    link="#"
                />
                <EtapaCard 
                    num={1}
                    title="Dream Works"
                    img="https://via.placeholder.com/150"
                    link="#"
                />
                <EtapaCard 
                    num={3}
                    title="Warner Bros."
                    img="https://via.placeholder.com/150"
                    link="#"
                />
                <EtapaCard 
                    num={3}
                    title="Disney"
                    img="https://via.placeholder.com/150"
                    link="#"
                />
                <EtapaCard 
                    num={4}
                    title="Estúdio PET"
                    img="https://via.placeholder.com/150"
                    link="#"
                />
            </aside>
        </section>
    )
}