import "./style.css";
import { faker } from "@faker-js/faker";

const board = document.querySelector("[data-board]");
const cells = board.querySelectorAll("[data-cell]");
const scoreBoard = {
  O: document.querySelector("[data-wins-O]"),
  X: document.querySelector("[data-wins-X]"),
  ties: document.querySelector("[data-ties-X]"),
};

const cellsArray = [...cells];
let playerNumber = 1;

function renderCells(cellsArray) {
  cellsArray.forEach((cell) => {
    const value = cell.dataset.cell;
    cell.innerText = value;
  });
}

function setCellActions(cellsArray) {
  cellsArray.forEach((cell) => {
    cell.onclick = () => {
      const value = cell.dataset.cell;
      if (value) {
        return;
      }

      const nextPlay = playerNumber === 1 ? "O" : "X";
      cell.dataset.cell = nextPlay;
      cell.innerText = nextPlay;

      if (checkWinner(cellsArray) || didGameEnd(cellsArray)) {
        alert("O jogo acabou");
        restartGame(cellsArray);
      }

      playerNumber = playerNumber === 1 ? 2 : 1;
    };
  });
}

function didGameEnd(cellsArray) {
  return cellsArray.every((cell) => cell.dataset.cell);
}

function restartGame(cellsArray) {
  cellsArray.forEach((cell) => {
    cell.dataset.cell = "";
  });

  renderCells(cellsArray);
}

function checkWinner(cellsArray) {
  const horizontalGroups = [];

  const verticalGroups = [];

  const diagonalGroups = [];

  Array.from({ length: 3 }).forEach((_, index) => {
    horizontalGroups.push([
      cellsArray[3 * index],
      cellsArray[3 * index + 1],
      cellsArray[3 * index + 2],
    ]);
    verticalGroups.push([
      cellsArray[index],
      cellsArray[index + 3],
      cellsArray[index + 6],
    ]);
  });

  diagonalGroups.push(
    [cellsArray[0], cellsArray[4], cellsArray[8]],
    [cellsArray[2], cellsArray[4], cellsArray[6]]
  );

  // console.log(horizontalGroups.forEach((cell) => console.log(cell)));
  const allGroups = [...horizontalGroups, ...verticalGroups, ...diagonalGroups];
  let didWin = false;

  allGroups.forEach((group) => {
    if (
      group.every((cell) => cell.dataset?.cell === "O") ||
      group.every((cell) => cell.dataset?.cell === "X")
    ) {
      didWin = true;
    }
  });

  if (didWin) {
    const scoreSpan = playerNumber === 1 ? scoreBoard.O : scoreBoard.X;
    const scoreValue =
      scoreSpan.dataset[`wins${playerNumber === 1 ? "O" : "X"}`];

    const newScore = parseInt(scoreValue) + 1;
    scoreSpan.dataset[`wins${playerNumber === 1 ? "O" : "X"}`] = newScore;
    scoreSpan.innerText = newScore;
  }

  return didWin;
}

setCellActions(cellsArray);
renderCells(cellsArray);
