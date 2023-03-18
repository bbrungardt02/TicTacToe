const startGameButton = document.getElementById("startGameButton");
const boardContainer = document.getElementById("boardContainer");
const newGameButton = document.getElementById("newGameButton");
const xDiv = document.createElement("div");
const oDiv = document.createElement("div");
newGameButton.style.display = "none";

const html = `<div class="board">
    <div class="cell" id="0,0"></div>
    <div class="cell" id="0,1"></div>
    <div class="cell" id="0,2"></div>
    <div class="cell" id="1,0"></div>
    <div class="cell" id="1,1"></div>
    <div class="cell" id="1,2"></div>
    <div class="cell" id="2,0"></div>
    <div class="cell" id="2,1"></div>
    <div class="cell" id="2,2"></div>
  </div>`;

const html1 = `
  <ul id="human">
  <li id="title2">Player:</li>
  <li id="playerName"></li>
  </ul>
  <ul id="comp">
  <li id="cpuTitle">Player:</li>
  <li id="cpuName">Computer</li>
  </ul>
  <form id="new-item">
    <input id="new-item-text" type="text" placeholder="Enter Player Name" required>
    <button id="firstButton">Submit</button>
  </form>
  `;

const html2 = `
  <ul id="human2">
  <li id="title2">Player:</li>
  <li id="playerName"></li>
  </ul>
  <ul id="comp2">
  <li id="player2Title">Player 2:</li>
  <li id="player2Name"></li>
  </ul>
  <form id="new-item">
    <input id="new-item-text" type="text" placeholder="Enter Player Name" required>
    <button id="firstButton">Submit</button>
  </form>
  `;

let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  players: ["x", "o"],
  currentPlayer: [null],
  gameStatus: "isPlaying",
};
gameState.currentPlayer = gameState.players[0];
const board = gameState.board;

function checkRow() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        board[i][0] !== null &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        if (board[i][0] === "x") {
          gameState.gameStatus = "xWins";
        } else if (board[i][0] === "o") {
          gameState.gameStatus = "oWins";
        }
        console.log(board[i][0]);
        return board[i][0];
      }
    }
  }
}
function checkColumn() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        board[0][j] !== null &&
        board[0][j] === board[1][j] &&
        board[1][j] === board[2][j]
      ) {
        if (board[i][0] === "x") {
          gameState.gameStatus = "xWins";
        } else if (board[i][0] === "o") {
          gameState.gameStatus = "oWins";
        }
        console.log(board[0][j]);
        return board[0][j];
      }
    }
  }
}
function checkDiagonals() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        (board[0][0] !== null &&
          board[0][0] === board[1][1] &&
          board[1][1] === board[2][2]) ||
        (board[0][2] !== null &&
          board[0][2] === board[1][1] &&
          board[1][1] === board[2][0])
      ) {
        if (board[i][0] === "x") {
          gameState.gameStatus = "xWins";
        } else if (board[i][0] === "o") {
          gameState.gameStatus = "oWins";
        }
        console.log(board[1][1]);
        return board[1][1];
      }
    }
  }
}

function checkDraw() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === null) {
        return;
      }
    }
  }
  gameState.gameStatus = "cat";
  console.log(gameState.gameStatus);
}

function endGame() {
  if (gameState.gameStatus === "xWins") {
    xDiv.setAttribute("id", "xDiv");
    xDiv.style.display = "flex";
    const xhtml = "<h1>X is the Winner!</h1>";
    xDiv.innerHTML = xhtml;
    boardContainer.appendChild(xDiv);
  } else if (gameState.gameStatus === "oWins") {
    oDiv.setAttribute("id", "oDiv");
    oDiv.style.display = "flex";
    const ohtml = "<h1>O is the Winner!</h1>";
    oDiv.innerHTML = ohtml;
    boardContainer.appendChild(oDiv);
  }
}

function checkWin() {
  checkRow();
  checkColumn();
  checkDiagonals();
  checkDraw();
  endGame();
}

function renderGame() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const cell = document.getElementById(`${i},${j}`);
      cell.innerText = board[i][j];
    }
  }
}

function switchPlayer() {
  let currentIndex = gameState.players.indexOf(gameState.currentPlayer);
  let nextIndex = (currentIndex + 1) % gameState.players.length;
  gameState.currentPlayer = gameState.players[nextIndex];
}

function CompRandomMove() {
  console.count("word");
  const rowIdx = Math.floor(Math.random() * 3);
  const colIdx = Math.floor(Math.random() * 3);
  console.log(rowIdx, colIdx);
  if (gameState.gameStatus !== "isPlaying") {
    return;
  } else if (board[rowIdx][colIdx] !== null) {
    return CompRandomMove();
  } else {
    board[rowIdx][colIdx] = gameState.currentPlayer;
    return;
  }
}

function boardClickP1(event) {
  let ids = event.target.id.split(",").map((item) => parseInt(item));
  if (gameState.gameStatus !== "isPlaying") {
    return;
  }
  if (board[ids[0]][ids[1]] !== null) {
    return;
  } else {
    board[ids[0]][ids[1]] = gameState.currentPlayer;
    switchPlayer();
    renderGame();
    checkWin();
  }
  CompRandomMove();
  switchPlayer();
  renderGame();
  checkWin();
}

function boardClickP2(event) {
  let ids = event.target.id.split(",").map((item) => parseInt(item));
  if (gameState.gameStatus !== "isPlaying") {
    return;
  }
  if (board[ids[0]][ids[1]] !== null) {
    return;
  } else {
    board[ids[0]][ids[1]] = gameState.currentPlayer;
    switchPlayer();
    renderGame();
    checkWin();
  }
}

function runPlayerOne() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
  const enterPlayerName = document.getElementById("enterPlayerName");
  enterPlayerName.innerHTML = html1;
  function submitName(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName");
    const newItemTextInput = document.getElementById("new-item-text");
    playerName.innerText = newItemTextInput.value;
    newItemForm.style.display = "none";
    const boardContainer = document.getElementById("boardContainer");
    boardContainer.innerHTML = html;
    newGameButton.style.display = "inline-block";
  }
  const newItemForm = document.getElementById("new-item");
  newItemForm.addEventListener("submit", submitName);
  boardContainer.addEventListener("click", boardClickP1);
}

function runPlayerTwo2() {
  comp2.style.display = "inline-block";
  const html3 = `
  <form id="new-item2">
    <input id="new-item-text2" type="text" placeholder="Enter Player Name" required>
    <button id="secondButton">Submit</button>
  </form>
  `;
  const enterPlayerName2 = document.getElementById("enterPlayerName2");
  enterPlayerName2.innerHTML = html3;
  function submitName2(event) {
    event.preventDefault();
    const Player2Name = document.getElementById("player2Name");
    const newItemTextInput2 = document.getElementById("new-item-text2");
    player2Name.innerText = newItemTextInput2.value;
    newItemForm2.style.display = "none";
    const boardContainer = document.getElementById("boardContainer");
    boardContainer.innerHTML = html;
    newGameButton.style.display = "inline-block";
  }
  const newItemForm2 = document.getElementById("new-item2");
  newItemForm2.addEventListener("submit", submitName2);
}

function runPlayerTwo() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
  const enterPlayerName = document.getElementById("enterPlayerName");
  enterPlayerName.innerHTML = html2;
  function submitName(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName");
    const newItemTextInput = document.getElementById("new-item-text");
    playerName.innerText = newItemTextInput.value;
    newItemForm.style.display = "none";
    runPlayerTwo2();
  }
  const newItemForm = document.getElementById("new-item");
  newItemForm.addEventListener("submit", submitName);
  boardContainer.addEventListener("click", boardClickP2);
}

function amtOfPlayers() {
  startGameButton.style.display = "none";
  const html4 = `
  <ul id="pickPlayerAmtList">
  <li id="onePlayer">One Player</li>
  <li id="twoPlayer">Two Player</li>
  </ul>
  `;
  const pickPlayerAmt = document.getElementById("pickPlayerAmt");
  pickPlayerAmt.innerHTML = html4;
  const onePlayer = document.getElementById("onePlayer");
  const twoPlayer = document.getElementById("twoPlayer");
  onePlayer.addEventListener("click", runPlayerOne);
  twoPlayer.addEventListener("click", runPlayerTwo);
}

function newGame() {
  board.splice(
    0,
    3,
    [null, null, null],
    [null, null, null],
    [null, null, null]
  );
  gameState.gameStatus = "isPlaying";
  renderGame();
  if (gameState.gameStatus === "isPlaying") {
    xDiv.style.display = "none";
    oDiv.style.display = "none";
  }
}

startGameButton.addEventListener("click", amtOfPlayers);
newGameButton.addEventListener("click", newGame);
