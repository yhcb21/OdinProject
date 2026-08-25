// Tic Tac Toe
//
//
function createPlayer(name, marker) {
  return { name, marker };
}
const player1 = createPlayer("Alice", "X");
const player2 = createPlayer("Yash", "O");

const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const setMarker = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        return board[a]; // "X" or "O"
      }
    }

    return null; // no winner found
  };

  const isBoardFull = () => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        return false;
      }
    }
    return true;
  };


  return {
    getBoard: () => board,
    setMarker,
    resetBoard,
    checkWinner,
    isBoardFull,
  };
})();

const GameController = (function () {
  let activePlayer = player1;
  const boardDiv = document.querySelector("#board");



  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const getActivePlayer = () => activePlayer;

  const playRound = (index) => {
    const success = Gameboard.setMarker(index, activePlayer.marker);
    if (!success) {
      console.log("That spot is taken. Try again.");
      return;
    }

    const winner = Gameboard.checkWinner();
    if (winner) {
      console.log(`${activePlayer.name} wins!`);
      return;
    }

    if (Gameboard.isBoardFull()) {
      console.log("It is a tie.");
    }

    switchPlayerTurn();

    const renderBoard = () => {
      boardDiv.innerHTML = ""; // clear old cells first

      const board = Gameboard.getBoard();

      board.forEach((cellValue, index) => {
        const cellButton = document.createElement("button");
        cellButton.textContent = cellValue;
        cellButton.dataset.index = index; // stash the index on the element
        boardDiv.appendChild(cellButton);
      });
    };
  }

  return {
    getActivePlayer,
    switchPlayerTurn,
    playRound,
    renderBoard,
  };
})();

const DisplayController = (function () {
  const boardDiv = document.querySelector("#board");

  const renderBoard = () => {
    boardDiv.innerHTML = ""; // clear old cells first

    const board = Gameboard.getBoard();

    board.forEach((cellValue, index) => {
      const cellButton = document.createElement("button");
      cellButton.textContent = cellValue;
      cellButton.dataset.index = index; // stash the index on the element
      boardDiv.appendChild(cellButton);
    });
  };

  return {
    renderBoard,
  };
})();

function getBoard() {
  console.log(Gameboard.getBoard());
}

DisplayController.renderBoard();
GameController.playRound(0); // Alice (X) plays top-left
GameController.playRound(3); // Yash (O) plays
GameController.playRound(1); // Alice
GameController.playRound(4); // Yash
GameController.playRound(2); // Alice — should complete top row, print "Alice wins!"
