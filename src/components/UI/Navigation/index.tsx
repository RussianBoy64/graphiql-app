import { NavLink } from "react-router-dom";
import { routes } from "@routes/index";

import buttonStyles from "@components/UI/Button/styles.module.scss";

function Navigation() {
  //TODO: add navigation styles
  const { signIn, signUp } = routes;

  return (
    <nav>
      <NavLink to={signIn.path} key={signIn.id} className={buttonStyles.button}>
        {signIn.name}
      </NavLink>
      <NavLink to={signUp.path} key={signUp.id} className={buttonStyles.button}>
        {signUp.name}
      </NavLink>
    </nav>
  );
}

export default Navigation;
