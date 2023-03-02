const newGameButton = document.getElementById("newGameButton");
const startGameButton = document.getElementById("startGameButton");

function runPlayerOne() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
  const html = `
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
  const enterPlayerName = document.getElementById("enterPlayerName");
  enterPlayerName.innerHTML = html;
  function submitName(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName");
    const newItemTextInput = document.getElementById("new-item-text");
    playerName.innerText = newItemTextInput.value;
    newItemForm.style.display = "none";
    const html2 = `<div class="board">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  </div><div id="newGameButton">New Game</div>`;
    const boardContainer = document.getElementById("boardContainer");
    boardContainer.innerHTML = html2;
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
    const html2 = `<div class="board">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  </div><div id="newGameButton">New Game</div>`;
    const boardContainer = document.getElementById("boardContainer");
    boardContainer.innerHTML = html2;
  }
  const newItemForm2 = document.getElementById("new-item2");
  newItemForm2.addEventListener("submit", submitName2);
}

function runPlayerTwo() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
  const html = `
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
  const enterPlayerName = document.getElementById("enterPlayerName");
  enterPlayerName.innerHTML = html;
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
  const html0 = `
  <ul id="pickPlayerAmtList">
  <li id="onePlayer">One Player</li>
  <li id="twoPlayer">Two Player</li>
  </ul>
  `;
  const pickPlayerAmt = document.getElementById("pickPlayerAmt");
  pickPlayerAmt.innerHTML = html0;
  const onePlayer = document.getElementById("onePlayer");
  const twoPlayer = document.getElementById("twoPlayer");
  onePlayer.addEventListener("click", runPlayerOne);
  twoPlayer.addEventListener("click", runPlayerTwo);
}

// function newGame() {}

startGameButton.addEventListener("click", amtOfPlayers);
newGameButton.addEventListener("click", newGame);
