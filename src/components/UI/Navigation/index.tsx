import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";
import { useTranslate } from "@src/utils/dictionary";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const Navigation = () => {
  const { signIn, signUp } = routes;

  return (
    <nav className={styles.nav}>
      <NavLink to={signIn.path} key={signIn.id} className={buttonStyles.button}>
        {useTranslate('SignIn')}
      </NavLink>
      <NavLink to={signUp.path} key={signUp.id} className={buttonStyles.button}>
        {useTranslate('SignUp')}
      </NavLink>
    </nav>
  );
};
