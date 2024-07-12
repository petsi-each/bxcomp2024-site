import Ranking from "@/components/Ranking";

export default function Home() {

  const equipes = [
    {
      title: "Equipe",
      members: ["eu", "vc", "ele"],
      points: 1,
      iconPath: "/equipe_icons/example.png"
    },
    {
      title: "Equipea",
      members: ["eu", "vc", "ele"],
      points: 2,
      iconPath: "/equipe_icons/example.png"
    },
    {
      title: "Equipeb",
      members: ["eu", "vc", "ele"],
      points: 7,
      iconPath: "/equipe_icons/example.png"
    },
    {
      title: "Equipec",
      members: ["eu", "vc", "ele"],
      points: 5,
      iconPath: "/equipe_icons/example.png"
    },
    {
      title: "Equiped",
      members: ["eu", "vc", "ele"],
      points: 8,
      iconPath: "/equipe_icons/example.png"
    },
    {
      title: "Equipeeaaaaaaa",
      members: ["eu", "vc", "ele"],
      points: 7,
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
