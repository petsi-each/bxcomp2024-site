import ImageG from "./ImageG"

interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface RankingProps {
    equipes: Equipe[],
    displayQuantity?: number,
    secondScore: number,
    thirdScore: number
}

interface PointBarProps {
    equipe: Equipe,
    topScore: number,
    scorePosition: number | undefined,
}

interface CoroaImageProps {
    scorePosition: number | undefined;
}

/**
 * Componente que representa o tipo de coroa do PointBar
 * 
 * @param {number} [scorePosition] - Posição do top; 
 */

const CoroaImage: React.FC<CoroaImageProps> = ({ scorePosition }) => {
    let image;

    if (scorePosition == 1) {
        image = <div className="absolute -mt-40">
                    <ImageG src="/coroaReiGelado.png" alt="" width={88} height={132} />
                </div>
    } else if (scorePosition == 2) {
        image = <div className="absolute -mt-24 -ml-12">
                    <ImageG src="/coroaPrata.png" alt="" width={85} height={65} />
                </div>
    } else if (scorePosition == 3) {
        image = <div className="absolute -mt-24 -ml-12">
                    <ImageG src="/coroaBronze.png" alt="" width={85} height={65} />
                </div>
    } else {
        //image = null; // Nenhuma imagem será renderizada
        return null;
    }

    return image;
}


/**
 * Componente que representa uma barra de pontos para uma equipe.
 *
 * @param {Equipe} equipe - Informações da equipe incluindo nome, membros, pontos e ícone.
 * @param {number} topScore - O maior número de pontos entre todas as equipes, usado para calcular a largura da barra.
 * @param {number} [scorePosition] - Posição do top; Pode ser: 1, 2, 3.
 */

const PointBar: React.FC<PointBarProps> = ({ equipe, topScore, scorePosition }) => {
    
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
                        <ImageG src={equipe.iconPath} fill={true} alt={""} />
                        <CoroaImage scorePosition={scorePosition}/>                 
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


    // sortedEquipes.sort((a, b) => b.pontos - a.pontos); // Ordena o array a partir dos pontos
    sortedEquipes.sort((a, b) => sumPoints(b.pontos) - sumPoints(a.pontos));
    
    const topScore = sumPoints(sortedEquipes[0].pontos) // Pega a maior quantidade de pontos (representa 100%)
    const displayEquipes = displayQuantity < 0 ? sortedEquipes : sortedEquipes.slice(0, displayQuantity) // Apresenta displayQuantity itens do array caso um valor seja determinado


    // Define as pontuações de secondScore e thirdScore
    let secondScore: number | undefined,
        thirdScore: number | undefined;

    const uniqueSortedScores = Array.from(new Set(sortedEquipes.map(equipe => sumPoints(equipe.pontos)))); // Array ordenado de pontuações totais das equipes
    if (uniqueSortedScores.length > 1) {
        secondScore = uniqueSortedScores[1]; // A segunda maior pontuação
    }
    
    if (uniqueSortedScores.length > 2) {
        thirdScore = uniqueSortedScores[2]; // A terceira maior pontuação
    }
    ;
    
    return (

        <section className="grid grid-rows-1 gap-8 md:gap-2">
            {displayEquipes.map((equipe, index) => {
                // Calcula a soma da pontuação da equipe uma vez
                const equipeScore = sumPoints(equipe.pontos);

                // Determina a posição da equipe com base na pontuação
                let scorePosition: number | undefined;
                if (topScore == 0) {
                    scorePosition = undefined; // Ninguém pontuou
                } else if (equipeScore == topScore) {
                    scorePosition = 1; // 1º lugar
                } else if (equipeScore == secondScore) {
                    scorePosition = 2; // 2º lugar
                } else if (equipeScore == thirdScore) {
                    scorePosition = 3; // 3º lugar
                } else {
                    scorePosition = undefined; // Sem coroa
                }

                // Retorna o componente PointBar com a posição correta
                return (
                    <PointBar key={index} equipe={equipe} topScore={topScore} scorePosition={scorePosition} />
                );
            })}
        </section>  

    );
};

export default Ranking;