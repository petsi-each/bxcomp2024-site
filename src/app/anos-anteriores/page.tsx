import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function AnosAnterioresPage() {
  return (
    <main className='text-center m-4'>
      <h1 className='text-6xl text-laranjaBX m-8'>Edições Anteriores</h1>
      <div className={`${poppins.className} space-y-8`}>
        <div className='space-y-4'>
          <p>O <b>BXCOMP</b> teve sua primeira edição em <b>2011</b> com o objetivo de estimular e preparar os alunos do curso para atividades
            relacionadas como olimpíadas, competições e maratonas de programação a partir de um ambiente divertido e desafiador.</p>
          <p>Desde então, o PET-SI organiza anualmente o BXCOMP com um novo tema, novos desafios e novas metodologias.</p>
          <p>São mais de 10 anos de história e, agora em <b>2024</b>, estamos na <b>14ª edição</b> do campeonato.</p>
        </div>
        <Image src='/anos-anteriores/fotosAnosAnteriores.png' alt='Três fotos de edições anteriores do BXComp. Com mais destaque, ao centro, participantes e organizadores em torno de um banner do BXComp. À esquerda, com parte da imagem atrás da central, participantes durante a competição no laboratório de informática. À direita, também com parte da imagem atrás da central, quatro membros de uma equipe vencedora segurando sacolas de prêmios.' width={818} height={360} />
        <p>Conheça um pouco dessa história e se prepare para a nova edição do BXCOMP visitando os sites das antigas edições.</p>
      </div>
    </main>
  );
}