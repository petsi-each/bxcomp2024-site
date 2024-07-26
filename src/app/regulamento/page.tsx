import { getFileFromPublic } from '@/lib/Files'
import { Poppins } from 'next/font/google'

import regulamento from '@/data/regulamento.json';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
  });

export default function Regulamento() {

    const datas = regulamento.modificacoes.map(mod => {
        const [day, month, year] = mod.data.split('/').map(Number);
        return new Date(year, month - 1, day); 
    });
    const latestDate = new Date(Math.max(...datas.map(data => data.getTime())));

  return (
    <main className='flex flex-col items-center justify-center min-h-screen pt-12'>
      
        <h1 className='text-laranjaBX text-6xl md:text-7xl p-12'>Regulamento</h1>

        <p className={`${poppins.className}`}><b>Última atualização em:</b> {latestDate.toLocaleDateString()}</p>

        <iframe 
                src={getFileFromPublic(regulamento.arquivo)}
                title="Regulamento" 
                className="px-6 sm:px-16 py-4 w-full h-[36rem] lg:h-[64rem]"
                > 
        </iframe> 

        <ul className={`flex flex-col items-center ${poppins.className}`}>
            {
                regulamento.modificacoes.map((atualizacao,idx) => {
                    return <li key={idx}><b>{atualizacao.verbo_tipo}</b> em {atualizacao.data}</li>
                })
            }
            
        </ul>
        
    </main>
  );
}
