import ImageG from "./ImageG"

interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
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


/**
 * Componente que representa uma barra de pontos para uma equipe.
 *
 * @param {Equipe} equipe - Informações da equipe incluindo nome, membros, pontos e ícone.
 * @param {number} topScore - O maior número de pontos entre todas as equipes, usado para calcular a largura da barra.
 */

const PointBar: React.FC<PointBarProps> = ({ equipe, topScore }) => {
    
    const totalPontos = equipe.pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const percentage = (totalPontos / topScore) * 100

    return (

        <article className="-z-10">

            {/* Descrição da equipe no mobile */}
            <div className="md:hidden w-screen px-8">
                <h2 className="text-2xl truncate">{equipe.nome}</h2>
                <p className="text-md">{totalPontos} pontos</p>
            </div>

            <div style={{ width: percentage + '%' }} className={`flex items-center px-8`}>

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
                    <p className="text-md w-full">{totalPontos} pontos</p>
                </div>

            </div>

        </article>

    );
}



/**
 * Apresenta um *Ranking* de equipes com base nos pontos.
 *
 * @param {RankingProps} equipes - Lista de equipes a serem exibidas no ranking.
 * @param {number} [displayQuantity] - OPCIONAL: Quantidade de equipes a serem exibidas. Se não especificado, exibe todas as equipes.
 * 
 */

const Ranking: React.FC<RankingProps> = ({ equipes, displayQuantity = -1 }) => {
    
    const sortedEquipes = [...equipes];
    displayQuantity = displayQuantity >= equipes.length ? -1 : displayQuantity; 


    const sumPoints = (points: number[]): number => {
        return points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    sortedEquipes.sort((a, b) => sumPoints(b.pontos) - sumPoints(a.pontos));

    // sortedEquipes.sort((a, b) => b.pontos - a.pontos); // Ordena o array a partir dos pontos
    const topScore = sumPoints(sortedEquipes[0].pontos) // Pega a maior quantidade de pontos (representa 100%)
    const displayEquipes = displayQuantity < 0 ? sortedEquipes : sortedEquipes.slice(0, displayQuantity) // Apresenta displayQuantity itens do array caso um valor seja determinado

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