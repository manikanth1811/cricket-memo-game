export default function CardComponent({ data, cardClikedId }) {
  if (data === "") data = [];
  return (
    <div className="w-[100%] h-auto min-h-fit flex justify-center items-center md:grow">
      <div className="h-fit flex flex-row flex-wrap max-w-[90%] md:max-w-50 justify-center items-center gap-4">
        {data.map((playerData) => {
          return (
            <IndividualCards
              playerId={playerData.id}
              playerName={playerData.fullname}
              playerPic={playerData.image_path}
              key={playerData.id}
              cardClikedId={cardClikedId}
            />
          );
        })}
      </div>
    </div>
  );
}

// TODO: Function(From the main.jsx) to trigger when the cards generated are created.
function IndividualCards({ playerName, playerPic, playerId, cardClikedId }) {
  return (
    <div
      onClick={() => cardClikedId(playerId)}
      className="individualCard w-[11.25rem] h-[15rem] flex bg-blue-200 transform transition duration-250 hover:scale-105"
    >
      <div
        className="backpart w-[100%] h-[100%] flex items-center justify-center flex-col"
        id={playerId}
      >
        <img
          src={playerPic}
          alt={playerName}
          className="w-[10rem] h-[12.5rem]"
        />
        <span className="cricketNames text-xs md:text-sm font-small text-center h-fit w-[100%]">
          {playerName}
        </span>
      </div>
    </div>
  );
}
