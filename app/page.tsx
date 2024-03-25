import { main } from "./lib/getPlayers";
import GameComponent from "./components/GameComponent";
import HeaderComponent from "./components/HeaderComponent";

export default async function Home() {
  const allPlayersList = await main();

  return (
    <>
      <div className="page flex flex-col h-[100vh] w-[100vw]">
        <HeaderComponent />
        <GameComponent totalPlayersList={allPlayersList} />
      </div>
    </>
  );
}
