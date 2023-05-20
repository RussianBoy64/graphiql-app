import { SyntheticEvent } from "react";
import { inputTypes } from "@src/types";

import styles from "./styles.module.scss";

interface IEmailInput {
  labelText: string;
  inputValue: string;
  inputPlaceholder?: string;
  changeHandler: (event: SyntheticEvent) => void;
}

export const EmailInput = ({
  labelText,
  inputValue,
  inputPlaceholder,
  changeHandler,
}: IEmailInput) => {
  return (
    <label className={styles.emailLabel}>
      {labelText}
      <input
        className={styles.emailInput}
        type={inputTypes.email}
        value={inputValue}
        onChange={changeHandler}
        placeholder={inputPlaceholder}
      />
    </label>
  );
};
