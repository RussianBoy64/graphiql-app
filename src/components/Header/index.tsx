import { useEffect, useState } from "react";
import { Logo, Navigation, Wrapper } from "..";
import styles from "./styles.module.scss";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerStyles = [styles.header];

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
        <Navigation />
      </Wrapper>
    </header>
  );
};
