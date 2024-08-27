'use client'

import { Poppins } from 'next/font/google'
import PrimaryButton from '@/components/PrimaryButton';
import ImageG from '@/components/ImageG';

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function o_que_eh_BXComp() {
  return (
    <main className="pt-40 px-16">

      <h1 className="text-6xl">
        O que é o <span className="text-laranjaBX">BXComp</span>?
      </h1>
      <p className={`${poppins.className} text-white`}>
        O <b>BXComp</b> é o tradicional Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP.
        <br />
        Neste ano, o BXCOMP está em sua 14ª edição com o tema de Desenhos animados!
      </p>
      <div className="w-full flex justify-center py-8">
        <PrimaryButton title={'Regulamento'} onClick={() => window.open("linkdoregulamento")} />
      </div>
      <div className="grid grid-cols-2 gap-4 px-28">
        <div className="flex justify-center items-center">
          <div className='size-80 relative'>
            <ImageG src={'/sobre-bx/TomJerry.png'} alt={'Tom e Jerry'} fill={true}/>
          </div>
        </div>
        <div className="flex flex-col justify-center"> 
          <h2 className="text-4xl py-4">
            Objetivos
          </h2>
          <p className={`${poppins.className} text-white`}>
          Nosso objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação. 
          <br />
          Os participantes aprendem e evoluem muito no decorrer do campeonato, o que torna o evento ainda mais satisfatório!
          </p>
          
        </div>

        <div> Texto do Phineas </div>
        <div> Foto do Phineas </div>

        <div> Foto dos Padrinhos Mágicos </div>
        <div> Texto dos Padrinhos Mágicos </div>

        <div> Texto das Meninas Superpoderosas </div>
        <div> Foto das Meninas Superpoderosas </div>
      </div>

    </main>
  );
}
