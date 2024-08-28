import Ranking from '@/components/Ranking'
import Equipes from '@/components/Equipes'
import data from '@/data/landingpage.json'
import ImageG from '@/components/ImageG'

export default function RankingEEquipes() {
    return (
        <main className='pt-24'>
            <ImageG className='pointer-events-none rotate-180' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <Equipes />
            <ImageG className='pointer-events-none' src='home/onda_branca.svg' width="1280" height="186" alt='Onda branca' />
            <Ranking equipes={data.equipes} />
        </main>
    )
}