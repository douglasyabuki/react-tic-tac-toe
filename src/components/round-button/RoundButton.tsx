//CSS
import styles from "./RoundButton.module.css";

//Destructuring the props
interface Props {
  value: string;
  onClickHandler?: React.MouseEventHandler;
}

//This function exports a round button (currently used only to reset the board)
export default function RoundButton({ value, onClickHandler }: Props) {
  return (
    <div className={styles.buttonContainer}>
      <button value={value} onClick={onClickHandler}>
        {value}
      </button>
    </div>
  );
}
