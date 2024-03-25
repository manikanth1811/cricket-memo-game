interface PlayerInfo {
  id: string;
  country_id: number;
  fullname: string;
  image_path: string;
}

export default function CardsComponent({
  playersList,
  clickCb,
}: {
  playersList: PlayerInfo[];
  clickCb: (playerName: string) => void;
}) {
  if (playersList.length === 0) return <></>;
  return (
    <div className="w-[100%] flex justify-center h-[100%] items-center grow-1">
      <div className="flex flex-row flex-wrap justify-evenly w-[100%] md:w-[80%] lg:w-[70%] lg:gap-3">
        {playersList.map((player) => {
          return (
            <IndividualComponent player={player} clickCallback={clickCb} />
          );
        })}
      </div>
    </div>
  );
}

function IndividualComponent({
  player,
  clickCallback,
}: {
  player: PlayerInfo;
  clickCallback: (playerName: string) => void;
}) {
  return (
    <div
      key={player.fullname}
      onClick={() => clickCallback(player.fullname)}
      className="individualCard w-[11.25rem] h-[15rem] flex bg-slate-200 transform transition duration-250 hover:scale-105"
    >
      <div
        className="backpart w-[100%] h-[100%] flex items-center justify-center flex-col"
        id={player.fullname}
      >
        <img
          src={player.image_path}
          alt={player.fullname}
          className="w-[10rem] h-[12.5rem]"
        />
        <span className="cricketNames text-xs md:text-sm font-small font-bold text-center h-fit pt-2 w-[100%]">
          {player.fullname}
        </span>
      </div>
    </div>
  );
}
