'use client'

import Image from 'next/image';
import { Poppins } from 'next/font/google'
import { Lilita_One } from 'next/font/google'
import BotaoEquipe from "./BotaoEquipe"
import { useState } from "react"

const poppins = Poppins({weight: "300", subsets: ['latin']})
const lilita = Lilita_One({weight: "400", subsets: ['latin']})

export interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface EquipesProps {
    equipes: Equipe[]
}

const Equipes: React.FC<EquipesProps> = ({equipes}) => {

    /* variavel usada para selecionar equipe para o botao clicado */
    const [idSelecionado, setIdSelecionado] = useState(0)
    const totalPontos = equipes[idSelecionado].pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const scrolltodisplayer = () => {
        const displayer = document.getElementById('display');
        if (displayer && window.innerWidth < 768) {
            displayer.scrollIntoView({behavior:'smooth', block: 'start',});
        }
    }
    
    return (
    <section className="pb-8 pt-16 sm:px-24 bg-brancoBX grid grid-cols-1 lg:grid-cols-2 justify-center padding">
    
        {/* parte que mostra os botões de todas as equipes */}
        <section className="order-2 lg:order-1 my-4 md:my-2 py-2 md:px-8 lg:px-0 flex flex-wrap items-center justify-center">
            <section className="gap-2 sm:grid-flow-col flex sm:h-fit flex-wrap items-center justify-center">
                { equipes.map((equipe, idx) => {
                    return <BotaoEquipe 
                            key={idx} 
                            equipe={equipe} 
                            selecionado={idSelecionado==idx} 
                            onClick={()=> {setIdSelecionado(idx); scrolltodisplayer();}} />  
                })
                }

            </section>
        </section>

        <section className="order-1 lg:order-2 px-4 flex flex-col items-center justify-center">
            {/* titulo do componente e descrição da seção  */}       
            <h1 id="display" className="text-verdeBX text-6xl"> Equipes </h1>
            <p className= {`${poppins.className} p-4 text-sm text-center text-pretoBX`}> Conheça os competidores deste ano! </p>
        
            {/* circulo, imagem da equipe selecionada e folhinha que indica pontos da equipe modo desktop */}
            <section className="flex justify-center relative mx-4 my-2 h-60 w-60 sm:h-auto sm:w-auto">
    
                <div className="z-10 w-56 h-56 flex justify-center items-center relative border-laranjaBX border-8 p-2 rounded-full bg-white sm:w-72 sm:h-72 drop-shadow-lg"> 
                <Image className="z-0 w-fit h-fit" alt="" width={130} height={130} src={equipes[idSelecionado].iconPath} />
                </div>
                <div className="z-30 text-center -top-4 px-6 rounded-full block absolute sm:hidden  bg-verdeBX text-white py-2 drop-shadow-md"> {totalPontos} {totalPontos == 1 ? " ponto " : "pontos" } </div>
                <div className=" hidden w-28 z-0 absolute sm:block bottom-20 -right-20 bg-verdeBX text-white sm:rounded-full pl-10 spr-2 py-2 drop-shadow-md"> {totalPontos} {totalPontos == 1 ? " ponto " : "pontos" } </div>
            </section>
            
            {/* Onda laranja de baixo do circulo que apresenta equipe e membros da equipe */}
            <div className="relative z-20 mb-8 -mt-16 pt-2 pb-6 sm:pb-4 drop-shadow-md bg-laranjaBX w-full max-w-80 h-fit md:h-52 md:w-80 rounded-tl-[96px] rounded-br-[96px] flex flex-col items-center justify-center">
                <h2 className={`${lilita.className} text-center px-2 break-words w-48 sm:w-60 my-1 mt-3 sm:my-2 text-md tracking-wide drop-shadow-md text-2xl font-bold`}> {equipes[idSelecionado].nome} </h2>
                <div className={`${poppins.className} text-center w-full max-w-[18rem] flex flex-col items-center justify-center text-sm text-white`}>
                    {equipes[idSelecionado].membros.map((membro, idx) => {
                        return (
                        <p key={idx} className="truncate w-full px-4 sm:px-0 text-center">{membro}</p>); })}
                </div>
            </div>
        
        </section>

    </section>

    );

}

export default Equipes;