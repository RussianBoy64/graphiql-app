import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IForm {
  submitHandler: (event: React.SyntheticEvent) => void;
  children: ReactNode;
}

export const Form = ({ submitHandler, children }: IForm) => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
};
