'use client'

import { Poppins } from 'next/font/google'
import PrimaryButton from '@/components/PrimaryButton';
import ImageG from '@/components/ImageG';

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function o_que_eh_BXComp() {
  return (

    <main className="py-40 px-16">

		

		<div className="px-36">
			<h1 className="text-6xl py-8">
				O que é o <span className="text-laranjaBX">BXComp</span>?
			</h1>

			<p className={`${poppins.className} text-white`}>
				O <b>BXComp</b> é o tradicional Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP.
				<br />
				
			</p>

			<p className={`${poppins.className} text-white py-4`}>
				Neste ano, o BXCOMP está em sua 14ª edição com o <b>tema</b> de <b>Desenhos animados</b>!
			</p>
		</div>  

		<div className="w-full flex justify-center py-8">
			<PrimaryButton title={'Regulamento'} onClick={() => window.open("linkdoregulamento")} />
		</div>

		<div className="grid grid-cols-2 gap-4 px-36">

			<div className="flex justify-center items-center">
				<div className='size-80 relative'>
				<ImageG className="object-contain" src={'/sobre-bx/TomJerry.png'} alt={'Tom e Jerry'} fill={true}/>
				</div>
			</div>

			<div className="flex flex-col justify-center"> 

				<h2 className="text-4xl py-4">Objetivos</h2>

				<p className={`${poppins.className} text-white`}>
				Nosso objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação. 
				<br/>
				Os participantes aprendem e evoluem muito no decorrer do campeonato, o que torna o evento ainda mais satisfatório!
				</p>
				
			</div>

			<div className='flex flex-col justify-center'>
				<h2 className="text-4xl py-4">Formato</h2>
				<p className={`${poppins.className} text-white`}>O campeonato acontece em 5 etapas presenciais nos laboratórios da EACH.</p>
			</div>

			<div className="flex justify-center items-center">
				<div className='size-80 relative'>
				<ImageG className="object-contain" src={'/sobre-bx/phineas.png'} alt={'Phineas'} fill={true}/>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<div className='size-80 relative'>
				<ImageG className="object-contain" src={'/sobre-bx/padrinhos.png'} alt={'Padrinhos mágicos'} fill={true}/>
				</div>
			</div>
			<div className='flex flex-col justify-center'>
				<h2 className="text-4xl py-4">Organização</h2>
				<p className={`${poppins.className} text-white`}>O BXComp é um projeto organizado pelo PET-SI (Programa de Educação Tutorial - Sistemas de Informação) da EACH.<br/>
				O PET é um programa do Governo Federal subordinado ao Ministério da Educação,	cujo objetivo é realizar projetos para os três pilares da graduação: ensino, pesquisa e extensão. Acompanhe o PET para saber de suas outras iniciativas!
				</p>
			</div>

			<div className='flex flex-col justify-center'>
				<h2 className="text-4xl py-4">Outras competições</h2>
				
				<ul className={`${poppins.className} text-white list-disc`}>
					<li className='pb-4'><b>Olimpíada Brasileira de Informática (OBI):</b> Promovida pela Sociedade Brasileira de Computação (SBC). Veja mais detalhes em olimpiada.ic.unicamp.br</li>
					<li className='pb-4'><b>Maratona SBC de Programação:</b> Promovida pela Sociedade Brasileira de Computação (SBC), eliminatória para o	International Collegiate Programming Contest. Veja mais em maratona.sbc.org.br.</li>
					<li className='pb-4'><b>International Collegiate Programming Contest (ICPC):</b>  Também conhecida como “A Batalha dos Cérebros”. Veja mais em icpc.baylor.edu.</li>
				</ul>
			</div>

			<div className="flex justify-center items-center">
				<div className='size-80 relative'>
				<ImageG className="object-contain" src={'/sobre-bx/meninas-superpoderosas.png'} alt={'Meninas Superpoderoas'} fill={true}/>
				</div>
			</div>
      </div>

    </main>
  );
}
