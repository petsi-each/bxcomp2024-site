import { FiExternalLink } from "react-icons/fi";

interface EtapaCardProps {
    num: number;
    title: string;
    img: string;
    link: string;
}

export default function EtapaCard(props: EtapaCardProps) {
    return (
        <div className="grid grid-cols-5 w-full rounded-lg bg-azulBX">
            <figure className="col-span-1 flex items-center justify-center bg-white rounded-lg">
                <img 
                    className="rounded-lg size-full" 
                    src={props.img}
                />
            </figure>
            <header className="col-span-2 flex flex-col justify-center items-center">
                <h1>Etapa {props.num}</h1>
                <h2>{props.title}</h2>
            </header>
            <a className="col-span-2 flex flex-row items-center" href={props.link}>
                <FiExternalLink />
                Ver detalhes
            </a>
        </div>
    )
}