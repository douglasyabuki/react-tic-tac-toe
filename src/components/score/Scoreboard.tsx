// Modules
import React from "react";

// CSS
import styles from "./Scoreboard.module.css";

export interface Props {
  score: {playerO: number, playerX: number};
  // setScore: React.Dispatch<React.SetStateAction<{playerO: number, playerX: number}>>
}

export default function Scoreboard({ score }: Props) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreboardDivision}>
        <h2>Player O</h2>
        <h1>{score.playerO}</h1>
      </div>
      <div className={styles.scoreboardDivision}>
        <h2>Player X</h2>
        <h1>{score.playerX}</h1>
      </div>
    </div>
  );
}
