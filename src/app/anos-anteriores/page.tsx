import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { PiCaretLeftFill } from "react-icons/pi";

import anosAnteriores from '@/data/anosAnteriores.json';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function AnosAnterioresPage() {
  return (
    <main className='text-center m-4 lg:m-16 2xl:m-24'>
      <h1 className='text-6xl text-laranjaBX m-8'>Edições Anteriores</h1>
      <div className={`${poppins.className} flex flex-col items-center space-y-8`}>
        <div className='space-y-4'>
          <p>O <b>BXCOMP</b> teve sua primeira edição em <b>2011</b> com o objetivo de estimular e preparar os alunos do curso para atividades
            relacionadas como olimpíadas, competições e maratonas de programação a partir de um ambiente divertido e desafiador.</p>
          <p>Desde então, o PET-SI organiza anualmente o BXCOMP com um novo tema, novos desafios e novas metodologias.</p>
          <p>São mais de 10 anos de história e, agora em <b>2024</b>, estamos na <b>14ª edição</b> do campeonato.</p>
        </div>
        <Image src='/anos-anteriores/fotosAnosAnteriores.png' alt='Três fotos de edições anteriores do BXComp. Com mais destaque, ao centro, participantes e organizadores em torno de um banner do BXComp. À esquerda, com parte da imagem atrás da central, participantes durante a competição no laboratório de informática. À direita, também com parte da imagem atrás da central, quatro membros de uma equipe vencedora segurando sacolas de prêmios.' width={818} height={360} />
        <p>Conheça um pouco dessa história e se prepare para a nova edição do BXCOMP visitando os sites das antigas edições.</p>
        <section className='space-y-8 relative'>
          <div className='absolute top-8 left-2 md:left-[279px] -z-10 bottom-0 w-0.5 bg-azulBX'></div>
          { // Cria um article para cada ano anterior
            anosAnteriores.map((ano, idx) => {
              const is_left = idx % 2 === 1; // Define se a logo deve ficar à esquerda ou à direita
              return (
              <article key={idx} className='md:flex md:items-center'>
                <div className={`flex items-center  ${is_left? '' : 'md:order-last'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full ${is_left? 'md:order-last' : ''}`}></div>
                  <figure className={`flex items-center w-64 ml-4 ${is_left ? 'md:mr-4 md:ml-0' : ''}`}>
                    <PiCaretLeftFill className={`-me-1.5 text-azulBX ${is_left ? 'md:order-last md:rotate-180 md:-ms-1.5 md:me-0' : '' }`}/>
                      <div className='bg-azulBX w-[263px] h-[76px] rounded-xl flex justify-center items-center overflow-hidden'>
                        <a href={ano.link} target='_blank' rel='noreferrer'>
                          <Image src={`/anos-anteriores/${ano.logoArquivo}`} alt={`Logo da ${ano.edicao}ª edição do BXComp`} width={204} height={45} />
                        </a>
                    </div>
                  </figure>
                </div>
                <div className={`text-right ${is_left ? 'md:ml-4 md:text-left' : 'md:mr-4'} md:w-64`}>
                  <p>{ano.ano} - {ano.edicao}ª edição</p>
                  <p className='text-xs'>{ano.tema}</p>
                </div>
              </article>
            )})
          }
        </section>
      </div>
    </main>
  );
}