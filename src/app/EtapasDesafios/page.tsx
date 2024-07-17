'use client'
import etapasDesafios from '@/data/etapasDesafios.json';
import ImageG from '@/components/ImageG';
import CardDesafios from './components/CardDesafios';
import { desafioList } from './components/CardDesafios';
import { useState } from "react";

interface etapa {
    etapaIndice: number,
    estado: boolean,
    tema: string,
    icon: string,
    altIcon: string,
    desafios: desafioList
}

export default function EtapasDesafios() {
    etapasDesafios as unknown as etapa[]; 
    const [indice, setIndice] = useState(-1);
    return (
        <main>
            <h1 className="px-60 py-32 text-right text-brancoBX text-6xl"> Etapas <br></br> <span className="text-laranjaBX">&</span> Desafios</h1> {/*whitespace-pre-line não funcionou*/}
            <div className="grid grid-cols-5 gap-x-5">
                {
                    etapasDesafios.map((etapa) => (
                        <button onClick={() => setIndice(etapa.etapaIndice)} disabled={etapa.estado == false} title={'Etapa ${etapa.etapaIndice'} className='flex justify-center size-48 rounded-3xl'> {/*definir função para onClick, para que que um segundo clique recolha os balões de desafios*/}
                            {
                                etapa.estado == false ?
                                    <ImageG className="size-fit rounded-3xl" src="/staticTV.gif" alt="TV estática" width="2" height="2" />
                                    :
                                    <div>
                                        <ImageG className="size-fit rounded-3xl opacity-80" src={etapa.icon} alt={etapa.altIcon} width="2" height="2" />
                                        <h2 className="mt-32 p-1.5 font-Poppins text-white text-2xl"><b>Etapa {etapa.etapaIndice}</b><br></br></h2> {/*resolver a situação do sublinhado; tem que checar se esse break aq vai do the trick*/}
                                        <h3 className="font-Poppins text-white text-base">{etapa.tema}</h3>
                                    </div>
                            }
                        </button>
                    ))
                }
            </div>
            {/*<CardDesafios desafios={(props.etapas[indice]).desafios} />*/}
        </main>
    );
}