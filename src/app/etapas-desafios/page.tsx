'use client'
import etapasDesafios from '@/data/etapasDesafios.json';
import ImageG from '@/components/ImageG';
import CardDesafios from './components/CardDesafios';
import { useState } from "react";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

export default function EtapasDesafios() {

    const [indice, setIndice] = useState(-1); 

    const handleOnClick = (etapaIndice: number) => {
        if (indice == etapaIndice){
            setIndice(-1) //garante que o segundo clique em um card selecionado recolha os CardDesafios
        } else {
            setIndice(etapaIndice)
            setTimeout(() => { 
                const scroll = document.getElementById('scrollDestiny');
                scroll?.scrollIntoView({behavior:'smooth'});
            }, 0);
        }
    }

    return (
        <main>
            <h1 className="mx-16 sm:mx-28 md:mx-36 lg:mx-48 xl:mx-60 mt-20 mb-8 text-right text-5xl text-brancoBX"> Etapas <br></br> <span className="text-laranjaBX">&</span> Desafios</h1> 
            <div className="flex items-center flex-col">
                <section className="mx-10 my-8 flex flex-wrap justify-center gap-x-7 gap-y-7">
                    {
                        etapasDesafios.map((etapa) => (
                            //o clique só é viável para as etapas liberadas, com isso os hovers, etc, também só devem ser aplicados aos Cards cujas etapas já foram liberadas, em caso contrário nada deve ser feito
                            <button onClick={() => handleOnClick(etapa.etapaIndice)} disabled={etapa.estado == false} title={`Etapa ${etapa.etapaIndice}`} className={`relative size-44 rounded-3xl ${etapa.estado == true ? 'hover:transition-all hover:duration-150 hover:underline hover:underline-offset-4 hover:decoration-verdeBX hover:ring-8 hover:ring-azulBX hover:ring-opacity-20 hover:bg-blue-600 hover:bg-opacity-20 active:ring-8 active:ring-laranjaBX active:ring-opacity-70' : ''}  ${indice == etapa.etapaIndice ? 'scale-[1.13] shadow-sky-900 shadow-lg ' : ''}`}>
                                {
                                    etapa.estado == false ? //caso a etapa ainda não tenha ocorrido:
                                        <div> 
                                            <ImageG className="rounded-3xl" src="/staticTV.gif" alt="TV estática" fill={true} /> 
                                        </div>
                                        : //caso contrário (etapa.estado==true):
                                        <div>
                                            <ImageG className="-z-10 rounded-3xl opacity-[0.95]" src={etapa.icon} alt={etapa.altIcon} fill={true} />
                                            <h2 className={`mt-24 ${poppins.className} text-white text-2xl drop-shadow-lg underline underline-offset-4 decoration-verdeBX`}><b>Etapa {etapa.etapaIndice}</b></h2>
                                            <h3 className={`-mt-1.5 ${poppins.className} text-white text-lg drop-shadow-lg`}>{etapa.tema}</h3>
                                        </div>
                                }
                            </button>
                        ))
                    }
                </section> 
                <section id="scrollDestiny" className="pt-8 mb-20 mx-8"> {/*a fim do scroll ter como destino um ponto ligeiramente anterior ao início do primeiro balao de desafio, ao invés de utilizar mt-8, aqui usamos pt-8 */} 
                    {
                        indice != -1 && ( //garantindo que os CardDesafios só serão chamados caso haja um valor válido em 'indice', evitando tentativas de acesso à posições não existentes no arranjo de etapas
                            <CardDesafios desafios={(etapasDesafios[indice]).desafios} /> 
                        )
                    }
                </section>
            </div>
        </main>
    );
}