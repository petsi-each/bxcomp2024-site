import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400' 
})

interface desafio {
    desafio: string,
    idx: number,
    enunciado: string,
    resolucao: string,
    entrada: string
    saida: string
}

export interface desafioList {
    desafios: desafio[]
}

export default function CardDesafios(props: desafioList) {
    return (
        <div className="grid grid-cols-1 gap-y-5">
            {
                props.desafios.map((desafio, idx) => (
                    <article key={desafio.idx} className="px-16 py-2 max-w-[600px] min-h-32 h-fit bg-[#FF9C46] rounded-full text-center text-pretoBX hover:transition-all hover:duration-150 hover:ring-8 hover:ring-azulBX hover:ring-opacity-20">
                        <h3 className="text-2xl">{desafio.desafio}</h3>
                        <p className={`flex items-center flex-col ${poppins.className} text-base underline`}>
                            <a href={desafio.enunciado} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Enunciado</a>
                            <a href={desafio.entrada} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Casos Teste - Entrada</a>
                            <a href={desafio.saida} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Casos Teste - Saída</a>
                            <a href={desafio.resolucao} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Exemplo de Gabarito</a>
                        </p>
                    </article>
                ))
            }
        </div>
    );
}