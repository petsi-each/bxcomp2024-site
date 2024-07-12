import Ranking from "@/components/Ranking";

export default function Home() {

  const equipes = [
    {
      nome: "Equipe",
      membros: ["eu", "vc", "ele"],
      pontos: 1,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equipea",
      membros: ["eu", "vc", "ele"],
      pontos: 2,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equipea",
      membros: ["eu", "vc", "ele"],
      pontos: 0,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equipeb",
      membros: ["eu", "vc", "ele"],
      pontos: 7,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equipec",
      membros: ["eu", "vc", "ele"],
      pontos: 5,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equiped",
      membros: ["eu", "vc", "ele"],
      pontos: 8,
      iconPath: "/equipe_icons/example.png"
    },
    {
      nome: "Equipeeaaaaaaaaaaaaaaaaaaasdkljasodkoasjdoiaosjdioaaaaa",
      membros: ["eu", "vc", "ele"],
      pontos: 7,
      iconPath: "/equipe_icons/example.png"
    },

  ]


  return (
    <main>
      {/* Add components from Landing Page here */}

      {/* Ranking section using ranking component */}
      <section className="flex flex-col my-12 lg:px-16 gap-12">
        <h1 className="text-7xl px-8">Ranking</h1>
        <Ranking equipes={equipes} displayQuantity={5}/>
        <div className="flex justify-center w-full">
          <button className="border w-fit border-green-500">botao p pag de ranking</button>
        </div>
      </section>


    </main>
  );
}
