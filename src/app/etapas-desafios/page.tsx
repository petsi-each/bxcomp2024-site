'use client'
import etapasDesafios from '@/data/etapasDesafios.json';
import ImageG from '@/components/ImageG';
import CardDesafios from './components/CardDesafios';
import { useState } from "react";


export default function EtapasDesafios() {

    const [indice, setIndice] = useState(-1);

    const handleOnClick = (etapaIndice: number) =>{
        indice == etapaIndice ?
            setIndice(-1)
            :
            setIndice(etapaIndice)
    }

    
    return (
        <main>
            <h1 className="mx-60 mt-20 text-right text-5xl text-brancoBX"> Etapas <br></br> <span className="text-laranjaBX">&</span> Desafios</h1> {/*whitespace-pre-line não funcionou*/}
            <div className="flex items-center flex-col">
                <div className="my-16 grid grid-cols-5 gap-x-5 w-fit"> {/*TODO:no clique do botão de cada Etapa o gap está mudando*/}
                    {
                        etapasDesafios.map((etapa) => (
                            <button onClick={() => handleOnClick(etapa.etapaIndice)} disabled={etapa.estado == false} title={`Etapa ${etapa.etapaIndice}`} 
                            className={`relative size-48 rounded-3xl ${etapa.estado == true ? 'hover:ring-8 hover:ring-azulBX hover:ring-opacity-20 hover:underline hover:decoration-verdeBX hover:bg-blue-600 active:ring-8 active:ring-laranjaBX active:ring-opacity-70' : ''} ${indice == etapa.etapaIndice ? 'scale-110 shadow-sky-900 shadow-lg ' : ''} ${indice != -1 && indice != etapa.etapaIndice ? 'scale-90':''}`}> 
                             {/*procurar por uma forma mais concisa de usar hover,etc */}
                                {
                                    etapa.estado == false ?
                                        <div>
                                            <ImageG className="rounded-3xl" src="/staticTV.gif" alt="TV estática" fill={true} />
                                        </div>
                                        :
                                        <div>
                                            <ImageG className="-z-10 rounded-3xl opacity-80" src={etapa.icon} alt={etapa.altIcon} fill={true} />
                                            <h2 className="mt-28 font-poppins text-white text-2xl "><b>Etapa {etapa.etapaIndice}</b></h2> {/*TODO: o texto está sendo renderizado por baixo da imagem*/}
                                            <h3 className="-mt-1 font-poppins text-white text-base">{etapa.tema}</h3>
                                        </div>
                                }
                            </button>
                        ))
                    }
                </div>
                {
                    indice != -1 && (
                        <CardDesafios desafios={(etapasDesafios[indice]).desafios} />
                    )
                }
            </div>
        </main>
    );
}