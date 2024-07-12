import Ranking from "@/components/Ranking";
import data from '../data/exampleLanding.json';

export default function Home() {

  return (
    <main>
      
      {/* Ranking section using ranking component */}
      <section className="flex flex-col my-12 lg:px-16 gap-12">
        <h1 className="text-7xl px-8">Ranking</h1>
        <Ranking equipes={data.equipes} displayQuantity={5}/>
        <div className="flex justify-center w-full"><button className="border w-fit border-green-500">botao p pag de ranking</button></div>
      </section>


    </main>
  );
}
