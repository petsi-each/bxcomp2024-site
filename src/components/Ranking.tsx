interface RankingProps {
    // Add
}

const PointBar = () => {
    return (
        <div className="w-full flex items-center">
            <div className="flex flex-grow h-10 relative drop-shadow-lg bg-white rounded-full flex items-center justify-center">
                <div className="w-full drop-shadow rounded-full m-2 h-6 bg-laranjaBX"></div>
            </div>
            <div className="flex items-center -ml-8">
                <div className="h-20 w-20 drop-shadow-lg rounded-full bg-white drop-shadow-lg">

                </div>
            </div>
            <div className="p-4 w-1/5 max-w-1/5">
                <h2 className="text-3xl w-full truncate overflow-hidden">sdadsadsadasdNome do grupo</h2>
                <p className="text-xl">12 pontos</p>
            </div>
        </div>
    );
}

const Ranking: React.FC<RankingProps> = () => {
    return (
        <PointBar />
    );
};

export default Ranking;