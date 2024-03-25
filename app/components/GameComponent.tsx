"use client";
import { useState, useEffect } from "react";
import {
  JumbleList,
  getHighScoreLS,
  getNRandomPlayers,
  setHighScoreLS,
} from "../utils/utilities";
import Score from "./ScoreComponent";
import CardsComponent from "./CardsComponents";

interface Player {
  id: string;
  country_id: number;
  fullname: string;
  image_path: string;
}

export default function GameComponent({
  totalPlayersList,
}: {
  totalPlayersList: Player[];
}) {
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [currPlayerList, setCurrPlayerList] = useState<Player[]>([]);
  const [selectedcurrPlayerList, setSelectedurrPlayerList] = useState<string[]>(
    []
  );
  useEffect(() => {
    const currPlayers = getNRandomPlayers(4, totalPlayersList);
    setCurrPlayerList(currPlayers);
    setHighScore(getHighScoreLS());
  }, []);

  function newGame(score: number): boolean {
    console.log(`current Score in newGame Start ${score}`);
    if (score < 16) {
      if (score === 15 || score === 9 || score === 3) {
        return true;
      }
    } else {
      if ((score - 15) % 12 === 0) {
        return true;
      }
    }
    return false;
  }

  function newPlayerNumber(score: number): number {
    console.log(`score in new game ${score}`);
    if (score === 3) {
      return 6;
    }
    if (score === 9) {
      return 8;
    }
    return 12;
  }

  function playerClick(playerName: string): void {
    if (selectedcurrPlayerList.includes(playerName)) {
      // Looses Game
      setScore(0);
      setHighScoreLS(score + 1);
      setSelectedurrPlayerList([]);
    } else {
      if (newGame(score)) {
        let currentNewPlayers = getNRandomPlayers(
          newPlayerNumber(score),
          totalPlayersList
        );
        setScore(score + 1);
        setCurrPlayerList(currentNewPlayers);
        setSelectedurrPlayerList([]);
      } else {
        let selectedPlayerList = selectedcurrPlayerList;
        selectedPlayerList.push(playerName);
        setScore(score + 1);
        let currentPlayersListJumbled = JumbleList(currPlayerList);
        setSelectedurrPlayerList(selectedPlayerList);
        setCurrPlayerList(currentPlayersListJumbled);
      }
    }
    if (highScore <= score + 1) {
      setHighScore(score + 1);
    }
  }
  console.log(currPlayerList);
  return (
    <div className="gameContainer flex flex-col flex-grow">
      <Score score={score} highScore={highScore} />
      <CardsComponent playersList={currPlayerList} clickCb={playerClick} />
    </div>
  );
}
