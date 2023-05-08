import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "./app.module.scss";
import Wrapper from "@components/Wrapper";

function App() {
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
