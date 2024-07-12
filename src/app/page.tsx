import Ranking from "@/components/Ranking";

export default function Home() {

  const equipes = [
    {
      title: "Equipe",
      members: ["eu", "vc", "ele"],
      points: 1,
      iconPath: "nayet"
    },
    {
      title: "Equipea",
      members: ["eu", "vc", "ele"],
      points: 2,
      iconPath: "nayet"
    },
    {
      title: "Equipeb",
      members: ["eu", "vc", "ele"],
      points: 7,
      iconPath: "nayet"
    },
    {
      title: "Equipec",
      members: ["eu", "vc", "ele"],
      points: 5,
      iconPath: "nayet"
    },
    {
      title: "Equiped",
      members: ["eu", "vc", "ele"],
      points: 8,
      iconPath: "nayet"
    },
    {
      title: "Equipee",
      members: ["eu", "vc", "ele"],
      points: 7,
      iconPath: "nayet"
    },

  ]


  return (
    <main>
      {/* Add components from Landing Page here */}
      <Ranking equipes={equipes} />
    </main>
  );
}
