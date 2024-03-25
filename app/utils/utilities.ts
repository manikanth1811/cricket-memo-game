interface Player {
  id: string;
  country_id: number;
  fullname: string;
  image_path: string;
}

export function getNRandomPlayers(n: number, playersList: Player[]): Player[] {
  // Suffle the list first and then jumble it https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  playersList = JumbleList(playersList);
  //   slice the list
  const nPlayersList = playersList.slice(0, n);

  return nPlayersList;
}

export function setHighScoreLS(highScore: number): void {
  localStorage.setItem("highScore", highScore.toString());
}

export function getHighScoreLS(): number {
  if (localStorage.getItem("highScore")) {
    console.log(localStorage.getItem("highScore"));
    parseInt(localStorage.getItem("highScore") as string, 10);
  }
  return 0;
}

export function JumbleList(playersList: Player[]): Player[] {
  for (var i = playersList.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = playersList[i];
    playersList[i] = playersList[j];
    playersList[j] = temp;
  }
  return playersList;
}
