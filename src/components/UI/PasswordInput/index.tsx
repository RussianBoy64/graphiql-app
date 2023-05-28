import { SyntheticEvent, useState } from "react";
import { inputTypes } from "@src/types";

import styles from "./styles.module.scss";

interface IPasswordInput {
  labelText: string;
  inputValue: string;
  inputPlaceholder?: string;
  isPasswordValid: boolean;
  changeHandler: (event: SyntheticEvent) => void;
}

export const PasswordInput = ({
  labelText,
  inputValue,
  inputPlaceholder,
  isPasswordValid,
  changeHandler,
}: IPasswordInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClickHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getButtonStyles = () => {
    const buttonStyles = [styles.passwordButton];

    isPasswordVisible
      ? buttonStyles.push(styles.passwordButton_eyeClosed)
      : buttonStyles.push(styles.passwordButton_eyeOpen);

    return buttonStyles.join(" ");
  };
  const inputType = isPasswordVisible ? inputTypes.text : inputTypes.password;
  const buttonStyle = getButtonStyles();
  const inputStyles = [styles.passwordInput];

  if (!isPasswordValid) inputStyles.push(styles.passwordInput_invalid);

  return (
    <label className={styles.passwordLabel}>
      {labelText}
      <input
        className={styles.passwordInput}
        type={inputType}
        value={inputValue}
        onChange={changeHandler}
        placeholder={inputPlaceholder}
        autoComplete="false"
      />
      <button className={buttonStyle} onClick={onClickHandler} type="button" />
    </label>
  );
};
