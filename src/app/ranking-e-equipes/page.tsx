import Ranking from '@/components/Ranking'
import Equipes from '@/components/Equipes'
import data from '@/data/landingpage.json'

export default function RankingEEquipes() {
    return (
        <main className='pt-36'>
            <Equipes />
            <Ranking equipes={data.equipes} />
        </main>
    )
}