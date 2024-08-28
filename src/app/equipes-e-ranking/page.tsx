import Ranking from '@/components/Ranking'
import Equipes from '@/components/Equipes'
import data from '@/data/landingpage.json'
import ImageG from '@/components/ImageG'

export default function EquipesERanking() {
    return (
        <main className='pt-24'> {/*Esse padding faz com que parte da onda fique atrás da navbar. Porém, deixar maior empurra o conteúdo muito para baixo.*/}
            <ImageG className='w-full -mb-1 pointer-events-none rotate-180' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <Equipes />
            {/*OBS: A âncora do ranking (id="ranking") está em ImageG porque se deixar na própria section do ranking ele fica escondido atrás da navbar. É uma gambiarra mas funciona bem nesse caso. A outra alternativa seria fazer uma função dedicada para aplicar esse offset.*/}
            <ImageG id="ranking" className='w-full -mt-1 pointer-events-none' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <section className="flex flex-col my-12 lg:px-16 gap-12">
                <h1 className="text-7xl px-8">Ranking</h1>
                <Ranking equipes={data.equipes} />
            </section>
        </main>
    )
}