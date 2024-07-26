
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
        <div className="mb-20 grid grid-cols-1 gap-y-8">
            {
                props.desafios.map((desafio) => (
                    <article className="p-2 w-[600px] h-32 bg-[#FF9C46] rounded-full text-center text-pretoBX hover:ring-8 hover:ring-azulBX hover:ring-opacity-20">
                        <h3 className="text-2xl">{desafio.desafio}</h3>
                        <p className="flex flex-col font-poppins text-base underline">
                            <a href={desafio.enunciado} target="_blank" className="hover:font-extrabold hover:text-white">Enunciado</a>
                            <a href={desafio.testes} target="_blank" className="hover:font-extrabold hover:text-white">Casos Teste</a>
                            <a href={desafio.resolucao} target="_blank" className="hover:font-extrabold hover:text-white">Exemplo de Gabarito</a>
                        </p>
                    </article>
                ))
            }
        </div>
    );
}