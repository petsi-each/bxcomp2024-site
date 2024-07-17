
interface desafio {
    desafio: string,
    enunciado: string,
    resolucao: string,
    testes: string
}

export interface desafioList {
    desafios: desafio[]
}

export default function CardDesafios(props: desafioList) {
    return (
        <div className="grid grid-cols-1 gap-y-8 py-32">
            {
                props.desafios.map((desafio) => (
                    <article className="flex-col w-[500px] h-28 bg-[#FBF3AD] rounded-e-full text-center text-pretoBX">
                        <h3 className="text-2xl">{desafio.desafio}</h3>
                        <p className="font-Poppins text-base">
                            <a href={desafio.enunciado} target="_blank">Enunciado</a>
                            <a href={desafio.testes} target="_blank">Casos Teste</a>
                            <a href={desafio.resolucao} target="_blank">Exemplo de Gabarito</a>
                        </p>
                    </article>
                ))
            }
        </div>
    );
}