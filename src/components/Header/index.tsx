import { useEffect, useState } from "react";
import { Button, Logo, Navigation, Wrapper } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import { setCurrentUser } from "@src/redux/reducers/authorizationReducer";
import { setLanguage } from "@src/redux/reducers/langReducer";
import { useLocation } from "react-router-dom";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";
import { getAuth } from "firebase/auth";
import { routes } from "@src/routes";
import RuIcon from "@assets/images/ru_icon.png";
import EnIcon from "@assets/images/us_icon.png";

import styles from "./styles.module.scss";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { main } = routes;
  const language = useTypeSelector((state) => state.language.value);
  const [logOutText] = useTranslate(DictionaryWords.LogOut);
  const dispatch = useTypeDispatch();
  const location = useLocation();
  const auth = getAuth();
  const isMainPage = location.pathname === main.path;
  const headerStyles = [styles.header];

  const setHeaderSticky = () => {
    if (window.scrollY !== 0 && !isSticky) setIsSticky(true);
    if (window.scrollY === 0) setIsSticky(false);
  };

  const setAppLanguages = () => dispatch(setLanguage(language === "en" ? "ru" : "en"));

  const logOutHandler = () => {
    dispatch(setCurrentUser(null));
    auth.signOut();
  };

  if (isSticky) headerStyles.push(styles.sticky);

  useEffect(() => {
    window.addEventListener("scroll", setHeaderSticky);

    return () => window.removeEventListener("scroll", setHeaderSticky);
  });

  return (
    <header className={headerStyles.join(" ")}>
      <Wrapper layout={styles.headerLayout}>
        <Logo />
        <button className={styles.button} onClick={setAppLanguages}>
          <img
            className={styles.image}
            src={language === "en" ? RuIcon : EnIcon}
            alt="Photo"
          />
        </button>
        {isMainPage ? (
          <Button buttonText={logOutText} clickHandler={logOutHandler} />
        ) : (
          <Navigation />
        )}
      </Wrapper>
    </header>
  );
};
