import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const Navigation = () => {
  const { signIn, signUp } = routes;

  return (
    <nav className={styles.nav}>
      <NavLink to={signIn.path} key={signIn.id} className={buttonStyles.button}>
        {signIn.name}
      </NavLink>
      <NavLink to={signUp.path} key={signUp.id} className={buttonStyles.button}>
        {signUp.name}
      </NavLink>
    </nav>
  );
};
