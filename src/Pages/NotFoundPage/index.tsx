import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";

import styles from "./styles.module.scss";
import buttonStyles from "@components/UI/Button/styles.module.scss";

export const NotFoundPage = () => {
  const { welcome } = routes;
  return (
    <div className={styles.NotFoundPage}>
      <h3 className={styles.NotFoundPage__title}>Oops!</h3>
      <h5 className={styles.NotFoundPage__subtitle}>404 - page not found!</h5>
      <p className={styles.NotFoundPage__text}>
        The page you are looking for might have been removed, had its name changed or
        temporarily unavaliable.
      </p>
      <NavLink to={welcome.path} key={welcome.id} className={buttonStyles.button}>
        {welcome.name}
      </NavLink>
    </div>
  );
};
