const newGameButton = document.getElementById("newGameButton");
const newItemForm = document.querySelector("#new-item");
const newItemTextInput = document.querySelector("#new-item-text");
const startGameButton = document.getElementById("startGameButton");

function enterName() {
  const enterPlayerName = document.getElementById("enterPlayerName");
  const html = `
  <form id="new-item">
    <input id="new-item-text" type="text" placeholder="Enter Player Name" required>
    <button>Submit</button>
  </form>`;
  enterPlayerName.innerHTML = html;
  newItemForm.addEventListener("submit", submitName);
}

function submitName(event) {
  event.preventDefault();
  const playerName = document.getElementById("playerName");
  playerName.innerText = newItemTextInput.value;
}

function startGame() {
  const html2 = `<div id="newGameButton">New Game</div><div class="board">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>`;
  const boardContainer = document.getElementById("boardContainer");
  boardContainer.innerHTML = html2;
  startGameButton.style.display = "none";
}

function newGame() {}
// newItemForm.addEventListener("submit", submitName);
startGameButton.addEventListener("click", enterName);
newGameButton.addEventListener("click", newGame);
