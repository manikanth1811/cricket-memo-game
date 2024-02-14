import { useState, useEffect } from "react";
import {
  getRandomNumbers,
  newRenderPlayerList,
  jumbleGivenList,
} from "./untilities";
import CardComponent from "./Content";
import { setPlayersHighInStorage } from "./storage";

export default function GameLogic({
  currentScore,
  highScore,
  totalPlayersList,
  changeCurrentScore,
  changeHighScore,
}) {
  if (totalPlayersList.length === 0)
    return <CardComponent data="" cardClikedId="" />;
  const [currentPlayersList, setCurrentPlayersList] = useState([]);
  const [selectedPlayersList, setSelectedPlayersList] = useState([]);
  const [shouldRender, setShouldRender] = useState(true);
  let currentRenderNumber = 0;
  let newRender = false;
  if (currentScore < 4) {
    currentRenderNumber = 4;
    if (currentScore === 0) {
      newRender = true;
    }
  } else if (currentScore < 10) {
    currentRenderNumber = 6;
    if (currentScore === 4) newRender = true;
  } else if (currentScore < 19) {
    currentRenderNumber = 9;
    if (currentScore === 10) newRender = true;
  } else if (currentScore < 31) {
    currentRenderNumber = 12;
    if (currentScore === 19) newRender = true;
  } else {
    currentRenderNumber = 12;
    if ((currentScore - 19) % 12 === 0) newRender = true;
  }
  let newPlayerList = [];
  console.log(newRender, shouldRender);
  if (newRender) {
    newPlayerList = newRenderPlayerList(currentRenderNumber, totalPlayersList);
  } else {
    newPlayerList = jumbleGivenList(currentPlayersList);
  }
  console.log("newPlayerList", newPlayerList);
  if (shouldRender) {
    setCurrentPlayersList(newPlayerList);
    console.log("setting player List", currentPlayersList);
    if (newRender) {
      setSelectedPlayersList([]);
    }
    setShouldRender(false);
  }

  function playerCardSelected(playerId) {
    if (selectedPlayersList.find((selectedKey) => selectedKey === playerId)) {
      changeCurrentScore(0);
    } else {
      let newSelectedList = [...selectedPlayersList, playerId];
      setSelectedPlayersList(newSelectedList);
      if (highScore <= currentScore) {
        changeHighScore(currentScore + 1);
        setPlayersHighInStorage(currentScore + 1);
      }
      changeCurrentScore(currentScore + 1);
    }
    setShouldRender(true);
  }
  console.log(currentPlayersList);
  return (
    <>
      <CardComponent
        data={currentPlayersList}
        cardClikedId={playerCardSelected}
      />
    </>
  );
}
