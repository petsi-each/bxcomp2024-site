'use client'
import Ranking from "@/components/Ranking";
import PrimaryButton from "@/components/PrimaryButton";

import data from '../data/landingpage.json';

export default function Home() {

  return (
    <main>
      
      {/* Ranking section using ranking component */}
      <section className="flex flex-col my-12 lg:px-16 gap-12">
        <h1 className="text-7xl px-8">Ranking</h1>
        <Ranking equipes={data.equipes} displayQuantity={5}/>
        <div className="flex justify-center w-full">
          <PrimaryButton title="Ranking completo" onClick={()=>location.replace("/ranking")} />
        </div>
      </section>


    </main>
  );
}
