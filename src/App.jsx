import { NavBar } from "./components/HeaderDiv";
import GameLogic from "./components/GameLogic";
import { useEffect, useState } from "react";
import {
  setPlayersInfoInStorage,
  getPlayersInfoInStorage,
  getPlayersHighScoreInStorage,
} from "./components/storage";
import { getRandomNumbers } from "./components/untilities";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [totalPlayersList, setTotalPlayersList] = useState([]);
  console.log(totalPlayersList);
  console.log(highScore);
  useEffect(() => {
    // Check if the localstorage has any players. If not fetch and write it to local storage
    if (!getPlayersInfoInStorage()) {
      // Fetch the players and write it to the storage
      let totalPlayersData = [];
      let urlIds = [];
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      let randomId = getRandomNumbers(10);
      randomId.forEach((id) => {
        urlIds.push(
          `https://cors-anywhere.herokuapp.com/https://cricket.sportmonks.com/api/v2.0/players/${id}/?api_token=${
            import.meta.env.VITE_API_KEY
          }`
        );
      });
      let errorFlag = false;
      (async () => {
        console.time("time execution");
        for (let [i, url] of urlIds.entries()) {
          await new Promise((resolve, reject) => {
            fetch(url, requestOptions)
              .then((r) => r.json())
              .then((r) => {
                totalPlayersData.push({
                  fullname: r.data.fullname,
                  image_path: r.data.image_path,
                  id: r.data.id,
                });
                resolve(r);
              })
              .catch((e) => {
                errorFlag = true;
                reject(e);
              })
              .finally(() => {
                if (i === urlIds.length - 1) {
                  console.timeEnd("time execution");
                  if (!errorFlag) {
                    setPlayersInfoInStorage(totalPlayersData);
                    setTotalPlayersList(totalPlayersData);
                  }
                }
              });
          });
        }
      })();
    } else {
      setTotalPlayersList(getPlayersInfoInStorage());
    }
    if (getPlayersHighScoreInStorage()) {
      setHighScore(getPlayersHighScoreInStorage());
    }
  }, []);

  return (
    <div className="content-div overflow-auto md:flex md:flex-col">
      <NavBar currentScore={currentScore} highScore={highScore} />
      <GameLogic
        currentScore={currentScore}
        highScore={highScore}
        totalPlayersList={totalPlayersList}
        changeCurrentScore={(score) => setCurrentScore(score)}
        changeHighScore={(highScore) => setHighScore(highScore)}
      />
    </div>
  );
}

export default App;
