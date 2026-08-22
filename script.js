
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
        return board[a]; 
      }
    }
    return null; 
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

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const getActivePlayer = () => activePlayer;

  const playRound = (index) => {
    const success = Gameboard.setMarker(index, activePlayer.marker);
    if (!success) {
      return { status: "invalid" };
    }

    const winner = Gameboard.checkWinner();
    if (winner) {
      return { status: "win", player: activePlayer };
    }

    if (Gameboard.isBoardFull()) {
      return { status: "tie" };
    }

    switchPlayerTurn();
    return { status: "ongoing", player: activePlayer };
  };

  return {
    getActivePlayer,
    switchPlayerTurn,
    playRound,
  };
})();

const DisplayController = (function () {
  const boardDiv = document.querySelector("#board");
  const messageDiv = document.querySelector("#message");

  const renderBoard = () => {
    boardDiv.innerHTML = ""; 

    const board = Gameboard.getBoard();

    board.forEach((cellValue, index) => {
      const cellButton = document.createElement("button");
      cellButton.textContent = cellValue;
      cellButton.dataset.index = index; 

      cellButton.addEventListener("click", () => {
        const result = GameController.playRound(index);
        renderBoard(); 

        if (result.status === "invalid") {
          messageDiv.textContent = "That spot is taken. Try again.";
        } else if (result.status === "win") {
          messageDiv.textContent = `${result.player.name} wins!`;
        } else if (result.status === "tie") {
          messageDiv.textContent = "It's a tie!";
        } else {
          messageDiv.textContent = `${result.player.name}'s turn`;
        }
      });

      boardDiv.appendChild(cellButton);
    });
  };

  return {
    renderBoard,
  };
})();

DisplayController.renderBoard();
