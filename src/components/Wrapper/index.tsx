import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IWrapper {
  layout?: string;
  children: ReactNode;
}

export const Wrapper = ({ layout, children }: IWrapper) => {
  const wrapperStyles = [styles.wrapper, layout];

  return <div className={wrapperStyles.join(" ")}>{children}</div>;
};
