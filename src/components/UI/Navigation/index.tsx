import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { useTypeSelector } from "@src/redux/store";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const Navigation = () => {
  const { signIn, signUp, main } = routes;
  const { currentUser } = useTypeSelector((state) => state.login);
  const [mainPageText, signInText, signUpText] = useTranslate(
    DictionaryWords.MainPage,
    DictionaryWords.SignIn,
    DictionaryWords.SignUp
  );

  return (
    <nav className={styles.nav}>
      {currentUser ? (
        <NavLink to={main.path} className={buttonStyles.button}>
          {mainPageText}
        </NavLink>
      ) : (
        <>
          <NavLink to={signIn.path} className={buttonStyles.button}>
            {signInText}
          </NavLink>
          <NavLink to={signUp.path} className={buttonStyles.button}>
            {signUpText}
          </NavLink>
        </>
      )}
    </nav>
  );
};
