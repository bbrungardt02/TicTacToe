const newGameButton = document.getElementById("newGameButton");
const startGameButton = document.getElementById("startGameButton");
const onePlayer = document.getElementById("onePlayer");
const twoPlayer = document.getElementById("twoPlayer");

function enterName() {
  const html = `
  <h3 id="title2">Player:</h3>
  <form id="new-item">
    <input id="new-item-text" type="text" placeholder="Enter Player Name" required>
    <button>Submit</button>
  </form>
  <h3 id="cpuTitle">Player:</h3>
  <h2 id="cpuName">Computer</h2>
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
    startGameButton.style.display = "none";
  }
  const newItemForm = document.getElementById("new-item");
  newItemForm.addEventListener("submit", submitName);
}

function runPlayerOne() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
  enterName();
}

function runPlayerTwo() {
  const pickPlayerAmtList = document.getElementById("pickPlayerAmtList");
  pickPlayerAmtList.style.display = "none";
}

function amtOfPlayers() {
  const html0 = `
  <ul id="pickPlayerAmtList">
  <li id="onePlayer">One Player</li>
  <li id="twoPlayer">Two Player</li>
  </ul>
  `;
  const pickPlayerAmt = document.getElementById("pickPlayerAmt");
  pickPlayerAmt.innerHTML = html0;
  onePlayer.addEventListener("click", runPlayerOne);
  twoPlayer.addEventListener("click", runPlayerTwo);
}

function newGame() {}

startGameButton.addEventListener("click", amtOfPlayers);
newGameButton.addEventListener("click", newGame);
