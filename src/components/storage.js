// Sets the players info(only name, image-url, id )
export function setPlayersInfoInStorage(totalPlayersInfo) {
  // Storage Format name,url,id;name,url,id;
  let totalPlayerInfoInString = "";
  totalPlayersInfo.forEach((playerInfo) => {
    let currentPlayerInfoString =
      playerInfo.fullname + "," + playerInfo.image_path + "," + playerInfo.id;
    if (totalPlayerInfoInString) {
      totalPlayerInfoInString =
        totalPlayerInfoInString + ";" + currentPlayerInfoString;
    } else totalPlayerInfoInString = currentPlayerInfoString;
  });
  localStorage.setItem("totalPlayersInfo", totalPlayerInfoInString);
}

// Gets the players information and returns it if present else returns null
export function getPlayersInfoInStorage() {
  let playersInfoInStorage = localStorage.getItem("totalPlayersInfo");
  if (!playersInfoInStorage) return playersInfoInStorage;
  let totalPlayerListInObj = [];
  let splitPlayers = playersInfoInStorage.split(";");
  splitPlayers.forEach((splitPlayer) => {
    let playerSplit = splitPlayer.split(",");
    let playerInObj = {
      fullname: playerSplit[0],
      image_path: playerSplit[1],
      id: playerSplit[2],
    };
    totalPlayerListInObj.push(playerInObj);
  });
  return totalPlayerListInObj;
}

// Sets the HighScore of the players
export function setPlayersHighInStorage(currentHighScore) {
  localStorage.setItem("highScore", currentHighScore);
}

// Gets the highscore of the player
export function getPlayersHighScoreInStorage() {
  return localStorage.getItem("highScore");
}
