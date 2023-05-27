import { useEffect } from "react";
import { useTypeDispatch } from "./redux/store";
import { Outlet } from "react-router-dom";
import { Footer, Header, Wrapper } from "@components/index";
import { getAuth } from "firebase/auth";
import { setCurrentUser } from "./redux/reducers/authorizationReducer";

import styles from "./app.module.scss";

function App() {
  const dispatch = useTypeDispatch();
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.email) {
        console.log(user);
        dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export default App;
