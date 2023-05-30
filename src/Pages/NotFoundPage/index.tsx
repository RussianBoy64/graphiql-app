import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";
import { DictionaryWords, useTranslate } from "@src/utils/dictionary";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const NotFoundPage = () => {
  const { welcome } = routes;
  const [titleText, subTitleText, decriptionText, welcomePageText] = useTranslate(
    DictionaryWords.notFoundTitle,
    DictionaryWords.notFoundSubtitle,
    DictionaryWords.notFoundText,
    DictionaryWords.welcomePage
  );

  return (
    <div className={styles.NotFoundPage}>
      <h3 className={styles.NotFoundPage__title}>{titleText}</h3>
      <h5 className={styles.NotFoundPage__subtitle}>{subTitleText}</h5>
      <p className={styles.NotFoundPage__text}>{decriptionText}</p>
      <NavLink to={welcome.path} key={welcome.id} className={buttonStyles.button}>
        {welcomePageText}
      </NavLink>
    </div>
  );
};
