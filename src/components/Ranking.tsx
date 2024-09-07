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
}

interface PointBarProps {
    equipe: Equipe,
    topScores: number[],
}

interface CoroaImageProps {
    scorePosition: number;
}

/**
 * Componente que representa o tipo de coroa do PointBar
 * 
 * @param {number} [scorePosition] - Posição do top; 
 */

const CoroaImage: React.FC<CoroaImageProps> = ({ scorePosition }) => {
    if (scorePosition == -1) return null;    
    if (scorePosition == 0) return (
        <div className="absolute -mt-40">
            <ImageG src="/home/coroaReiGelado.png" alt="" width={88} height={132} />
        </div>
    )
    if (scorePosition == 1) return(
        <div className="absolute -mt-24 -ml-12">
            <ImageG src="/home/coroaPrata.png" alt="" width={85} height={65} />
        </div>
    )
    if (scorePosition == 2) return(
        <div className="absolute -mt-24 -ml-12">
            <ImageG src="/home/coroaBronze.png" alt="" width={85} height={65} />
        </div>
    )
        
}


/**
 * Componente que representa uma barra de pontos para uma equipe.
 *
 * @param {Equipe} equipe - Informações da equipe incluindo nome, membros, pontos e ícone.
 * @param {number} topScores - Lista com a quantidade de ponto dos tres primeiros lugares para renderizar coroa.
 */

const PointBar: React.FC<PointBarProps> = ({ equipe, topScores }) => {
    
    const totalPontos = equipe.pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const percentage = (totalPontos / topScores[0]) * 100

    
    const barWidth = percentage < 8 ? 'fit-content' :  percentage + '%'
    const remainingNameWidth = Math.max(0, 100 - percentage) + '%';
    // const minNameWidth = 150; // pixel size

    return (

        <article className="-z-10">

            {/* Descrição da equipe no mobile */}
            <div className="md:hidden w-screen px-8 mb-4">
                <h2 className="text-2xl truncate">{equipe.nome}</h2>
                <p className="text-md">{totalPontos} pontos</p>
            </div>

            <div className="w-full px-8 mb-6 md:mb-0 flex items-center">
            <div style={{ width: barWidth }} className={`flex items-center`}>

                <div className="flex flex-grow h-10 drop-shadow-lg bg-white rounded-full">
                    <div className="w-full drop-shadow-lg rounded-full m-2 h-6 bg-laranjaBX"></div>
                </div>

                <div>
                    <figure className="-ml-8 h-20 w-20 relative flex items-center justify-center drop-shadow-xl rounded-full bg-white">
                        <ImageG className="absolute" src={equipe.iconPath} fill={true} alt={""} />
                        <CoroaImage scorePosition={topScores.indexOf(totalPontos)}/>                 
                    </figure>
                </div>

                {/* Descrição da equipe no desktop */}
                
            </div>
                <div style={{ width: remainingNameWidth }} className="min-w-24 lg:min-w-48 px-4 hidden md:block"> 
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

    const topScores = Array.from(new Set(sortedEquipes.map(equipe => sumPoints(equipe.pontos)))).slice(0,3).filter(score => score !== 0).filter((score, idx, arr) => !(idx === 0 && score === 1));

    const displayEquipes = displayQuantity < 0 ? sortedEquipes : sortedEquipes.slice(0, displayQuantity) // Apresenta displayQuantity itens do array caso um valor seja determinado

    return (
        <section className="grid grid-rows-1 gap-8 md:gap-2">
            {displayEquipes.map((equipe, index) => {
                return (
                    <PointBar key={index} equipe={equipe} topScores={topScores} />
                );
            })}
        </section>  
    );
};

export default Ranking;