import styles from "./styles.module.scss";

interface IButton {
  buttonText: string;
  clickHandler?: () => void;
}

export const Button = ({ buttonText, clickHandler }: IButton) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {buttonText}
    </button>
  );
};
