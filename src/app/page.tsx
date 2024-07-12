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
      <Ranking equipes={equipes} />
    </main>
  );
}
