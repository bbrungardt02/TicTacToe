const newGameButton = document.getElementById("newGameButton");
const startGameButton = document.getElementById("startGameButton");

function enterName() {
  const html = `
  <form id="new-item">
    <input id="new-item-text" type="text" placeholder="Enter Player Name" required>
    <button>Submit</button>
  </form>`;
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

// function newGame() {}

startGameButton.addEventListener("click", enterName);
newGameButton.addEventListener("click", newGame);
