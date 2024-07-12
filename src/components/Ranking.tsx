interface RankingProps {
    // Add
}

const Ranking: React.FC<RankingProps> = () => {
    return (
        <div className="w-4/5 flex items-center">
        <div className="w-full h-10 relative drop-shadow-lg bg-white rounded-full flex items-center justify-center">
            <div className="w-full drop-shadow rounded-full m-2 h-6 bg-green-500"></div>     
         </div>
         <div className="flex items-center -ml-8">
         <div className="h-20 w-20 drop-shadow-lg rounded-full bg-white drop-shadow-lg">

         </div>
         <p className="p-4">hi</p>
         </div>
        </div>
    );
};

export default Ranking;