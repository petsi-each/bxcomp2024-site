import Ranking from '@/components/Ranking'
import Equipes from '@/components/Equipes'
import equipesData from '@/data/equipes.json'
import Image from 'next/image'

export default function EquipesERanking() {
    return (
        <main>
            <Image className='w-full -mb-1 pointer-events-none rotate-180' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <Equipes equipes={equipesData}/>
            <Image id="ranking" className='w-full -mt-1 pointer-events-none' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <section className="flex flex-col my-12 lg:px-16 gap-12">
                <h1 className="text-7xl px-8">Ranking</h1>
                <Ranking equipes={equipesData} />
            </section>
        </main>
    )
}