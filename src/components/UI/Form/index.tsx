import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IForm {
  submitHandler: () => void;
  children: ReactNode;
}

export const Form = ({ submitHandler, children }: IForm) => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
};
