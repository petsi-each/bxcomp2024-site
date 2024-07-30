'use client'

import ImageG from "@/components/ImageG"
import { Poppins } from 'next/font/google'
import equipes_data from '@/data/landingpage.json'
import BotaoEquipe from "./BotaoEquipe"

const poppins = Poppins({weight: "300", subsets: ['latin']})

interface Equipe {
    nome: string,
    srcImage: string,
    membros: string[],
}

const equipes = equipes_data.equipes.map((equipe, index) => {
    return {
    nome: equipe.nome,
    srcImage: equipe.iconPath,
    membros: equipe.membros
    };
  });

export default function Equipes(){
    return (
    <section className="w-auto py-12 px-16 bg-brancoBX flex flex-row justify-center padding">
        <section className="px-4 py-2 justify-center flex-row items-center">
            <section className="px-2 flex col items-center">
            <BotaoEquipe 
            nomeEquipe={equipes_data.equipes[0].nome}
                <div>
                {equipes.map( (equipe, index) => {
                    return (
                    <div key={index}>
                        <BotaoEquipe nomeEquipe={equipes.nome} srcImage={equipes.srcImage}/>
                    </div>
                    )
                    })
                }
                </div>
                
            </section>
        </section>

        <section className=" px-4 flex flex-col items-center justify-center">
            <h2 className="text-verdeBX text-6xl"> Equipes </h2>
            <p className=" py-4 text-pretoBX"> Conheça os competidores desse ano! </p>
            <section className="relative">
                <div className="z-auto relative border-laranjaBX border-8 rounded-full bg-transparent w-72 h-72 drop-shadow"></div>
                <div className="-z-10 absolute bottom-16 -right-20  bg-verdeBX text-white rounded-full pl-8 pr-6 py-2 drop-shadow">   12 pontos </div>
            </section>

            <div className="z-20 -mt-16 drop-shadow-md bg-laranjaBX w-80 h-36 rounded-tl-[96px] rounded-br-[96px] flex flex-col items-center justify-center">
                <h3> Nome equipe </h3>
                <div className="flex flex-col items-center justify-center">
                    <p>Nome</p>
                    <p>Nome</p>
                    <p>Nome</p>
                    <p>Nome</p>
                </div>
            </div>
            
            

        </section>
    </section>

    );

}