'use client'

interface Equipe {
    title:string,
    members:string[],
    points: number,
    iconPath: string
}

interface RankingProps {
    
}

interface PointBarProps {
    equipe: Equipe,
    topScore: number
}


const PointBar : React.FC<PointBarProps> = ({ equipe, topScore }) => {
    
    const size = `w-[${(equipe.points/topScore)*100}%]`
    
    return (
        
        <div className={`flex items-center ${size}`} onClick={()=>console.log(size)}>
            <div className="flex flex-grow h-10 relative drop-shadow-lg bg-white rounded-full flex items-center justify-center">
                <div className="w-full drop-shadow rounded-full m-2 h-6 bg-laranjaBX"></div>
            </div>
            <div className="flex items-center -ml-8">
                <div className="h-20 w-20 drop-shadow-lg rounded-full bg-white drop-shadow-lg">

                </div>
            </div>
            <div className="p-4 w-24 min-w-24 max-w-24">
                <h2 className="text-3xl w-full truncate overflow-hidden">{equipe.title}</h2>
                <p className="text-xl">{equipe.points} pontos</p>
            </div>
        </div>
    );
}

const Ranking: React.FC<RankingProps> = () => {

    const equipe = {
        title: "Equipe",
        members: ["eu", "vc", "ele"],
        points: 6,
        iconPath: "nayet"
    }
    
    return (
        <section className="w-full">
        <PointBar equipe={equipe} topScore={10} />
        </section>
    );
};

export default Ranking;