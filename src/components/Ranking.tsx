import ImageG from "./ImageG"


interface Equipe {
    title: string,
    members: string[],
    points: number,
    iconPath: string
}

interface RankingProps {
    equipes: Equipe[],
    displayQuantity?: number
}

interface PointBarProps {
    equipe: Equipe,
    topScore: number
}


const PointBar: React.FC<PointBarProps> = ({ equipe, topScore }) => {
    const percentage = (equipe.points / topScore) * 100
    const size = `w-[${percentage}%]`

    return (

        <div className={`flex items-center ${size}`}>
            <div className="flex flex-grow h-10 relative drop-shadow-lg bg-white rounded-full flex items-center justify-center">
                <div className="w-full drop-shadow rounded-full m-2 h-6 bg-laranjaBX"></div>
            </div>
            <div className="flex items-center -ml-8">
                <div className="h-20 w-20 relative flex items-center justify-center drop-shadow-lg rounded-full bg-white drop-shadow-lg">
                    <ImageG src={equipe.iconPath} fill={true} alt={""} />
                </div>
            </div>
            <div className="p-4 w-52 max-w-52 min-w-52">
                <h2 className="text-3xl w-full truncate overflow-hidden">{equipe.title}</h2>
                <p className="text-xl">{equipe.points} pontos</p>
            </div>
        </div>
    );
}

const Ranking: React.FC<RankingProps> = ({ equipes, displayQuantity = -1 }) => {

    equipes.sort((a, b) => b.points - a.points);
    const displayEquipes = displayQuantity < 0 ? equipes : equipes.slice(0,displayQuantity)
    const topScore = equipes[0].points

    return (



        <section>

            {
                displayEquipes.map((equipe, index) => (
                    <PointBar key={index} equipe={equipe} topScore={topScore} />
                ))
            }
        </section>

    );
};


export default Ranking;