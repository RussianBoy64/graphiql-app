import { useEffect, useState } from "react";
import { Logo, Navigation, Wrapper } from "@src/components";
import { useTypeSelector, useTypeDispatch } from "@src/redux/store";
import styles from "./styles.module.scss";
import { setLanguage } from "@src/redux/reducers/langReducer";
import RuIcon from '../../assets//images/ru_icon.png';
import EnIcon from '../../assets//images/us_icon.png';

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerStyles = [styles.header];
  const language = useTypeSelector((state) => state.language.value);
  const dispatch = useTypeDispatch();

  const setHeaderSticky = () => {
    if (window.scrollY !== 0 && !isSticky) setIsSticky(true);
    if (window.scrollY === 0) setIsSticky(false);
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
        <div className={styles.buttonsBlock}>
          <button className={styles.button} onClick={() => dispatch(setLanguage(language === 'en' ? 'ru' : 'en'))}>
            <img className={styles.image} src={language === 'en' ? RuIcon : EnIcon} alt="Photo" />
          </button>
          <Navigation />
        </div>
      </Wrapper>
    </header>
  );
};
