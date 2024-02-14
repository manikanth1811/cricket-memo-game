import { useEffect } from "react";

function TitleDiv() {
  return (
    <div className="flex flex-col title-div justify-start pl-2 h-fit w-full">
      <div className="flex items-center gap-1 justify-center">
        <span className="w-fit h-fit">Cricket </span>
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/external-justicon-lineal-color-justicon/28/external-cricket-player-sport-avatar-justicon-lineal-color-justicon.png"
          alt="cricket-player-icon"
          className="h-[30px] w-[30px]"
        />
      </div>
      <div className="flex justify-center">
        <span className="w-fit h-fit">Memo Game</span>
      </div>
    </div>
  );
}

export function NavBar({ highScore, currentScore }) {
  useEffect(() => {
    let ruleModal = document.querySelector("#gameStartDialog");
    ruleModal.showModal();
    let closeModalStartGameBtn = document.querySelector(".startGameInDialog");
    closeModalStartGameBtn.addEventListener("click", () => {
      ruleModal.close();
    });
  }, []);
  return (
    <div className="flex flex-col items-center w-[100%] h-fit mb-2 lg:grow-0">
      <TitleDiv />
      <ScoreDiv highScore={highScore} currentScore={currentScore} />
      {/* <ScoreLimiter currentScore={currentScore} ceilScore={ceilScore} /> */}
      <GameRules />
    </div>
  );
}

function ScoreDiv({ highScore, currentScore }) {
  return (
    <div className="score-div flex flex-row justify-center gap-4 lg:pl-3 w-full h-fit pt-5 pb-1">
      <span className="h-fit w-fit">Score:{currentScore}</span>
      <span className="h-fit w-fit">High Score:{highScore}</span>
    </div>
  );
}

function ScoreLimiter({ currentScore, ceilScore }) {
  return (
    <div className="score-limter flex flex-row justify-center w-full h-fit">
      <span className="w-fit h-fit">
        {currentScore} / {ceilScore}
      </span>
    </div>
  );
}

function GameRules() {
  return (
    <dialog
      id="gameStartDialog"
      className=" h-[10rem] w-[20rem] backdrop:bg-black/50 backdrop:backdrop-blur-md mt-8 rounded-xl bg-white p-6 shadow-3xl absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <span className="h-fit w-fit">
        Click on player cards to earn points. Don't click on the same player
        card twice
      </span>
      <button
        focus={true}
        className="startGameInDialog mx-auto mt-4 table rounded bg-gray-200 px-4 py-2 text-sm font-bold h-fit w-fit"
      >
        Start Game
      </button>
    </dialog>
  );
}
