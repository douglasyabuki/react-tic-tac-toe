//CSS
import styles from "./Cell.module.css";

//Types
import { CellValues } from "./cell-values/cellValues";

//Destructuring the Props
interface Props {
  value: CellValues;
  handleClick?: React.MouseEventHandler;
}

//This function returns a single square to the board
export default function Cell({ value, handleClick }: Props) {
  return (
    <div className={styles.cell}>
      <button value={value} onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
