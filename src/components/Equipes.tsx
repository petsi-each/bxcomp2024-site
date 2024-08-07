'use client'

import ImageG from "@/components/ImageG"
import { Poppins } from 'next/font/google'
import { Lilita_One } from 'next/font/google'
import equipes_data from '@/data/landingpage.json'
import BotaoEquipe from "./BotaoEquipe"
import { MouseEvent, useState } from "react"

const poppins = Poppins({weight: "300", subsets: ['latin']})

const lilita = Lilita_One({weight: "400", subsets: ['latin']})

/* interface Equipe {
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
*/

export default function Equipes(){
    const [idSelecionado, setIdSelecionado] = useState(0)
    
    return (
    <section className="py-12 px-16 bg-brancoBX grid grid-cols-1 md:grid-cols-2 justify-center padding">
        <section className="px-4 py-2 flex flex-wrap items-center justify-center ">
            <section className="h-fit flex flex-wrap justify-center">
                { equipes_data.equipes.map((equipe, idx) => {
                    return <BotaoEquipe key={idx} equipe={equipe} selecionado={idSelecionado==idx} onClick={()=> setIdSelecionado(idx)} />  
                })
                }

            </section>
        </section>

        <section className=" px-4 flex flex-col items-center justify-center">
            <h2 className="text-verdeBX text-6xl"> Equipes </h2>
            <p className= {`${poppins.className} py-4 text-sm text-pretoBX`}> Conheça os competidores desse ano! </p>

            <section className=" relative">
                <div className="z-10 flex justify-center items-center relative border-laranjaBX border-8 rounded-full bg-white w-72 h-72 drop-shadow-lg"> 
                <ImageG className="" alt="ícone da equipe selecionada" width={240} height={240} src={equipes_data.equipes[idSelecionado].iconPath} />
                </div>
                <div className="z-0 absolute bottom-20 -right-20  bg-verdeBX text-white rounded-full pl-8 pr-6 py-2 drop-shadow-md">   12 pontos </div>
            </section>
            
            <div className="z-20 -mt-16 drop-shadow-md bg-laranjaBX w-80 h-36 rounded-tl-[96px] rounded-br-[96px] flex flex-col items-center justify-center">
                <h3 className= {`${lilita.className} my-2 tracking-wide drop-shadow-md text-3xl font-bold`}> {equipes_data.equipes[idSelecionado].nome} </h3>
                <div className= {`${poppins.className} text-xs text-white flex flex-col items-center justify-center`}>
                    <div> {equipes_data.equipes[idSelecionado].membros.map((membro, idx) => {                       
                    return <p className="flex justify-center">{membro}</p>})} </div>
                </div>
            </div>

        </section>
    </section>

    );

}