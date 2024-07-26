import { getFileFromPublic } from '@/lib/Files'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
  });

export default function Regulamento() {

  return (
    <main className='flex flex-col items-center justify-center min-h-screen pt-12'>
      
        <h1 className='text-laranjaBX text-6xl md:text-7xl p-16'>Regulamento</h1>

        <p className={`${poppins.className}`}><b>Última atualização em:</b> 12/06/2024</p>

        <p className="p-12"> Iframe </p>

        <ul className={`flex flex-col items-center ${poppins.className}`}>
            <li><b>Publicado</b> em 12/06/2024 </li>
            <li><b>Atualizado</b> em 17/06/2024</li>
        </ul>
        
    </main>
  );
}
