import ImageG from "./ImageG"

interface Equipe {
    nome: string,
    membros: string[],
    pontos: number,
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
    
    const percentage = (equipe.pontos / topScore) * 100

    return (

        <article>

            {/* Descrição da equipe no mobile */}
            <div className="md:hidden w-screen px-8">
                <h2 className="text-2xl truncate">{equipe.nome}</h2>
                <p className="text-md">{equipe.pontos} pontos</p>
            </div>

            <div style={{ width: percentage + '%' }} className={`flex items-center pl-8 pr-2`}>

                <div className="flex flex-grow h-10 drop-shadow-lg bg-white rounded-full">
                    <div className="w-full drop-shadow-lg rounded-full m-2 h-6 bg-laranjaBX"></div>
                </div>

                <div>
                    <figure className="-ml-8 h-20 w-20 relative flex items-center justify-center drop-shadow-xl rounded-full bg-white">
                        <ImageG src={equipe.iconPath} fill={true} alt={"Logo da equipe "+equipe.nome} />
                    </figure>
                </div>

                {/* Descrição da equipe no desktop */}
                <div className="px-4 max-w-10 min-w-10 md:max-w-28 md:min-w-28 hidden md:block">
                    <h2 className="text-2xl w-full truncate">{equipe.nome}</h2>
                    <p className="text-md w-full">{equipe.pontos} pontos</p>
                </div>

            </div>

        </article>

    );
}

const Ranking: React.FC<RankingProps> = ({ equipes, displayQuantity = -1 }) => {

    equipes.sort((a, b) => b.pontos - a.pontos); // Ordena o array a partir dos pontos
    const topScore = equipes[0].pontos // Pega a maior quantidade de pontos (representa 100%)
    const displayEquipes = displayQuantity < 0 ? equipes : equipes.slice(0, displayQuantity) // Apresenta displayQuantity itens do array caso um valor seja determinado

    return (

        <section className="grid grid-rows-1 gap-8 md:gap-2">

            {
                displayEquipes.map((equipe, index) => (
                    <PointBar key={index} equipe={equipe} topScore={topScore} />
                ))
            }

        </section>

    );
};

export default Ranking;