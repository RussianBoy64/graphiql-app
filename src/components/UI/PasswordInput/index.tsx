import { SyntheticEvent, useState } from "react";
import { inputTypes } from "@src/types";

import styles from "./styles.module.scss";

interface IPasswordInput {
  labelText: string;
  inputValue: string;
  inputPlaceholder?: string;
  changeHandler: (event: SyntheticEvent) => void;
}

export const PasswordInput = ({
  labelText,
  inputValue,
  inputPlaceholder,
  changeHandler,
}: IPasswordInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClickHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getButtonStyles = () => {
    const buttonStyles = [styles.emailButton];

    isPasswordVisible
      ? buttonStyles.push(styles.emailButton_eyeClosed)
      : buttonStyles.push(styles.emailButton_eyeOpen);

    return buttonStyles.join(" ");
  };
  const inputType = isPasswordVisible ? inputTypes.text : inputTypes.password;
  const buttonStyle = getButtonStyles();

  return (
    <label className={styles.emailLabel}>
      {labelText}
      <input
        className={styles.emailInput}
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
