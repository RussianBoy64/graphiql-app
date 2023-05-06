import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";

import styles from "./styles.module.scss";

function Logo() {
  const { welcome } = routes;

  return (
    <h1 className={styles.logo}>
      <NavLink to={welcome.path}>Raccoons GraphQL</NavLink>
    </h1>
  );
}

export default Logo;
