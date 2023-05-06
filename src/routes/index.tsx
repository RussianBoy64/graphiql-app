import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

enum routesPath {
  WelcomePage = "/",
  SignInPage = "/sing-in",
  SignUpPage = "/sing-up",
  MainPage = "/main",
  NotFoundPage = "*",
}

interface IRoutes {
  [key: string]: { id: number; name: string; path: routesPath; element: JSX.Element };
}

const router = createBrowserRouter([
  {
    path: routesPath.WelcomePage,
    element: <App />,
    children: [
      { path: routesPath.WelcomePage, element: <WelcomePage /> },
      { path: routesPath.SignInPage, element: <SignInPage /> },
      { path: routesPath.SignUpPage, element: <SignUpPage /> },
      { path: routesPath.MainPage, element: <MainPage /> },
      { path: routesPath.NotFoundPage, element: <NotFoundPage /> },
    ],
  },
]);

const routes: IRoutes = {
  welcome: {
    id: 1,
    name: "Main page",
    path: routesPath.WelcomePage,
    element: <WelcomePage />,
  },
  signIn: {
    id: 2,
    name: "Sign In",
    path: routesPath.SignInPage,
    element: <SignInPage />,
  },
  signUp: {
    id: 3,
    name: "Sign Up",
    path: routesPath.SignUpPage,
    element: <SignUpPage />,
  },
  main: { id: 4, name: "Main page", path: routesPath.MainPage, element: <MainPage /> },
  notFound: {
    id: 5,
    name: "Main page",
    path: routesPath.NotFoundPage,
    element: <NotFoundPage />,
  },
};

export default router;

export { routes };
