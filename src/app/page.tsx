'use client'

import Hero from "./components/Hero";
import Oqueeobxcomp from "./components/Oqueeobxcomp";
import Etapas from "./components/Etapas";
import Equipes from "../components/Equipes";
import Ranking from "@/components/Ranking";
import PrimaryButton from "@/components/PrimaryButton";
import equipesData from '../data/equipes.json';
import etapasData from '../data/etapas.json';
import Image from 'next/image';

export default function Home() {

  return (

    <main className="overflow-x-hidden">   
      <Hero />
      <Oqueeobxcomp />
      
      {/* Etapas section using etapas component */}
      <section>
        <figure className="w-full bg-brancoBX pointer-events-none">
          <Image
            src="/home/onda_azul.svg"
            alt="Onda azul"
            width="9999"
            height="99"
          />
        </figure>
          <Etapas etapas={etapasData}/>
      </section>

      {/* Equipes section using equipes component*/}
      <section>
      <Equipes equipes={equipesData}/>

        <figure className="relative w-full bg-pretoBX pointer-events-none">
          <Image className="hidden md:block absolute right-12 -bottom-8" src="/home/gravityfalls.png" alt="" width="281" height="312" /> 
          <Image
            src="/home/onda_branca.svg"
            alt="Onda branca"
            width="9999"
            height="99">
          </Image>           
        </figure>
      </section>

      {/* Ranking section using ranking component */}
      <section className="flex flex-col my-12 lg:px-16 gap-12">
        <h1 className="text-7xl px-8">Ranking</h1>
        <Ranking equipes={equipesData} displayQuantity={5} />
        <div className="flex justify-center w-full">
          <PrimaryButton title="Ranking completo" onClick={() => location.replace("/equipes-e-ranking#ranking")} />
        </div>
      </section>
      <Image className="hidden md:block absolute left-12 -bottom-[175px]" src="/home/bobesponja.png" alt="" width="240" height="26" /> 
    </main>
  );
}
