import { Poppins } from 'next/font/google'

import regulamento from '@/data/regulamento.json';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function Regulamento() {

    const datas = regulamento.modificacoes.map(mod => {
        const [day, month, year] = mod.data.split('/').map(Number);
        return new Date(year, month - 1, day);
    });
    const latestDate = new Date(Math.max(...datas.map(data => data.getTime())));

    return (
        <main className='text-center'>

            <h1 className='text-laranjaBX text-6xl md:text-6xl py-12'>Regulamento</h1>

            <p className={`${poppins.className}`}><b>Última atualização em:</b> {latestDate.toLocaleDateString('pt-BR')}</p>

            <div className="w-full flex items-center justify-center px-4">
            <iframe
                src={regulamento.arquivo}
                title="Regulamento"
                className="py-4 w-full max-w-[50rem] h-[36rem] lg:h-[50rem]"
            >
            </iframe>
            </div>
            <ul className={`flex flex-col items-center ${poppins.className}`}>
                {
                    regulamento.modificacoes.map((atualizacao, idx) => {
                        return <li key={idx}><b>{atualizacao.verbo_tipo}</b> em: {atualizacao.data}</li>
                    })
                }

            </ul>

        </main>
    );
}
