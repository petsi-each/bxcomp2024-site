import etapasDesafios from '../../../etapasDesafios.json';
import CardEtapas from './CardEtapas';

export default function EtapasDesafios() {
    return (
        <main>
            {/*não tenho certeza se é um erro deixar o título aqui*/}
            <h1 className="px-60 py-32 text-right text-brancoBX text-6xl"> Etapas <br></br> <span className="text-laranjaBX">&</span> Desafios</h1> {/*whitespace-pre-line não funcionou*/}
            <CardEtapas etapas={etapasDesafios} />
        </main>
    );
}