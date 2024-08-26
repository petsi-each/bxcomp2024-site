'use client'

import ImageG from "@/components/ImageG"
import { Poppins } from 'next/font/google'
import { Lilita_One } from 'next/font/google'
import equipes_data from '@/data/landingpage.json'
import BotaoEquipe from "./BotaoEquipe"
import { useState } from "react"

const poppins = Poppins({weight: "300", subsets: ['latin']})
const lilita = Lilita_One({weight: "400", subsets: ['latin']})

export default function Equipes(){

    /* variavel usada para selecionar equipe para o botao clicado */
    const [idSelecionado, setIdSelecionado] = useState(0)
    
    return (
    <section className="py-12 sm:px-16 bg-brancoBX grid grid-cols-1 lg:grid-cols-2 justify-center padding">
    
    {/* parte que mostra os botões de todas as equipes */}
        <section className="order-2 lg:order-1 my-4 md:my-2 px-4 py-2 flex flex-wrap items-center justify-center">
            <section className="grid grid-cols-2 gap-2 sm:grid-flow-col sm:flex sm:h-fit sm:flex-wrap sm:justify-center">
                { equipes_data.equipes.map((equipe, idx) => {
                    return <BotaoEquipe key={idx} equipe={equipe} selecionado={idSelecionado==idx} onClick={()=> setIdSelecionado(idx)} />  
                })
                }

            </section>
        </section>

        <section className="order-1 lg:order-2 px-4 flex flex-col items-center justify-center">
            {/* titulo do componente e descrição da seção  */}       
            <h2 className="text-verdeBX text-6xl"> Equipes </h2>
            <p className= {`${poppins.className} p-4 text-sm text-center text-pretoBX`}> Conheça os competidores desse ano! </p>
        
            {/* circulo, imagem da equipe selecionada e folhinha que indica pontos da equipe modo desktop */}
            <section className="flex justify-center relative mx-4 my-2 h-60 w-60 sm:h-auto sm:w-auto">
                <div className="z-10 w-56 h-56 flex justify-center items-center relative border-laranjaBX border-8 rounded-full bg-white sm:w-72 sm:h-72 drop-shadow-lg"> 
                <ImageG className="" alt="" width={240} height={240} src={equipes_data.equipes[idSelecionado].iconPath} />
                </div>
                <div className=" hidden w-28 z-0 absolute sm:block bottom-20 -right-20 bg-verdeBX text-white sm:rounded-full pl-10 spr-2 py-2 drop-shadow-md"> {equipes_data.equipes[idSelecionado].pontos} {equipes_data.equipes[idSelecionado].pontos == 1 ? " ponto " : "pontos" } </div>
            </section>
            
            {/* Onda laranja de baixo do circulo que apresenta equipe e membros da equipe */}
            <div className="relative z-20 mb-8 -mt-16 pt-2 pb-6 sm:pb-4 drop-shadow-md bg-laranjaBX w-64 h-fit sm:w-80 sm:h-fit rounded-tl-[84px] rounded-br-[84px] sm:rounded-tl-[96px] sm:rounded-br-[96px] flex flex-col items-center justify-center">
                <div className="z-30 text-center right-0 -top-4 px-6 rounded-l-full block absolute sm:hidden  bg-verdeBX text-white py-2 drop-shadow-md"> {equipes_data.equipes[idSelecionado].pontos} {equipes_data.equipes[idSelecionado].pontos == 1 ? " ponto " : "pontos" } </div>
                {/* //opção 2// <div className="z-30 text-center -bottom-8 px-6 rounded-l-full rounded-r-full block absolute sm:hidden  bg-verdeBX text-white py-2 drop-shadow-md"> {equipes_data.equipes[idSelecionado].pontos} {equipes_data.equipes[idSelecionado].pontos == 1 ? " ponto " : "pontos" } </div> */}
                {/* //opção 3// <div className="z-30 text-center -top-6 left-0 px-6 rounded-l-full rounded-r-full block absolute sm:hidden  bg-verdeBX text-white py-2 drop-shadow-md"> {equipes_data.equipes[idSelecionado].pontos} {equipes_data.equipes[idSelecionado].pontos == 1 ? " ponto " : "pontos" } </div> */}

                <h3 className= {`${lilita.className} text-center break-words w-48 sm:w-60 my-1 mt-3 sm:my-2 text-md tracking-wide drop-shadow-md text-2xl font-bold`}> {equipes_data.equipes[idSelecionado].nome} </h3>
                <div className= {`${poppins.className} text-xs text-white flex flex-col items-center justify-center`}>
                    <div> {equipes_data.equipes[idSelecionado].membros.map((membro, idx) => {                       
                    return <p className="flex justify-center">{membro}</p>})} 
                    </div>
                </div>
            </div>
        
        </section>

    </section>

    );

}