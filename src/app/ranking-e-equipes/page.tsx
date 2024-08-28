import Ranking from '@/components/Ranking'
import Equipes from '@/components/Equipes'
import data from '@/data/landingpage.json'
import ImageG from '@/components/ImageG'

export default function RankingEEquipes() {
    return (
        <main className='pt-24'> {/*Esse padding faz com que parte da onda fique atrás da navbar. Porém, deixar maior empurra o conteúdo muito para baixo.*/}
            <ImageG className='w-full -mb-1 pointer-events-none rotate-180' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <Equipes />
            <ImageG className='w-full -mt-1 pointer-events-none' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <section className="flex flex-col my-12 lg:px-16 gap-12">
                <h1 className="text-7xl px-8">Ranking</h1>
                <Ranking equipes={data.equipes} />
            </section>
        </main>
    )
}