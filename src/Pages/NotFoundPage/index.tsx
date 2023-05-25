import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";
import { useTranslate } from "@src/utils/dictionary";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const NotFoundPage = () => {
  const { welcome } = routes;
  return (
    <div className={styles.NotFoundPage}>
      <h3 className={styles.NotFoundPage__title}>{useTranslate('notFoundTitle')}</h3>
      <h5 className={styles.NotFoundPage__subtitle}>{useTranslate('notFoundSubtitle')}</h5>
      <p className={styles.NotFoundPage__text}>{useTranslate('notFoundText')}</p>
      <NavLink to={welcome.path} key={welcome.id} className={buttonStyles.button}>
      {useTranslate('welcomePage')}
      </NavLink>
    </div>
  );
};
