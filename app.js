const newGameButton = document.getElementById("newGameButton");
const startGameButton = document.getElementById("startGameButton");
const boardContainer = document.getElementById("boardContainer");

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
  </div><div id="newGameButton">New Game</div>`;

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
  gameStatus: ["isPlaying"],
};
gameState.currentPlayer = gameState.players[0];

function renderGame() {
  const board = gameState.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const cell = document.getElementById(`${i},${j}`);
      cell.innerText = board[i][j];
    }
  }
  console.log(gameState.board);
  // Call this function after you've changed your state values
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}

function checkWin() {
  //   // Maybe this calls other helper functions?
  //   // function checkRow() {}
  //   // function checkColumn() {}
  //   // function checkDiagonals() {}
}

function switchPlayer() {
  let currentIndex = gameState.players.indexOf(gameState.currentPlayer);
  let nextIndex = (currentIndex + 1) % gameState.players.length;
  gameState.currentPlayer = gameState.players[nextIndex];
}

function boardClick(event) {
  //<div id="0,0"></div>
  //now ids is an array of numbers.  
  let ids = event.target.id.split(',').map((item) => parseInt(item));
  gameState.board[ids[0]][ids[1]] = gameState.currentPlayer;

  renderGame();
  // event.target.value = gameState.currentPlayer;
  // console.log(event.target.value);
  // gameState.board.splice(event.target.value, gameState.currentPlayer);
  switchPlayer();
  // checkWin();
  // Figure out how to get the coordinates off event object (e.target.value)
  // Use those coordinates to reference indexes in our gameState.board
  // Set the position in our board to the current player
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
  }
  const newItemForm = document.getElementById("new-item");
  newItemForm.addEventListener("submit", submitName);
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
  //   let gameState = {
  //     board: [
  //       [null, null, null],
  //       [null, null, null],
  //       [null, null, null],
  //     ],
  //   };
}
boardContainer.addEventListener("click", boardClick);
startGameButton.addEventListener("click", amtOfPlayers);
// newGameButton.addEventListener("click", newGame);
