'use client'

import ImageG from "@/components/ImageG"
import { Poppins } from 'next/font/google'
import equipes_data from '@/data/landingpage.json'
import BotaoEquipe from "./BotaoEquipe"

export default function Equipes(){
    return (
    <section className="w-auto py-12 px-16 bg-brancoBX flex flex-row justify-center padding">
        <section className="px-4 py-2 justify-center flex-row items-center">
            <section className="px-2 flex col items-center">
            <BotaoEquipe 
            nomeEquipe={equipes_data.equipes[0].nome}
            srcImage={equipes_data.equipes[0].iconPath}
            onClick={() => { }}/>
            <BotaoEquipe 
            nomeEquipe={equipes_data.equipes[1].nome}
            srcImage={equipes_data.equipes[1].iconPath}
            onClick={() => { }}/>
            </section>
        </section>

        <section className=" px-4 flex flex-col items-center justify-center">
            <h2 className="text-verdeBX text-6xl"> Equipes </h2>
            <p className=" py-4 text-pretoBX"> Conheça os competidores desse ano! </p>
            <div className="border-laranjaBX border-8 rounded-full bg-white w-72 h-72 drop-shadow">
            </div>
            <div className="drop-shadow-md bg-laranjaBX w-80 h-36 rounded-tl-[96px] rounded-br-[96px] flex flex-col items-center justify-center">
                <h3> Nome equipe </h3>
                <div className="flex flex-col items-center justify-center">
                    <p>Nome</p>
                    <p>Nome</p>
                    <p>Nome</p>
                    <p>Nome</p>
                </div>
            </div>
            <div className="bg-verdeBX text-brancoBX rounded-full px-2 drop-shadow">   12 pontos   </div>
            

        </section>
    </section>

    );

}