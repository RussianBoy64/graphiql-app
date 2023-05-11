import { Outlet } from "react-router-dom";
import { Footer, Header, Wrapper } from "./components";
import styles from "./app.module.scss";

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
