import { SyntheticEvent } from "react";
import { inputTypes } from "@src/types";

import styles from "./styles.module.scss";

interface IEmailInput {
  labelText: string;
  inputValue: string;
  inputPlaceholder?: string;
  isEmailValid: boolean;
  changeHandler: (event: SyntheticEvent) => void;
}

export const EmailInput = ({
  labelText,
  inputValue,
  inputPlaceholder,
  isEmailValid,
  changeHandler,
}: IEmailInput) => {
  const inputStyles = [styles.emailInput];

  if (!isEmailValid) inputStyles.push(styles.emailInput_invalid);

  return (
    <label className={styles.emailLabel}>
      {labelText}
      <input
        className={inputStyles.join(" ")}
        type={inputTypes.text}
        value={inputValue}
        onChange={changeHandler}
        placeholder={inputPlaceholder}
      />
    </label>
  );
};
