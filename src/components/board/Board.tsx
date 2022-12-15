// Hooks
import { useState } from "react";

// Components
import Cell from "../cell/Cell";
import RoundButton from "../round-button/RoundButton";
import { initialState } from "./initial-board/initialState";
import { CellValues } from "../cell/cell-values/cellValues";

// CSS
import styles from "./Board.module.css";

// Main function
export default function Board() {
  
  // States
  const [currentBoard, setCurrentBoard] = useState<CellValues[]>(initialState);
  const [currentPlayer, setCurrentPlayer] = useState<boolean>(false);
  const [currentWinner, setCurrentWinner] = useState<CellValues>("");

  // Function to set value on cell - It verifies if the cell is empty and if there is a winner
  const onClick = (cellId: number) => {
    if (currentWinner) {
      return;
    } else {
      let copyBoard = currentBoard;
      if (currentBoard[cellId] === "") {
        if (currentPlayer) {
          copyBoard[cellId] = "X";
        } else {
          copyBoard[cellId] = "O";
        }
        setCurrentPlayer(!currentPlayer);
      }
      setCurrentBoard(copyBoard);
      checkWinner();
    }
  };

  //Function to search for a winner
  const checkWinner = () => {
    checkRows();
    checkColumns();
    checkDiagonals();
  };

  //Function to search for a winner checking the position from the numbers array
  const checkLine = (positions: number[]): void => {
    if (
      currentBoard[positions[0]] == "X" &&
      currentBoard[positions[1]] == "X" &&
      currentBoard[positions[2]] == "X"
    ) {
      setCurrentWinner("X");
    } else if (
      currentBoard[positions[0]] == "O" &&
      currentBoard[positions[1]] == "O" &&
      currentBoard[positions[2]] == "O"
    ) {
      setCurrentWinner("O");
    }
  };

  //Function to search for a winner checking the rows
  const checkRows = () => {
    checkLine([0, 1, 2]);
    checkLine([3, 4, 5]);
    checkLine([6, 7, 8]);
  };

  //Function to search for a winner checking the columns
  const checkColumns = () => {
    checkLine([0, 3, 6]);
    checkLine([1, 4, 7]);
    checkLine([2, 5, 8]);
  };

  //Function to search for a winner checking the diagonals
  const checkDiagonals = () => {
    checkLine([0, 4, 8]);
    checkLine([2, 4, 6]);
  };

  //Function to reset the game
  const resetGame = () => {
    const copyBoard = [...initialState];
    for (let i = 0; i < 9; i++) {
      copyBoard[i] = "";
    }
    setCurrentBoard(copyBoard);
    setCurrentWinner("");
  };

  //Main function return
  return (
    <div className={styles.game}>
      <div className={styles.board}>
        {currentBoard.map((cell, cellId) => (
          <div key={cellId}>
            <Cell value={cell} handleClick={() => onClick(cellId)}></Cell>
          </div>
        ))}
      </div>
      {currentWinner ? <h1>Player "{currentWinner}" won</h1> : <h1></h1>}
      <RoundButton
        value="Reset"
        onClickHandler={() => resetGame()}
      ></RoundButton>
    </div>
  );
}
