import { getFileFromPublic } from '@/lib/Files'

export default function Regulamento() {

  return (
    <main className='flex flex-col items-center justify-center min-h-screen pt-12'>
      
        <h1 className='text-laranjaBX text-6xl md:text-7xl p-16'>Regulamento</h1>

        <p>Última atualização em: 12/06/2024</p>

        <p className="p-12"> Iframe </p>

        <ul className="flex flex-col items-center">
            <li>Publicado em 12/06/2024 </li>
            <li>Atualizado em 17/06/2024</li>
        </ul>
        
    </main>
  );
}
