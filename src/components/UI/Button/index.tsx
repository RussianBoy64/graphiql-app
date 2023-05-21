import styles from "./styles.module.scss";

interface IButton {
  buttonText: string;
}

export const Button = ({ buttonText }: IButton) => {
  return <button className={styles.button}>{buttonText}</button>;
};
